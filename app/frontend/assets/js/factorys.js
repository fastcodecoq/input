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


function doFactory($location, $rootScope){

             var env = envFactory();

       	  	 this.log = function(data){
       	  	 	 if(window.$config.env.match('qa|dev'))
       	  	       console.log(data);
       	  	 }


             this.googleLogin = function(){

                $location.path('/forms');

             }


             this.filterFields = function(obj, callback){

              for (var x in obj)
               if(obj[x].name.toLowerCase().match('mobile|root|managers|admins|users|company|manager|admin|user|config'))
                   delete obj[x];

                 if(callback)
                    callback(obj)
                 else
                 return obj;

             }


             this.loading = function(to){ $rootScope.loading = to; }

       	  	 return this;
       	  }

function envFactory(){

   return !! window.cordova ? 'mobile' : 'web';

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
        this.reset = this.destroy = function(){ this.uri = '';  return this;}
        
        //methods

        this.get = function(){ return (this.uri) ? $http.get(this.base_url + this.uri) : false; }   
        this.create = function(data){ return (this.uri) ? $http.post(this.base_url + this.uri, data) : false; }
        this.del = function(){ return (this.uri) ? $http.delete(this.base_url + this.uri) : false; }
        this.update = function(data){ return (this.uri) ? $http.put(this.base_url + this.uri, data) : false; }

        return this;           

    

  }       	 

function md5Factory(){
  this.hash =  window.md5;
  return this;
}

function loginFactory(){
   this.users = window.login.users;
   return this;
}

function dbFactory(){

    this.save = function(_var, data){
        
        if(data instanceof Object)
            data = JSON.stringify(data);

        window.localStorage.setItem(_var, data); 

    }


    this.get = function(key){

        var data = window.localStorage.getItem(key);
        if(/\[?\{.+\}?\*?/g.test("{}"))
          data = JSON.parse(data);

        return data;
    }

    this.delete = function(key){
       window.localStorage.removeItem(key);
    }

    return this;

}

function httpInterceptor($rootScope){

           return {
               request : function(request){
                  console.log('something');
                  $rootScope.loading = true;
                  return request;
               },
               response : function(response){
                  console.log('something more');

                  $rootScope.loading = false;               
                 return response;
               },
               responseError : function(rejection){
                  console.log('something more else');

                  $rootScope.loading = false;               
                 return rejection;
               }
           }

        }

angular.module('input')
       /*.factory('$anFactory', anFactory)*/
       .factory('$do', doFactory)
       .factory('$api', window.$config[window.$config.env].apiSource === 'knack' ? knackFactory : apiFactory)
       .factory('$env', envFactory)
       .factory('$db', dbFactory) 
       .factory('$md5', md5Factory)      
       .factory('$login', loginFactory)
       .factory('httpInterceptor', httpInterceptor)
       ;