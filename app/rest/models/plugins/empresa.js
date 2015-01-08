
  module.exports = exports = function empresaPlugin(schema, options) {

  ObjectId = require('mongoose').Schema.Types.ObjectId;

  options || (options = {});

  schema.add({
  	_empresa: {
    
    type: ObjectId,
    required: true,
    ref: 'Empresa'
       
       }

   });

};