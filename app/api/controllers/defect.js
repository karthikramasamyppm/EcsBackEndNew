const defectModel=require('../models/defect')	
module.exports = {

    create: function(req, res, next) {
		defectModel.create({ name: req.body.name,description:req.body.description }, function (err, result) {
				  if (err) 
				  	next(err);
				  else
				  	res.json({status: "success", message: "Description added successfully!!!", data: null});
				  
				});
		},
		getAll: function(req, res, next) {
			let defectList = [];

			defectModel.find({}, function(err, defect){
				if (err){
					next(err);
				} else{
					for (let defects of defect) {
						defectList.push({id: defects._id,name: defects.name,description:defects.description});
					}
					res.json({status:"success", message: "Defect List found!!!", data:{defects: defectList}});
								
				}

			});
		},

}

