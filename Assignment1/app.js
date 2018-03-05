(function() {
'use strict'

// Declare the Angular module
// and the LunchCheck controller
angular.module('LunchCheck', [] )
.controller('LunchCheckController', LunchCheckController );

// Dependancy Injection
LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
	// setup the default values
	$scope.listOfDishes = "";
	$scope.message = "";
	$scope.messageStyle = "";

	// define the function that will check the
	// number of lunch items
	$scope.checkTooMuch = function() {
		$scope.messageStyle = {color: 'green', border: '2px solid green'};

		// Check for an empty field first
		// if the field is empty prompt the user to enter some information
		if ( $scope.listOfDishes.length == 0 ) {
			$scope.message = "Please enter data first.";
			$scope.messageStyle = {color: 'red', border: '2px solid Red'};
			return;
		}

		// Split the number of dishes into an array so they can be counted
		// and checked for zero length
		var dishes = $scope.listOfDishes.split(",");
		var numberOfDishes = dishes.length;

		// scan the list looking for any empty strings
		// where the user has entered a,,b
		for ( var d in dishes ) {
			if ( dishes[d].length == 0 ) {
				numberOfDishes--;
			}
		}

		// determine if the number of items is OK or not.
		if ( numberOfDishes < 4 ) {
			$scope.message = "Enjoy!";
		}
		else {
			$scope.message = "Too Much!";
		}
	}
}
})();