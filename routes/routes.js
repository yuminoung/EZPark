var express = require('express')
var router = express.Router()

var controller = require('../controller/controller.js')

router.get('/', controller.index)

//show all available street parking in melbourne CBD
router.get('/parkings', controller.findAllParkings)

//get one parking location by id
router.get('/parking/:id', controller.findOneParking)

module.exports = router