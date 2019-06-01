const mongoose = require('mongoose');

//Define a schema
const Schema = mongoose.Schema;

const defectgroupSchema = new Schema({
    
    name: {
		type: String,
		trim: true,		
		required: true,
	},
	
	defectid : { type: Schema.Types.ObjectId, ref: 'defect' } 
            
}, {
    timestamps: true

});

module.exports = mongoose.model('defectgroup', defectgroupSchema)