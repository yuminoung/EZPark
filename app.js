const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const app = express()


app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.set('view engine', 'pug')
app.set('views', './views')


//connect to database
require('./models/db.js')

//routes
var routes = require('./routes/routes.js');
app.use('/', routes);

//listen
PORT = process.env.PORT || 3000
app.listen(PORT, () => 'Listening...')

