(function() {
'use strict';
    
angular.module('Data')
.service('MenuDataService', MenuDataService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

MenuDataService.$inject = ['$http','ApiBasePath'];
function MenuDataService($http,ApiBasePath) {
    var ctrl = this;
    
    ctrl.getAllCategories = function() {
        return $http ({
			method: "GET",
			url: ( ApiBasePath+'/categories.json')
		})
		.then(function(response) {
            console.log( 'then in service');
            console.log( response.data );
            return( response.data );
        })
        .catch(function(errorResponse) {
			console.log(errorResponse);
		});
    }
    
    ctrl.getItemsForCategory  = function(categoryShortName) {
        return $http ({
			method: "GET",
			url: "https://davids-restaurant.herokuapp.com/menu_items.json?category=, "
		})
		.then(function(response) {
            return( response.data );
        })
        .catch(function(errorResponse) {
			console.log(errorResponse);
		});
    }
}
})();