var express = require('express')
var router = express.Router()

var home = require('../controllers/home.js')
var search = require('../controllers/search.js')
var carpark = require('../controllers/carpark.js')
var signup = require('../controllers/signup.js')
var login = require('../controllers/login.js')
var error = require('../controllers/error.js')
var favourites = require("../controllers/favourites.js")

//home
router.get('/', home.index);
router.get('/signup', signup.index);
router.get('/login', login.index);


//search
router.get('/search/:query/no_result', search.noresult)
router.get('/search/:query', search.show)
router.post('/search', search.store)

//carpark
router.get('/carpark', carpark.index)
router.get('/carpark/:id', carpark.show)

//handle 404 page not found
router.get('*', error.index);

//favourites
router.get('/favourites', favourites.index)

module.exports = router


