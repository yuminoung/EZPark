var express = require('express')
var router = express.Router()

var carpark = require('../controllers/carpark.js')


// //show all available street parking in melbourne CBD
// router.get('/carpark', controller.findAllParkings)

// //get one parking location by bay id
// router.get('/carpark/:id', controller.findOneParking)

router.get('/carpark', carpark.index)
router.get('/carpark/:id', carpark.show)



module.exports = router