//Error Controller


//send 404 page not found file
var index = function (req, res) {
    res.redirect('../404.html')
}

module.exports.index = index