var mongoose = require('mongoose')

var recentSearchSchema = mongoose.Schema(
    {

        id: String,
        query: String,
        created_at: { type: Date, default: Date.now }
    },
)

mongoose.model('RecentSearch', recentSearchSchema)
