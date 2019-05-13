const path = require('path')
const public_path = path.join(__dirname, '../public/')
const mongoose = require('mongoose')
const User = mongoose.model('User')
const bcrypt = require('bcryptjs')

// show sign up page
var signup_index = function (req, res) {
    // redirect user to home page if already signed in
    if (req.user) {
        res.redirect('/')
    } else {
        res.sendFile(public_path + 'signup.html')
    }
}

// sign up new user
var signup = function (req, res) {
    var password = req.body.password;
    var password2 = req.body.password2;
    var email = req.body.email;
    var name = req.body.name;

    //validate email, if email not exists create user else send error
    User.findOne({ email: email }, function (err, result) {
        if (result) {
            res.status(500).send('email already exists. Please try another email')
        } else {

            // validate password and password2 are typed correctly
            if (password == password2) {
                var newUser = new User({
                    name: name,
                    email: email,
                    password: password
                });

                // hash the password and save the user
                bcrypt.genSalt(10, function (err, salt) {
                    bcrypt.hash(newUser.password, salt, function (err, hash) {
                        newUser.password = hash
                        newUser.save(function (err) {
                            if (err) { res.send('error') }
                        })
                        res.send('You are now registered, please continue to login').end()
                    })
                })

            } else {
                res.status(500).send("Password not match").end()
            }

        }
    })
}


// show signin page
var signin_index = function (req, res) {
    //redirect user to home page if signed in
    if (req.user) {
        res.redirect('/')
    } else {
        res.sendFile(public_path + 'signin.html')

    }
}


// sign in user
var signin = function (req, res) {
    res.redirect('/')
}

var flash_error = function (req, res) {
    res.json(req.flash('error'))
}

// GET /user
var index = function (req, res) {
    if (req.user) {
        res.sendFile(public_path + 'user/profile.html')
    } else {
        res.redirect('/signin')
    }
}

// return user json
var api_user = function (req, res) {
    res.json(req.user)
}

var logout = function (req, res) {
    req.logout();
    res.redirect('/')
}

module.exports.api_user = api_user

module.exports.signup_index = signup_index
module.exports.signup = signup

module.exports.signin_index = signin_index
module.exports.signin = signin

module.exports.index = index

module.exports.logout = logout

module.exports.flash_error = flash_error