
  module.exports = exports = function userPlugin(schema, options) {

  ObjectId = require('mongoose').Schema.Types.ObjectId;

  options || (options = {});

  schema.add({
  	_usuario: {
    
    type: ObjectId,
    required: true,
    ref: 'Usuario'
       }
  });

};