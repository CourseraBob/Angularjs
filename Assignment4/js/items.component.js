(function() {
'use strict';
    
angular.module('MenuApp')
.component('items',{
    templateUrl: 'templates/items.template.html',
    controller: ItemComponentController,
    bindings: {}
});
    
ItemComponentController.$inject=[];
function ItemComponentController() {
    
}
})();