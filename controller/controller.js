var mongoose = require('mongoose');
var Parking = mongoose.model('parkings');

var createParking = function(req,res){
    var parking = new Parking({
        "bay_id": req.body.bay_id,
        "status": req.body.status,
        "lat": req.body.lat,
        "lon": req.body.lon,
        "distance": req.body.distance
    });
    parking.save(function(err,newParking){
        if(!err){
            res.send(newParking);
        }else{
            res.sendStatus(400);
        }
    });
};

var findAllParkings = function(req,res){
    Parking.find(function(err, parkings){
        if(!err){
            res.send(parkings);
        }else{
            res.sendStatus(404);
        }
    });
};

var findOneParking = function(req,res){
    var parkingInx = req.params.bay_id;
    Parking.findById(parkingInx,function(err,parking){
        if(!err){
            res.send(parking);
        }else{
            res.sendStatus(404);
        }
    });
};

var findParkingById = function(req, res){
    var parkingId = req.params.bay_id;
    Parking.find({bay_id:parkingId},function(err,parking){
        if(!err){
            res.send(parkingName);
        }else{
            res.sendStatus(404);
        }
    });
};

module.exports.createParking = createParking;
module.exports.findAllParkings = findAllParkings;
module.exports.findOneParking = findOneParking;
module.exports.findParkingByName = findParkingByName;
