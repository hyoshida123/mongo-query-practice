// Task 1ii

db.movies_metadata.aggregate([
    // TODO: Write your query here
    {$match: {vote_count: { $gte:  50}}},
    {$match: {"genres": {$elemMatch: {name: "Comedy"}}}},
    // Sort in descending order of vote_average, break ties by descending order of vote_count, break ties further by movieId
    {$sort: {"vote_average": -1, "vote_count": -1, "movieId": 1}},
    {$limit: 50},
    {
        $project: {
                _id: 0, // explicitly project out this field
                "title": 1, 
    			"vote_average": 1, 
    			"vote_count": 1, 
    			"movieId": 1
        }
    }
]);