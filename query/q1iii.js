
db.ratings.aggregate([
    {
        $group: {
            _id: "$rating", // Group by the field rsting
            count: {$sum: 1} // Get the count for each group
        }   
    },
    {$sort: {"_id": -1}},
    {
        $project: {
        		_id: 0,
                count: 1,
                "rating": "$_id"
        }
    }
]);