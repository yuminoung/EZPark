var mongoose = require('mongoose');
var carparkSchema = mongoose.Schema(
    {
        "bay_id": Number,
        "status": String,
        "lat": String,
        "lon": String,
        "distance": Number
    }
);
mongoose.model('carpark', carparkSchema);
