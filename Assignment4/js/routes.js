(function() {
'use strict';
    
angular.module('MenuApp')
.config(RoutesConfig);
    
RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig( $stateProvider, $urlRouterProvider) {
    
    <!--  use the home page if no other URL matchess -->
    $urlRouterProvider.otherwise('/');
    
    $stateProvider
    .state('home', {
        url: '/',
        templateUrl: 'templates/home.template.html'
    })
    .state('categories', {
        url: '/categories',
        templateUrl: 'templates/categories.template.html',
        controller: 'CategoriesController as categoriesCtrl',
        resolve: {
            categoryList: ['MenuDataService', function(MenuDataService) {
                console.log('in resolve');
                return MenuDataService.getAllCategories();
            }]
        }
    })
    .state('items', {
        url: '/items',
        templateUrl: 'templates/items.template.html'
    });
    
    
}
    
})();