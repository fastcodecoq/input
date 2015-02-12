'use strict';

angular.module('input')
.directive('title', ['$rootScope', '$timeout',
  function($rootScope, $timeout) {
    return {
      link: function() {

        var listener = function(event, toState) {

          $timeout(function() {
            $rootScope.title = (toState.data && toState.data.pageTitle) 
            ? toState.data.pageTitle 
            : 'Home';
          });
        };

        $rootScope.$on('$stateChangeSuccess', listener);
      }
    };
  }
])
.directive('ngGoogleLogin', function(){


  function Ctrl($env, $do, $scope, $rootScope){

       $scope.do = $do;
     

  }


  function Link(scope, element, attrs){
    //do something linking
  }

   return {
       restrict : 'A',
       scope : 
       {
         ngModel : '=',
         ngKey : '@',
         ngSecret : '@'
       },
       templateUrl : 'views/google.login.button.html',
       controller : Ctrl, 
       link : Link
   }

})
.directive('ngSearchBox', function(){


  function Ctrl($env, $do, $scope, $rootScope){

       $scope.do = $do;
       $scope.lang = $rootScope.lang; 


       $scope.update = function(){

            $rootScope.searcher = $scope.searcher;
       }
     

  }


  function Link(scope, element, attrs){
    //do something linking
  }

   return {
       restrict : 'A',
       scope : 
       {
         ngModel : '=',
         ngKey : '@',
         ngSecret : '@'
       },
       templateUrl : 'views/search.html',
       controller : Ctrl, 
       link : Link
   }

})
;