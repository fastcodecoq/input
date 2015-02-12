// model base

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Load required packages
var timestamps = require('mongoose-timestamp');
var location = require('./plugins/location');
var user = require('./plugins/user');



var sesionSchema = new Schema({
	    device : {type:String, required:true},
        so : {type:String, required:true}
        });


sesionSchema.pre('save', function (next) {
  
 // do stuff
  next();
  
});


//add plugins

sesionSchema.plugin(location);
sesionSchema.plugin(user);
sesionSchema.plugin(timestamps);


module.exports = mongoose.model('Sesion', sesionSchema); 