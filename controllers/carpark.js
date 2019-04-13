// Carpark Controller

const fetch = require('node-fetch')
const api_url = 'https://data.melbourne.vic.gov.au/resource/dtpv-d4pf.json'


//show all the street parking locations
var index = function (req, res) {
    fetch(api_url).then(res => res.json()).then(json => res.send(json)).catch(err => console.log(err))
}


//show a single street parking location
var show = function (req, res) {
    let parking_by_id = api_url + '?bay_id=' + req.params.id
    fetch(parking_by_id).then(res => res.json()).then(json => res.send(json)).catch(err => console.log(err))
}

module.exports.index = index
module.exports.show = show