//search schema

var mongoose = require('mongoose')

var searchSchema = mongoose.Schema(
    {
        place_name: String,
        query: String,
        search_count: Number,
        created_at: { type: Date, default: Date.now }
    },
)

mongoose.model('Search', searchSchema)
