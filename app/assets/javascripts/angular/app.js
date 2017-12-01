var sephora = angular.module('sephora',['rails', 'ngSanitize', 'mgcrea.ngStrap','datatables']);

sephora.config(["railsSerializerProvider", function(railsSerializerProvider) {
    railsSerializerProvider.underscore(angular.identity).camelize(angular.identity);
}]);