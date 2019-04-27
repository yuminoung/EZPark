var express = require('express')
var router = express.Router()

var home = require('../controllers/home.js')
var search = require('../controllers/search.js')
var carpark = require('../controllers/carpark.js')

//home
router.get('/', home.index)

//search
router.get('/search/:query', search.show)
router.post('/search', search.store)
router.get('/search/no_result', search)

//carpark
router.get('/carpark', carpark.index)
router.get('/carpark/:id', carpark.show)

module.exports = router


