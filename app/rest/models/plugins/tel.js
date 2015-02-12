module.exports = exports = function telPlugin(schema, options) {

  options || (options = {});

  schema.add({
       tel : {
       	 type: String,
       	 lowecase: true,
       	 match: [/\d/g, 'Invalid tel']
       	}
  });

};