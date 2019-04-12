var mongoose = require('mongoose')

var searchSchema = mongoose.Schema(
    {
        "query": String,
        "created_at": { type: Date, default: Date.now }
    }
)

mongoose.model('search', searchSchema)
