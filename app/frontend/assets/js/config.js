//config 

'use strict';

function config($stateProvider, $urlRouterProvider, $httpProvider, $location, $db){

	    $httpProvider.defaults.headers.common['X-Knack-Application-Id'] = window.$config[window.$config.env].apiKey;
        $httpProvider.defaults.headers.common['X-Knack-REST-API-Key'] = window.$config[window.$config.env].apiSecret;

			//do config


		    $httpProvider.interceptors.push(httpInterceptor);


           function isLoged(){

           	  if($db.credential.username && $db.credential.token)
           	  	    $location.path('/forms');
           	  else
           	  	  $location.path('/');
           	  

           }
			

			$stateProvider	
			.state('login', {
				  url : '/',
				  templateUrl : 'views/login.html',
				  controller : 'loginCtrl',
				  data : { PageTitle : 'Login'}
			})	
			.state('forms', {
				  url : '/forms',
				  templateUrl : 'views/forms.html',
				  controller : 'formsCtrl',
				  data : { PageTitle : 'Forms'}
			})	
			.state('records', {
				  url : '/records/:formkey',
				  templateUrl : 'views/records.html',
				  controller : 'formsCtrl',
				  data : { PageTitle : 'Records'}
			})	
			.state('form', {
				  url : '/form/:formkey',
				  templateUrl : 'views/form.html',
				  controller : 'formsCtrl',
				  data : { PageTitle : 'Forms'}
			})	
			.state('details', {
				  url : '/details/:formkey/:recordid',
				  templateUrl : 'views/details.html',
				  controller : 'formsCtrl',
				  data : { PageTitle : 'Details Forms'}
			})	
			.state('menu', {
				  url : '/menu',
				  templateUrl : 'views/menu.html',
				  controller : 'loginCtrl',
				  data : { PageTitle : 'Menu'}
			})	
			.state('balance', {
				  url : '/balance',
				  templateUrl : 'views/balance.html',
				  controller : 'mainCtrl',
				  data : { PageTitle : 'Balance'}
			})			
			.state('About', {
				  url : '/about',
				  templateUrl : 'views/about.html',
				  controller : 'mainCtrl',
				  data : { PageTitle : 'About'}
			})			
			.state('anState', {
				   url : '/anState',				
				   templateUrl : 'views/anView.html',
				   controller : 'anCtrl',
				   data : {pageTitle : 'anState'}
			})
			.state('parentState', {
				   url : '/parentState',				
				   templateUrl : 'views/anView.html',
				   controller : 'anCtrl',
				   data : {pageTitle : 'anStateParent'}				   
			 })
				.state('parentState.child', {
				   url : '/parentState/child',					
				   templateUrl : 'views/anView.html',
				   controller : 'anCtrl',
				   data : {pageTitle : 'anStateChild'}				   
			     })
			;

	    	$urlRouterProvider.otherwise("/");


}


angular.module('input')
       .config(['$stateProvider', '$urlRouterProvider', '$httpProvider',config])
       .run(function($rootScope,$state, $http){

       	  //do something when app is loaded

       	  $rootScope.title = $state.title;
       	  $rootScope.back = function(){
       	  	   window.history.back();
       	  }

       	  if(window.localStorage.user)
       	  $rootScope.user = JSON.parse(window.localStorage.user);

       	jQuery.fn.serializeObject = function()
					{
					    var o = {};
					    var a = this.serializeArray();
					    $.each(a, function() {
					        if (o[this.name] !== undefined) {
					            if (!o[this.name].push) {
					                o[this.name] = [o[this.name]];
					            }
					            o[this.name].push(this.value || '');
					        } else {
					            o[this.name] = this.value || '';
					        }
					    });
					    return o;
					};

       	
       	  $rootScope.lang = window.lang[window.localStorage.lang || 'en'];


			        FastClick.attach(document.body);
			         console.log('fastclick ready')


			         $rootScope.$on('$viewContentLoaded', function(event){
			         	   $rootScope.loading = false;
			          });

       	  
       });



