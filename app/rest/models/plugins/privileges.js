module.exports = exports = function privilegesPlugin(schema, options) {

  options || (options = {});

  schema.add({
  		privileges : {
  			 type : Object,
  			 required : true
  		}
  });

};