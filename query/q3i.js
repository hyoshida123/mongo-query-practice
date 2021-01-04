
db.credits.aggregate([
    { $unwind : "$cast" },
    {$match: {"cast.id": 7624}},
    {
         $lookup: {
             from: "movies_metadata", // Search inside movies_metadata
             localField: "movieId", // match our _id
             foreignField: "movieId", // with the "movieId" in movies_metadata
             as: "movies" // Put matching rows into the field "movies"
        }
	},
    {
        $project: {
                _id: 0, // explicitly project out this field
                "title": {$first: "$movies.title"}, // grab the title of first movie
                "release_date": {$first: "$movies.release_date"},
    			"character": "$cast.character"
        }
    },
    {$sort: {"release_date": -1}}
]);