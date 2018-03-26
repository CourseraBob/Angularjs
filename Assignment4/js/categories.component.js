(function() {
'use strict';
    
angular.module('MenuApp')
.component('categories',{
    templateUrl: 'templates/categoriescomponent.template.html',
    bindings: {
        categoryList: '<'
    }
});
    
/*CategoriesComponentController.$inject = ['MenuDataService'];
function CategoriesComponentController(MenuDataService) {
    var categories = this;
    
    var promise = MenuDataService.getAllCategories();
    console.log('in categories component controller');
    promise.then( function(result) {
        console.log( 'got category list' );
        categories.categoryList = result;
    })
    .catch( function(error) {
        console.log(error);
    });
}*/
    
})();