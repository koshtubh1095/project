sephora.factory('Product', ["railsResourceFactory", "railsSerializer", function(railsResourceFactory, railsSerializer) {
  var products = railsResourceFactory({
    url: '/products',
    name: 'products',
  });
  return products;
}]);

sephora.factory('Search', ["railsResourceFactory","railsSerializer", function(railsResourceFactory,railsSerializer) {
  var search= railsResourceFactory({
    url: '/search',
    name: 'search',
  });
  return search
}]);