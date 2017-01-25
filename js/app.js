angular.module('app', ['ngRoute', 'controller'])

.config(function($routeProvider) {
	$routeProvider
	.when('/archive', {
		templateUrl: 'templates/archive.html',
		controller:'archiveCtrl'
	})
	.when('/', {
		templateUrl: 'templates/home.html',
		controller: 'BlogCtrl'
	})
	.otherwise({
		templateUrl: 'templates/404.html'
	})
})