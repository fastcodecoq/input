
  module.exports = exports = function emailPlugin(schema, required) {

  required || (required = true)

  schema.add({
  	email: {
	    type: String,
	    required: required,
	    trim: true,
      index: { unique: true },
	    match: [/^\w+([\.\-]?\w+)*@\w+([\.\-]?\w+)*(\.\w{2,3})+$/, 'Invalid email']
      }
  });

};