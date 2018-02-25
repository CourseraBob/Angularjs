(function() {
'use strict'

angular.module('myFirstApp', [])
.controller('MyFirstController', function($scope){
	$scope.name = "Bob";
	$scope.userid = "MYUSERID";
	$scope.sayHello = function () {
		return "Hello Coursera";
	}
});

})();