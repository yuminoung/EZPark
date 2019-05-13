var express = require('express')
var router = express.Router()

var home = require('../controllers/home.js')
var search = require('../controllers/search.js')
var carpark = require('../controllers/carpark.js')
var error = require('../controllers/error.js')
var favourites = require("../controllers/favourites.js")
const user = require('../controllers/user')
const passport = require('passport')
//home
router.get('/', home.index);


//user
router.get('/signup', user.signup_index)
router.get('/signin', user.signin_index)

router.post('/signin',
    passport.authenticate('local', {
        failureFlash: true,
        failureRedirect: '/signin'
    }),
    user.signin)
router.get('/flash_error', user.flash_error)


router.post('/signup', user.signup)
router.get('/user', user.index)
router.get('/api/user', user.api_user)
router.get('/logout', user.logout)
//search
router.get('/search/:query/no_result', search.noresult)
router.get('/search/:query', search.show)
router.post('/search', search.store)
router.get('/api/popular_searches', search.popular_searches)
//carpark
router.get('/carpark', carpark.index)
router.get('/carpark/:id', carpark.show)

router.get('/favourites', favourites.index)

//handle 404 page not found
router.get('*', error.index);

module.exports = router


