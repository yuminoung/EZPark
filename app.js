const express = require('express')
const app = express()
const fetch = require('node-fetch')


var routes = require('./routes/routes.js');
app.use('/', routes);


PORT = process.env.PORT || 3000

app.listen(PORT, () => 'Listening...')




// const apiUrl = 'https://data.melbourne.vic.gov.au/resource/dtpv-d4pf.json'


// app.get('/', (req, res) => {
// res.sendFile(__dirname + '/src/index.html')
//     // fetch(apiUrl).then()

//     fetch(apiUrl).then(res => res.json()).then(json => res.send(json)).catch(err => console.log(err))
// })
