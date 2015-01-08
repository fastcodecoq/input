// controller base


var authCtrl = function (server){

        var Credential = require('../models/credential');
        var Token = require('../models/token');
        var Sesion = require('../models/sesion');
        var mongoose = require('mongoose');
    			
       function getToken(req, res, next){
       	// code
            var REQ = req.params;
      


   // Use the Empresa model to find all empresa
    Model.find(query, function (err, model) {
      if (err) {
        res.send(err);
        return;
      }
      res.json({data:model});      
    });

   }


   function login(){

   }

       function del(req, res, next){
       	// code
            var REQ = req.params;

       }

       function put(req, res, next){
       	// code
            var REQ = req.params;

       }

       function update(req, res, next){
       	// code
            var REQ = req.params;

       }


       server.post(global.apiBaseUri + 'api/login',login);
       server.get(global.apiBaseUri + 'api/getToken/:code',getToken);       
       server.post(global.apiBaseUri + 'api/ctrlName',put);
       server.put(global.apiBaseUri + 'api/ctrlName',put);
       server.del(global.apiBaseUri + 'api/ctrlName',del);

}


module.exports = authCtrl;