var mongoose = require('mongoose');
var parkSchema = mongoose.Schema(
    {
        "bay_id": Number,
        "status": String,
        "lat": String,
        "lon": String,
        "distance": Number
    }
);
mongoose.model('park',parkSchema);
