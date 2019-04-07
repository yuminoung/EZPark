const express = require('express')
const app = express()
const fetch = require('node-fetch')

// const controller = require(controller)

const apiUrl = 'https://data.melbourne.vic.gov.au/resource/dtpv-d4pf.json'


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/src/index.html')
    // fetch(apiUrl).then(res => res.json()).then(json => res.send(json)).catch(err => console.log(err))
})

// app.get('/hello', controller.getHello)


// app.get('/result', (req, res) => {
//     res.sendFile(__dirname + '/src/result.html')

// })

// app.use('/')

PORT = process.env.PORT || 3000

app.listen(PORT, () => 'Listening...')

//https://data.melbourne.vic.gov.au/resource/dtpv-d4pf.json