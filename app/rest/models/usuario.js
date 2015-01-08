// Load required packages
var mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');
var location = require('./plugins/location');
var candidate_data = require('./plugins/candidate_data');
var email = require('./plugins/email');
var active = require('./plugins/active');
var fullname = require('./plugins/fullname');
var tel = require('./plugins/tel');
var avatar = require('./plugins/avatar');
var metadata = require('./plugins/metadata');
var Schema = mongoose.Schema;

// Define our Empresa schema
var UsuarioSchema = new mongoose.Schema({    
  terms : {type : Boolean, default: false}  
});

//add full name
UsuarioSchema.plugin(fullname);
//add location field
UsuarioSchema.plugin(location);
//add email
UsuarioSchema.plugin(email);
//add active
UsuarioSchema.plugin(active);
//add createdAt, updatedAt fields
UsuarioSchema.plugin(timestamps);
UsuarioSchema.plugin(metadata);
UsuarioSchema.plugin(tel);
UsuarioSchema.plugin(avatar);

// Export the Mongoose model
module.exports = mongoose.model('Usuario', UsuarioSchema);
