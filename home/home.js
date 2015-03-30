'use strict';
 
angular.module('myApp.home', ['ngRoute', 'firebase'])
 
// Declared route 
.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/home', {
        templateUrl: 'home/home.html',
        controller: 'HomeCtrl'
    });
}])
 
// Home controller
.controller('HomeCtrl', ['$scope', '$firebaseAuth', function($scope, $firebaseAuth) {

	// New Auth logic
	var ref = new Firebase("https://angularfire-login.firebaseio.com"); 
	$scope.authObj = $firebaseAuth(ref);

	$scope.SignIn = function(event) {
    event.preventDefault();  // To prevent form refresh
    
    var username = $scope.user.email;
    var password = $scope.user.password;
    
    $scope.authObj.$authWithPassword({
    	email: username,
      password: password
    })
    .then(function(authData) {
      // Success callback
      console.log('Authentication successful as:', authData.uid);
    }, function(error) {
      // Failure callback
      console.log('Authentication failure:', error);
    });
	}
}]);

