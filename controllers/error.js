//Error Controller


//send homepage file
var index = function (req, res) {
    res.redirect('../404.html')
}

module.exports.index = index