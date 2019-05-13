var mongoose = require('mongoose')
const bcrypt = require('bcrypt')
var userSchema = mongoose.Schema(
    {
        name: String,
        email: String,
        password: String,
        created_at: { type: Date, default: Date.now }
    }
)

var User = module.exports = mongoose.model('User', userSchema);


module.exports.getUserByEmail = function (email, callback) {
    var query = { email: email };
    User.findOne(query, callback);
}

module.exports.comparePassword = function (candidatePassword, hash, callback) {
    bcrypt.compare(candidatePassword, hash, function (err, isMatch) {
        if (err) throw err;
        callback(null, isMatch);
    });
}

mongoose.model('User', userSchema)
