// Search Controller
const mongoose = require('mongoose')
const Search = mongoose.model('Search')

//show 10 latest searches
var index = function (req, res) {
    Search.find().sort({ _id: -1 }).limit(10).exec(function (err, searches) {
        if (!err) {
            res.send(searches)
        } else {
            res.sendStatus(404)
        }
    })
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
            res.redirect('/search')
        }
    })
}

module.exports.store = store
module.exports.index = index
