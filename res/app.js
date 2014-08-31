var app = angular.module("BoardGame",[
	'ngRoute',
	'ngAnimate',
	'BoardGame.filters',
	'BoardGame.services',
	'BoardGame.controllers',
	'BoardGame.directives',
	]);


app.config(function ($routeProvider, $locationProvider) {
	$routeProvider.when("/setup", {
		templateUrl: 'template/setup.php',
		controller: 'SetupController'
	}).when("/gems", {
		templateUrl: 'template/gems.php',
		controller: 'GemsController'
	}).when("/results", {
		templateUrl: 'template/results.php',
		controller: 'ResultsController'
	}).otherwise({
		redirectTo: "/setup"
	});
});
app.run(function ($rootScope, $location) {
	$rootScope.mobs = {};
	$rootScope.mobs.mobs=[];
	$rootScope.mobs.count = 0;
	$rootScope.combatDone = false;
	$rootScope.$on('$locationChangeStart', function (event, newUrl, oldUrl) {
		var nu = newUrl.substr(newUrl.indexOf('#'));
		var ou = oldUrl.substr(oldUrl.indexOf('#'));
		if ($rootScope.mobs.count == 0 && nu == "#/gems") {
			$location.path("/setup");
			return;
		}
	});
});
