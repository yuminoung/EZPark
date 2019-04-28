// Search Controller
const mongoose = require('mongoose')
const Search = mongoose.model('Search')
const fetch = require('node-fetch')

const carpark_api = 'https://data.melbourne.vic.gov.au/resource/dtpv-d4pf.json'
const mapbox_api = "https://api.mapbox.com/geocoding/v5/mapbox.places/"
const mapbox_token = "access_token=pk.eyJ1IjoieXVtaW5vdW5nIiwiYSI6ImNqdXczOWVzazA4OXM0M2xhMHJ3amhyOWUifQ.EXLrlr49xL8WfBh5PAVWMw"
//limit search result to 1, australia and nearest to Melbourne CBD
const mapbox_parameters = "&proximity=144.953,-37.817&limit=1&country=AU"

//show user search result
var show = function (req, res) {
    //step1: convert user search location into geo location using mapbox api
    //step2: get all the carparks from melbourne data api
    //step3: using the geo location from search result 
    //.......and the geolocation provided from carpark api, calculate the estimatedd distance
    //step4: store all data in json, render the data using pug template engine

    const map_api = mapbox_api + req.params.query + ".json?" + mapbox_token + mapbox_parameters;
    fetch(map_api)
        .then(res => res.json())
        .then(result => {

            var coordinates = result['features'][0]['geometry']['coordinates']
            var place_name = result['features'][0]['place_name']
            fetch(carpark_api)
                .then(res => res.json())
                .then(json => {
                    var carparks = []

                    for (var i = 0; i < json.length; i++) {

                        var lon = json[i]['location']['coordinates'][0]
                        var lat = json[i]['location']['coordinates'][1]
                        var estimated_distance = distanceInMeters(lat, lon, coordinates[1], coordinates[0])
                        var carpark = {
                            "type": "Feature",
                            "geometry": json[i]["location"],
                            "properties": {
                                "status": json[i]["status"],
                                "distance": estimated_distance,
                                "id": 'Carpark ' + json[i]["bay_id"]
                            }
                        }

                        carparks.push(carpark)
                    }

                    carparks.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));

                    carparks.sort(function (a, b) {
                        return a.properties.distance - b.properties.distance
                    });


                    var carpark_collection = {
                        "type": "FeatureCollection",
                        "features": carparks
                    }

                    res.render('search/result', {
                        carpark_collection: JSON.stringify(carpark_collection), place_name: JSON.stringify(place_name)
                    })
                })
                .catch(err => console.log(err))
        })
        .catch(err => {
            res.redirect('../search/' + req.params.query + '/no_result')
        })
}


// return no result page when mapbox cant find a address
var noresult = function (req, res) {
    res.render('search/no_result', {
        query: req.params.query
    })
}

// save most relavent search placename to mongodb and increment the search count
var store = function (req, res) {
    const map_api = mapbox_api + req.body.search + ".json?" + mapbox_token + mapbox_parameters;
    fetch(map_api)
        .then(res => res.json())
        .then(result => {
            var place_name = result['features'][0]['place_name']
            //if exists increment search count by one, else save new search
            Search.findOneAndUpdate(
                { place_name: place_name },
                { $inc: { search_count: 1 } },
                { new: true, useFindAndModify: false },
                function (err, result) {
                    if (err) { console.log('some error') }

                    //cant find the place, add new place to db
                    if (!result) {
                        var search = new Search({
                            query: req.body.search,
                            place_name: place_name,
                            search_count: 1,
                        })
                        search.save(function (err) {
                            if (err) { res.send('error') }
                        })
                    }
                })
            res.redirect('/search/' + req.body.search)

        })
        .catch(err => {
            res.redirect('search/' + req.body.search + '/no_result')
        })


}

// helper function: convert degree to radian
function degreesToRadians(degrees) {
    return degrees * Math.PI / 180;
}

// helper function: calculate distance between two geo locations
// finding real distance between 2 locations is difficult
// because we have many carparks to the location
// so making hundreds of api calls to the mapbox is not a good option
// ref: https://stackoverflow.com/questions/365826/calculate-distance-between-2-gps-coordinates
function distanceInMeters(lat1, lon1, lat2, lon2) {
    var earthRadiusKm = 6371;

    var dLat = degreesToRadians(lat2 - lat1);
    var dLon = degreesToRadians(lon2 - lon1);

    lat1 = degreesToRadians(lat1);
    lat2 = degreesToRadians(lat2);

    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return Math.round(earthRadiusKm * c * 1000);
}

module.exports.store = store
module.exports.show = show
module.exports.noresult = noresult