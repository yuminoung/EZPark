const express = require('express')
const app = express()

//body parser read data from POST
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

//connect to database
require('./models/db.js')

//routes
var routes = require('./routes/routes.js');
app.use('/', routes);

//listen
PORT = process.env.PORT || 3000
app.listen(PORT, () => 'Listening...')

