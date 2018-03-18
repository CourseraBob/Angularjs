( function() {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItemsDirective)
.constant('davids', { url: 'https://davids-restaurant.herokuapp.com/'} );
 
// This is the found-items directive that is used to display
// the results of the menu lookup.
// It can only be used as an element and the HTML is stored in an external file.
function FoundItemsDirective() {
    var ddo = {
		restrict: 'E',
		templateUrl: 'foundItems.html',
		scope: {
			found: '<',
			onRemove: '&',
			empty: '<'
		}
	};
	return ddo;
}

// The NarrowItDownController controlls the functionality of
// our lookup menu
NarrowItDownController.$inject = ['$scope','MenuSearchService'];
function NarrowItDownController($scope, MenuSearchService) {
    var ctrl = this;

	ctrl.searchTerm = '';
	ctrl.empty = '';

	ctrl.searchItem = function () {

		if (ctrl.searchTerm !== '') {
			var promise = MenuSearchService.getMatchedMenuItems(ctrl.searchTerm);
			promise.then(function(result) {
				ctrl.found = result;
				//ctrl.empty = MenuSearchService.isEmpty();
			})
			.catch(function(error) {
			console.log(error);
			});
            ctrl.empty = '';
		} else {
            ctrl.found = [];
			ctrl.empty = 'Please enter a search term';
			console.log(ctrl.empty);
		};
	};


	ctrl.remove = function (itemIndex) {
		return MenuSearchService.removeItem(itemIndex);
	}
    
}

// The MenuSearchService that does the lookup of the menu items and the 
// narrowing down based on a search item.
MenuSearchService.$inject = ['$http','davids'];
function MenuSearchService($http, davids) {
    var service = this;
	var foundItems = [];
	//var emptyMessage = 'Nothing Found';

	service.getMatchedMenuItems = function (searchTerm) {
		
		searchTerm = searchTerm.trim().toLowerCase();
        console.log( searchTerm );

		return $http ({
			method: "GET",
			url: davids.url + "menu_items.json"
		})
		.then(function(response) {
			foundItems = [];
			for(var i=0; i<response.data.menu_items.length; i++) {
				
                if (searchTerm !== '' ) {
                    console.log("have search term");
                    if (response.data.menu_items[i].name.toLowerCase().indexOf(searchTerm) !== -1) {
                        foundItems.push(response.data.menu_items[i]);
                    }
                } else {
                    foundItems.push(response.data.menu_items[i]);
                }
				
			}
			return foundItems;

		}).catch(function(errorResponse) {
			console.log(errorResponse);
		});		
	};

	service.removeItem = function (itemIndex) {
		foundItems.splice(itemIndex, 1);
		return foundItems;
	};
    
    service.clearItems = function() {
        foundItems = [];
    }

}
    

})();