//controllers

'use strict';

function anCtrl($scope, $do, $knack){
			
			$scope.anVar = 'hello';

			$scope.anFunc = function(anVar){

			   // do something

			   $scope.anVar = anVar;

			}


}






angular.module('input')
       .controller('anCtrl', anCtrl)
       ;