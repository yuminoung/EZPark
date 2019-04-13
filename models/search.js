//search schema

var mongoose = require('mongoose')

var searchSchema = mongoose.Schema(
    {
        search: String,
        created_at: { type: Date, default: Date.now }
    },
)

mongoose.model('Search', searchSchema)
