const express = require('express')
const path = require('path')
const app = express()

var routes = require('./routes/routes.js');

app.use(express.static(__dirname + '/public'));
app.use('/', routes);



PORT = process.env.PORT || 3000

app.listen(PORT, () => 'Listening...')

