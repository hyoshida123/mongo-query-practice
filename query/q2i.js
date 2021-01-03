// Task 2i

db.movies_metadata.aggregate([
    // TODO: Write your query here
    {
        "$addFields": {
            //_id: "$movieId", // Group by the field movieId
            score: {$round: [{$add: [{$multiply: [{$divide: ["$vote_count", {$add: ["$vote_count", 1838]}]}, "$vote_average"]}, {$multiply: [{$divide: [1838, {$add: ["$vote_count", 1838]}]}, 7]}]}, 2]}
        }   
    },
    {
        $project: {
                _id: 0, // explicitly project out this field
                "title": 1, 
    			"vote_count": 1, 
    			"score": 1
        }
    },
    {$sort: {"score": -1, "vote_count": -1, "title": 1}},
    {$limit: 20}

]);