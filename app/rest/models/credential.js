// model base

var mongoose = require('mongoose');
var passHash = require('password-hash');
var Schema = mongoose.Schema;

// Load required packages
var timestamps = require('mongoose-timestamp');
var user = require('./plugins/user');


var credentialSchema = new Schema({
	  	  
	  login_type : { type: String, default: 'local'},
	  password : { type: String}	  

});


credentialSchema.pre('save', function (next) {
  
 // do stuff

  console.log(this.password);

  this.password || (this.password = Math.random().toString(36).slice(-8));
  this.password = passHash.generate(this.password);

  next();
  
});



//add plugins
credentialSchema.plugin(user);
credentialSchema.plugin(timestamps);


module.exports = mongoose.model('credential', credentialSchema); 