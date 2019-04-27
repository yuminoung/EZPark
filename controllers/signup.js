//Home Controller

const path = require('path')
const public_path = path.join(__dirname, '../public/')

//send homepage file
var index = function (req, res) {
    res.sendFile(public_path + 'signup.html')
}

module.exports.index = index;