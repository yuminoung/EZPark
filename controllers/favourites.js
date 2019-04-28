// Favourite Controller
// const mongoose = require('mongoose')
// const Search = mongoose.model('Favourites')



//send users' favourites
var index = function (req, res) {
    res.redirect('../favourites.html')
}

// //save favourites to mongodb
// var addLike = function (req, res) {
//     var addLike = new addLike({
//         addLike: req.body.addLike
//     })
//     addLike.save(function (err) {
//         if (err) {
//             res.send('error')
//         } else {
//             res.redirect('/favourites/' + req.body.addLike)
//         }
//     })
// }

module.exports.index = index;
// module.exports.addLike = addLike;


