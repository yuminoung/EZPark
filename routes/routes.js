var express = require('express')
var router = express.Router()

var carpark = require('../controllers/carpark.js')



router.get('/carpark', carpark.index)
router.get('/carpark/:id', carpark.show)



module.exports = router