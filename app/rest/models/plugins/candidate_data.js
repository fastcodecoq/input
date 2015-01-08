// candidate data plugin

module.exports = exports = function candidateDataPlugin(schema, options) {

  options || (options = {});

  schema.add({
  	  data : Object
  });

};