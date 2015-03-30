'use strict'

angular.module('myApp', [
	'ngRoute',
	'myApp.home'
]).
config(['$routeProvider', function($routeProvider){
	// Routes
	$routeProvider.otherwise({
		redirectTo: '/home'
	});
}]);