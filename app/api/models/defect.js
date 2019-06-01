const mongoose = require('mongoose');

//Define a schema
const Schema = mongoose.Schema;

const defectSchema = new Schema({
    
    name: {
		type: String,
		trim: true,		
		required: true,
	},
	description: {
		type: String,
		trim: true,		
		required: true,
	},
	//stateid : { type: Schema.Types.ObjectId, ref: 'State' } 
            
}, {
    timestamps: true

});

module.exports = mongoose.model('defect', defectSchema)