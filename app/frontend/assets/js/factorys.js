//factorys

'use strict';

function anFactory($http){
	
	   this.anVar = 'something';

	   this.anFactFunc = function(anVar){

	      //do something

	      return anVar;

	   }

	   return this;

}


function doFactory(){
       	  	 this.log = function(data){
       	  	 	 if(window.$config.env.match('qa|dev'))
       	  	       console.log(data);
       	  	 }

       	  	 return this;
       	  }


function knackFactory($http){


        this.uri = undefined;
        this.obj_key = undefined;
        this.field_key = undefined;  
        this.base_url = 'https://api.knackhq.com';

        this.forms = function(){ this.uri = '/v1/objects/'; return this;}
        this.form = function(_obj_key){ console.log(_obj_key); this.obj_key = _obj_key; this.uri = '/v1/objects/'+this.obj_key+'/'; return this;}
        this.field = function(_field_key){ this.field_key = _field_key; this.uri = '/v1/objects/'+this.obj_key+'/fields/'; return this; }
        this.fields = function(){ this.uri = '/v1/objects/'+this.obj_key+'/'; return this;}        
        this.field = function(_field_key){ this.field_key = _field_key; this.uri = '/v1/objects/'+this.obj_key+'/fields/'; return this; }
        this.records = function(){  this.uri = '/v1/objects/'+this.obj_key+'/records/'; return this; }
        this.record = function(_record_key){ this.record_key = _record_key; this.uri = '/v1/objects/'+this.obj_key+'/records/' + this.record_key; return this; }
        this.reset = this.destroy = function(){ this.uri = '';  }
        
        //methods

        this.get = function(){ return (this.uri) ? $http.get(this.base_url + this.uri) : false; }   
        this.create = function(data){ return (this.uri) ? $http.post(this.base_url + this.uri, data) : false; }
        this.del = function(){ return (this.uri) ? $http.delete(this.base_url + this.uri) : false; }
        this.update = function(data){ return (this.uri) ? $http.put(this.base_url + this.uri, data) : false; }

        return this;           

    

  }       	 



angular.module('input')
       .factory('$anFactory', anFactory)
       .factory('$doFa', doFactory)
       .factory('$knack', knackFactory)
       ;