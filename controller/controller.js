
const fetch = require('node-fetch')
const path = require('path')



var index = function (req, res) {
    res.sendFile('index.html')
}


var createParking = function (req, res) {
    var parking = new Parking({
        "bay_id": req.body.bay_id,
        "status": req.body.status,
        "lat": req.body.lat,
        "lon": req.body.lon,
        "distance": req.body.distance
    });
    parking.save(function (err, newParking) {
        if (!err) {
            res.send(newParking);
        } else {
            res.sendStatus(400);
        }
    });
};

var findAllParkings = function (req, res) {
    // Parking.find(function(err, parkings){
    //     if(!err){
    //         res.send(parkings);
    //     }else{
    //         res.sendStatus(404);
    //     }
    // });
    const apiUrl = 'https://data.melbourne.vic.gov.au/resource/dtpv-d4pf.json'

    fetch(apiUrl).then(res => res.json()).then(json => res.send(json)).catch(err => console.log(err))

};

var findOneParking = function (req, res) {
    // https://data.melbourne.vic.gov.au/resource/dtpv-d4pf.json?bay_id=1019

    let api_url = 'https://data.melbourne.vic.gov.au/resource/dtpv-d4pf.json?bay_id=' + req.params.id
    fetch(api_url).then(res => res.json()).then(json => res.send(json)).catch(err => console.log(err))

};

var findParkingById = function (req, res) {
    var parkingId = req.params.bay_id;
    Parking.find({ bay_id: parkingId }, function (err, parking) {
        if (!err) {
            res.send(parkingName);
        } else {
            res.sendStatus(404);
        }
    });
};

module.exports.createParking = createParking;
module.exports.findAllParkings = findAllParkings;
module.exports.findOneParking = findOneParking;
module.exports.index = index
// module.exports.findParkingByName = findParkingByName;
