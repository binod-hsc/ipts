	angular.module('webIpts', [
		'ngRoute'
	])
	.config([
		'$routeProvider',
		function($routeProvider) {
			$routeProvider
				.when('/', {
					templateUrl: 'views/signin.html',
					controller: 'LoginController'
				})
				.when('/home', {
					templateUrl: 'views/home.html',
					controller: 'HomeController'
				})
		}
	]);