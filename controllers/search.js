// Search Controller
const mongoose = require('mongoose')
const Search = mongoose.model('Search')
const path = require('path')
const public_path = path.join(__dirname, '../public/')
const fetch = require('node-fetch')

const carpark_api = 'https://data.melbourne.vic.gov.au/resource/dtpv-d4pf.json'
const mapbox_api = "https://api.mapbox.com/geocoding/v5/mapbox.places/"
const mapbox_token = "access_token=pk.eyJ1IjoieXVtaW5vdW5nIiwiYSI6ImNqdXczOWVzazA4OXM0M2xhMHJ3amhyOWUifQ.EXLrlr49xL8WfBh5PAVWMw"
const mapbox_parameters = "&limit=1&country=AU"

var show = function (req, res) {

    // const map_api = mapbox_api + req.params.query + ".json?" + mapbox_token + mapbox_parameters;
    // fetch(map_api).then(res => res.json()).then(json => res.send(json)).catch(err => console.log(err))

    fetch(carpark_api)
        .then(res => res.json())
        .then(json => {

            var carparks = []

            for (var i = 0; i < json.length; i++) {
                var carpark = {
                    "type": "Feature",
                    "geometry": json[i]["location"],
                    "properties": {
                        "status": json[i]["status"]
                    }
                }
                carparks.push(carpark)
            }

            var carpark_collection = {
                "type": "FeatureCollection",
                "features": carparks
            }
            res.render('index', { carpark_collection: JSON.stringify(carpark_collection) })
        })
        .catch(err => console.log(err))

    // res.sendFile(public_path + 'result.html')
}

//save search to mongodb
var store = function (req, res) {
    var search = new Search({
        search: req.body.search
    })
    console.log(req.body.search)
    search.save(function (err) {
        if (err) {
            res.send('error')
        } else {
            res.redirect('/search/' + req.body.search)
        }
    })
}

module.exports.store = store
module.exports.show = show
