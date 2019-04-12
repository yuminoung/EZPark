const express = require('express')
const app = express()

require('./models/db.js')

var routes = require('./routes/routes.js');
app.use(express.static(__dirname + '/public'))
app.use('/', routes);


PORT = process.env.PORT || 3000
app.listen(PORT, () => 'Listening...')

