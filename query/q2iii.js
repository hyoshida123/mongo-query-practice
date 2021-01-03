// Task 2iii

db.movies_metadata.aggregate([
    // TODO: Write your query here
    {
        $project: {
                _id: 0, // explicitly project out this field
                "budget": 
                	{
                 		$cond: { if: { $and: [{ $ne: ["$budget", false]}, { $ne: ["$budget", null]}, { $ne: ["$budget", ""]}]}, then: "$budget", else: "unknown" }
               		}
        }
    },
    {
        $project: {
                _id: 0, // explicitly project out this field
                "budget": 
                	{
                 		$cond: { if: { $ne: ["$budget", undefined]}, then: "$budget", else: "unknown" }
               		}
        }
    },
    {
        $project: {
                _id: 0, // explicitly project out this field
                "budget": 
                	{
                 		$cond: { if: {$and: [{$ne: [{ $isNumber: "$budget" }, true]}, {$ne: ["$budget", "unknown"]}]}, then: {$round: [{$toInt: {$trim: { input: "$budget", chars: " USD$" }}}, -7]}, else: "$budget" }
               		}
        }
    },
    {
        $project: {
                _id: 0, // explicitly project out this field
                "budget": 
                	{
                 		$cond: { if: { $isNumber: "$budget" }, then: {$round: ["$budget", -7]}, else: "$budget" }
               		}
        }
    },
    {
    	$group: {
       		_id: "$budget",
       		count: {$sum: 1}
    	}
    },
    {
        $project: {
        		_id: 0,
                "budget": "$_id",
                "count": 1
        }
    },
    {$sort: {"budget": 1}}
]);