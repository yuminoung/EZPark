const bodyParser = require('body-parser')
const express = require('express')
const session = require('express-session');
const passport = require('passport');
const path = require('path')
const app = express()
const User = require('./models/user')
const flash = require('connect-flash')

// Static files and template engine
app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'pug')
app.set('views', './views')

// Body parser
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Express Session
app.use(session({
    secret: 'secret',
    saveUninitialized: true,
    resave: true

}));
app.use(flash());


// Passport init
app.use(passport.initialize());
app.use(passport.session());


var LocalStrategy = require('passport-local').Strategy;
passport.use(new LocalStrategy(
    {
        usernameField: 'email',
        passwordField: 'password'
    },
    function (username, password, done) {
        User.getUserByEmail(username, function (err, user) {
            if (err) throw err;
            if (!user) {
                return done(null, false, { message: 'Unknown User' });
            }
            User.comparePassword(password, user.password, function (err, isMatch) {
                if (err) throw err;
                if (isMatch) {
                    return done(null, user);
                } else {
                    return done(null, false, { message: 'Invalid password' });
                }
            });
        });
    }
));

passport.serializeUser(function (user, done) {
    done(null, user.id);
});

passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
        done(err, user);
    });
});

//connect to database
require('./models/db.js')

//routes
var routes = require('./routes/routes.js');
app.use('/', routes);

//listen
PORT = process.env.PORT || 3000
app.listen(PORT, () => 'Listening...')

