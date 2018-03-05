(function() {
'use strict'

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController )
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService );

ToBuyController.inject = ['$scope', 'ShoppingListCheckOffService'];
function ToBuyController ($scope, ShoppingListCheckOffService) {
	$scope.toBuyList = ShoppingListCheckOffService.getToBuyList();
	
	$scope.boughtItem = function( idx ) {
		ShoppingListCheckOffService.boughtItem( idx );
	}
}

AlreadyBoughtController.inject = ['$scope', 'ShoppingListCheckOffService'];
function AlreadyBoughtController ($scope, ShoppingListCheckOffService) {
	$scope.boughtList = ShoppingListCheckOffService.getBoughtList();
}

function ShoppingListCheckOffService () {
	var toBuy = ['1 Litre Milk', '1 Loaf of Bread', 
					'2 Dozen Eggs', '1 Box Icecream Bars',
					'1 Block Cheese(any type)', '2 Frozen Pizzas' ];
	var bought = [];

	this.boughtItem = function ( idx ) {
		console.log( 'Bought item', idx );
		var item = toBuy[idx];
		toBuy.splice( idx, 1 );
		bought.push( item );
 	}

	this.getToBuyList = function () {
		return ( toBuy );
	}

	this.getBoughtList = function () {
		return ( bought );
	}
}

})();