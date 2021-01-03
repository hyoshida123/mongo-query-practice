// Task 3ii

db.credits.aggregate([
    // TODO: Write your query here
    { $unwind : "$cast" },
    { $match: {crew: { $elemMatch: { id: 5655, job: "Director" } } }},
    {
    	$group: {
       		_id: {id: "$cast.id", name: "$cast.name"},
       		count: {$sum: 1}
    	}
    },
    {
        $project: {
                _id: 0, // explicitly project out this field
                count: 1, // number of times collaborated
    			id: "$_id.id",
    			name: "$_id.name"
        }
    },
    {$sort: {"count": -1, "id": 1}},
    {$limit: 5}

]);