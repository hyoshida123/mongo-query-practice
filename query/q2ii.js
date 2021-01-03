// Task 2ii

db.movies_metadata.aggregate([
    // TODO: Write your query here
    {
        $project: {
                _id: 0, // explicitly project out this field
                "words": {$split: ["$tagline", " "]}
        }
    },
    {$unwind: "$words"},
    {
        $project: {
                _id: 0, // explicitly project out this field
                "word": {$trim: { input: "$words", chars: ",.!?" }}
        }
    },
    {
        $project: {
                _id: 0, // explicitly project out this field
                "word": {$toLower: "$word"},
                length: {$strLenCP: "$word"}
        }
    },
    {$match: {length: { $gt:  3}}},
    {
    	$group: {
       		_id: "$word",
       		count: {$sum: 1},
    	}
    },
    {$sort: {"count": -1}},
    {
        $project: {
                _id: 1, 
                count: 1
        }
    },
    {$limit: 20}
]);