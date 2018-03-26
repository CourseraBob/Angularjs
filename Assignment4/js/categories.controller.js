(function() {
'use strict';
    
angular.module('MenuApp')
.controller('CategoriesController', CategoriesController);
    
CategoriesController.$inject=['categoryList'];
function CategoriesController(categoryList) {
    /*var CategoriesCtrl = this;
    console.log( categoryList );
    CategoriesCtrl.categoryList = categoryList;*/
}
})();