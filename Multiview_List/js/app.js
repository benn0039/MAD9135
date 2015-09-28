var myApp = angular.module('myApp', [
	'ngRoute',
	'listControllers'
]);

myApp.config(['$routeProvider', function ($routeProvider) {
	$routeProvider.
    when('/personal', {
		templateUrl: 'partials/personal.html',
		controller: 'PersonalController'
	}).
    when('/work', {
		templateUrl: 'partials/work.html'
		//controller: 'ToDoController'
	}).
    when('/school', {
		templateUrl: 'partials/school.html'
		//controller: 'ToDoController'
	}).
	otherwise({
		redirectTo: '/personal'
		});
}]);