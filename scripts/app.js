(function () {


	var app = angular.module('EdenApp', []);

	// app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	// 	var viewBase = '/templates/';

	// 	$routeProvider
	// 	.when('/', {redirectTo: '/home'})

	// 	.when('/home', {
	// 		controller : 'homeController',
	// 		templateUrl: viewBase + 'home.html',
	// 		controllerAs: 'vm',
	// 		title: 'Home'
	// 	})
	// 	.when('/1030', {
	// 		controller : 'homeController',
	// 		templateUrl: viewBase + '1030.html',
	// 		controllerAs: 'vm',
	// 		title: 'Café search'
	// 	})
	// 	.when('/motorSavings', {
	// 		controller : 'motorSavings',
	// 		templateUrl: viewBase + 'motorSavings.html',
	// 		controllerAs: 'vm',
	// 		title: 'Motor savings'
	// 	})
	// 	.when('/kendoPG', {
	// 		controller : 'kendoCtrl',
	// 		templateUrl: viewBase + 'kendoPG.html',
	// 		controllerAs: 'vm',
	// 		title: 'Kendo playground'
	// 	})
	// 	.otherwise({redirectTo: '/'});

	// 	$locationProvider.html5Mode(true);
	// }]);

 //    app.run(['$location', '$rootScope', function ($location, $rootScope) {
 //        $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {

 //            if (current.hasOwnProperty('$$route')) {

 //                $rootScope.title = current.$$route.title;
 //            }
 //        });
 //    }]);

})();