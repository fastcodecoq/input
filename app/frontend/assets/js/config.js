//config 

'use strict';

function config($stateProvider, $urlRouterProvider, $httpProvider){

			//do config


		   /* $httpProvider.interceptors.push(function(){

		   	    //do some http request interception

		    });*/
			

			$stateProvider	
			.state('home', {
				  url : '/',
				  templateUrl : 'views/anView.html',
				  controller : 'anCtrl',
				  data : { PageTitle : 'home'}
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
       	  
       });