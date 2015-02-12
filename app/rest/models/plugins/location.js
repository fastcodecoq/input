module.exports = exports = function locationPlugin(schema, options) {

  options || (options = {});

  schema.add({
    location: Object
  });

};