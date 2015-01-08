
 module.exports = exports = function avatarPlugin(schema, required) {

  required || (required = false)

  schema.add({
  	avatar: {
	    type: String,	    
	    trim: true,
        required : required,
	    match: [/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/, 'Invalid url']
      }
  });

};