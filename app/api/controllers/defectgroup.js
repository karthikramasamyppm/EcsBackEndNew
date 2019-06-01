const defectgroupModel=require('../models/defectgroup')	
module.exports = {

    create: function(req, res, next) {
		defectgroupModel.create({ name: req.body.name,defectid:req.body.defectid }, function (err, result) {
				  if (err) 
				  	next(err);
				  else
				  	res.json({status: "success", message: "Defect added successfully!!!", data: null});
				  
				});
		},
		getAll: function(req, res, next) {
			let defectgroupList = [];

			defectgroupModel.find({}, function(err, defectgroup){
				if (err){
					next(err);
				} else{
					for (let defectgroups of defectgroup) {
						defectgroupList.push({id: defectgroups._id,name: defectgroups.name,defectid:defectgroups.defectid});
					}
					res.json({status:"success", message: "Defect list found!!!", data:{defectgroups: defectgroupList}});
								
				}

			});
		},
		getdefectsgroup: function(req, res, next) {

			defectgroupModel.find().populate('defectid')
			.exec(function(err, c) {
				if (err) { 
					return console.log(err);
				}
				//console.log(c);
				res.json(c);
			});			
		},

}

