//controllers

'use strict';

function errCtrl(err){

				  $do.log(err);

}

function anCtrl($scope, $do, $api, $env){
			
			$scope.anVar = 'hello';


			$scope.anFunc = function(anVar){

			   // do something

			   $scope.anVar = anVar;

			}


}

function formsCtrl($scope, $api, $do, $stateParams, $rootScope, $location){


   $scope.load = function(){


			$api
			.forms()
			.get()
			.success(function(rs){
				  
				  $do.log(rs)
          $scope.forms = [];


          for(var x in rs.objects)
            if(!rs.objects[x].name.toLowerCase().match('mobile|root|managers|admins|users|company|employees|config'))
				     $scope.forms.push(rs.objects[x]);				  


			})
			.error(errCtrl)
			;

   }


   $scope.loadRecord = function(formkey ,recordid){



       $scope.form = {};

        $api
        .reset()
        .form(formkey  || $stateParams.formkey)
        .get()
        .success(function(rs){
          
           $do.log(rs);
           

           // load record

            $api
             .reset()
             .form(formkey  || $stateParams.formkey)
             .record(recordid || $stateParams.recordid)
             .get()
             .success(function(rss){

                  $do.log(rss);


                 $scope.form = rs.object;
                 $scope.form.records = rss;

              })
             .error(errCtrl);

        })
        .error(errCtrl);


   }


   $scope.loadFields = function(form){


          $api
           .form(form || $stateParams.formkey)
           .get()
           .success(function(rs){

              $do.log(rs);
               $scope.form = rs.object;
          $rootScope.loading = false;
           })
          .error(errCtrl)

   }


   $scope.loadOne = function(form){

   	 $api
   	 .form(form || $stateParams.formkey)
   	 .get()
   	 .success(function(rs){

   	 	$do.log(rs);
   	 	

   	 	$api
   	 	.reset()
   	    .form(form || $stateParams.formkey)   	 	
   	 	.records()
   	 	.get()
   	 	.success(function(rss){

   	 	
   	 		 $scope.form = {};

         $do.log(rs.object)

         rs.object.fields = $do.filterFields(rs.object.fields);

   	 		 $scope.form.format = rs.object;
         

   	 		 $scope.form.records = rss.records;

           $do.log($scope.form);
           $rootScope.loading = false;

   	   	})

   	 })
   	 .error(errCtrl)

   }

   $scope.add = function(){
   	    
         $do.log(this);
         var data = jQuery('form#data').serializeObject();

         $do.log(data);

         $api
         .reset()
         .form(this.form.key)
         .records()
         .create(data)
         .success(function(rs){
            $do.log(rs);
            alert('Registro Creado');
         });


   }


   $scope.Compare = function(){     

     $do.log(this); 
     $do.log($rootScope.filterEmail);   
 
      for(var x in this.record)
        if(this.record[x].match($rootScope.filterEmail))
            return true;

          return false;
  
   }

    $scope.loadRelationship = function(ob){

     $scope.relationship = [];
     $scope.map = [];
     var connections = $scope.form.connections.outbound;

      $api
      .reset()
      .form(ob)
      .records()
      .get()
      .success(function(rs){

                $scope.map[ob] = Object.keys(rs.records[0])[1];
                $scope.relationship[ob] = rs.records;            

      });
       

    }

   $scope.edit = function(){
            
          $location.path("/details/"+$scope.form.format.key+"/"+this.record.id);

   }


   $scope.mapFields = function(){

         $do.log($scope.form.format.fields);

         var vals = [];


         for(var x in $scope.form.format.fields)         
           {  

            var map = $scope.form.format.fields[x];

            
            var val = {};
            val.name = map.name;

            if(typeof val.value != 'object')
            val.value =  this.record[map.key].toString().replace(/(<([^>]+)>)/g,"");
            vals.push(val);
                          
            
            

          }

          $do.log(vals);
         return vals;
   }

   $scope.loadRecord();

}


function searchCtrl ($rootScope, $scope){
     
   			  $scope.list = $rootScope.list;
              $scope.searching = false;              



              $scope.toggle = function(){
                   $scope.searching = !$scope.searching;    
                    
                   if($scope.searching)           
                     $("#search").focus();

                   console.log($scope.searching);
              }
 }

function mainCtrl($scope, $rootScope, $location, $do, $api){

	$scope.menu = false;
	$scope.tempPath = undefined;

  $rootScope.login = window.localStorage.user ? false : true;

  if(($location.path() != '' || $location.path() != '/') && !window.localStorage.user)
      $location.path('/');




	$scope.toggleMenu = function(){


		 $scope.menu = !$scope.menu;

		 if($scope.menu)
		 {
		 	if(!$scope.tempPath)
		 	    $scope.tempPath = $location.path();

		  	 $location.path('/menu');

		 }
		 else
		 	{
		 		$location.path(window.history.back());
		 	}

	}

}


function loginCtrl($scope, $rootScope, $location, $login, $md5, $do, $db, $api){

 if(window.localStorage.user && $location.path() != '/menu')
    {
        $location.path('/forms');     
              return;  
    }
    


  $scope.doLogin = function(){
  
     $do.log($scope);

     $api
     .forms()
     .get()
     .success(function(rs){          
          var users = [];
          var obj = rs;
          for(var x = 0 ; x < obj.objects.length; x++)
            if(obj.objects[x].name.toLowerCase().match('users'))
                $api
                .form(obj.objects[x].key)
                .records()
                .get()
                .success(function(rs){      

                  $do.log(rs);              
                   
                    for(var x in rs.records)                                            
                          if(rs.records[x]['field_6_raw'].email === $scope.email)
                               {
                                  $do.log('loged');
                                  
                                  var $user = {};
                                  $user.email = rs.records[x]['field_6_raw'].email;
                                  $rootScope.filterEmail = rs.records[x]['field_6_raw'].email;
                                  $user.name = rs.records[x]['field_5_raw'].first +' '+rs.records[x]['field_5_raw'].last;
                                  $user.password = '*******';
                                  $db.save('user', $user);
                                  $rootScope.user = $db.get('user');
                                  $rootScope.login = false;
                                  $location.path('/forms');     
                                  return;   
                                }

                  alert('email/clave incorrectos.');

                });


     })
     .error(function(err){
          $do.log(err)
     });

    /*
      for (var i = 0; i < $login.users.length; i++){

         
         if( ($login.users[i].email === $scope.email)  &&  ($login.users[i].password === $scope.password) )
            {

              $do.log('loged');
            
              var $user = $login.users[i];
              $user.password = '*******';
              $db.save('user', $user);
              $rootScope.login = false;
              $location.path('/forms');     
              return;         
            
            }
           
        }


         alert('Correo o clave no validos');*/

  }

  $scope.doLogout = function(){

              $do.log('logout');
              $db.delete('user');
              window.location.reload();

  }

}


angular.module('input')
       .controller('anCtrl', anCtrl)
       .controller('mainCtrl', mainCtrl)
       .controller('formsCtrl', formsCtrl)
       .controller('searchCtrl', searchCtrl)
       .controller('loginCtrl', loginCtrl)
       ;
