
 module.exports = exports = function urlPlugin(schema, required) {

  required || (required = false)

  schema.add({
  	url: {
	    type: String,	    
	    trim: true,
      required : required,      
	    match: [/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/, 'Invalid url'],
      default:null
      }
  });

};