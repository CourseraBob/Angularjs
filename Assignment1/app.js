(function() {
'use strict'

angular.module('LunchCheck', [] )
.controller('LunchCheckController', LunchCheckController );

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
	$scope.listOfDishes = "";
	$scope.message = "";
	$scope.messageStyle = "";
	$scope.checkTooMuch = function() {
		$scope.messageStyle = {color: 'green', border: '2px solid green'};
		if ( $scope.listOfDishes.length == 0 ) {
			$scope.message = "Please enter data first.";
			$scope.messageStyle = {color: 'red', border: '2px solid Red'};
			return;
		}
		var dishes = $scope.listOfDishes.split(",");
		var numberOfDishes = dishes.length;

		console.log( dishes, numberOfDishes );

		for ( var d in dishes ) {
			console.log( dishes[d], dishes[d].length );
			if ( dishes[d].length == 0 ) {
				numberOfDishes--;
			}
		}

		if ( numberOfDishes < 4 ) {
			$scope.message = "Enjoy!";
		}
		else {
			$scope.message = "Too Much!";
		}
	}
}
})();