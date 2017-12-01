sephora.controller("productsController", ["$scope", "$http","$window","Product","$document","$location", function($scope, $http,$window,Product,$document,$location){
  $scope.services=[{}];
  $scope.hotel_prices=[{}];
  $scope.addons=[{}];
  $scope.amenities1=[{}];
  $scope.amenities=[{}];
  $scope.suppliers=[];
  $scope.supplier_lists=[];
  $scope.selectedSupplier = '';
  $scope.addon_prices = [{}]
  $scope.summer_addons=[{}];
  $scope.summer_seasons=[{}];
  // $scope.supplier_detail.winter.length=0;
  $scope.winter_addons=[{}];
  $scope.searchArray = {"place": [],"preferred": [],"star_category": [],"by_name": [],"season_from": [],"season_to": [],"proximity": [],"style": [], "amenities": [], "categories": [], "addons": [], "breakfast_types": [], "service_types":[]}
  $scope.supplier_detail = [{}]
  $scope.breakfasts_attributes = [{}]
  // $scope.filter = $location.search()
  $scope.init = function(){
    if(typeof json != 'undefined'){
      angular.forEach(json, function (value,key){
        $scope[key] = value;
      });
      
    }
  }
    
  $scope.init();

 
  $scope.searchPlaces = function(searchText) {
      if(searchText.length > 2 && $scope.autoCompleteSearchText != searchText){
        return AutoComplete.query({ places: searchText }).then(function(data) {
          return data
        })
      }
    }

  $scope.searchCities = function(searchText) {
    if(searchText.length > 2 && $scope.autoCompleteSearchText != searchText){
      return AutoComplete.query({ city: searchText }).then(function(data) {
        return data
      })
    }
  }

  $scope.searchCountries = function(searchText) {
    if(searchText.length > 2 && $scope.autoCompleteSearchText != searchText){
      return AutoComplete.query({ country: searchText }).then(function(data) {
        return data
      })
    }
  }

  $scope.searchRegions = function(searchText) {
    if(searchText.length > 2 && $scope.autoCompleteSearchText != searchText){
      return AutoComplete.query({ region: searchText }).then(function(data) {
        return data
      })
    }
  }

  $scope.searchMasterChains = function(searchText) {
    if(searchText.length > 2 && $scope.autoCompleteSearchText != searchText){
      return AutoComplete.query({ master_chain: searchText }).then(function(data) {
        return data
      })
    }
  }

  $scope.searchChains = function(searchText) {
    if(searchText.length > 2 && $scope.autoCompleteSearchText != searchText){
      return AutoComplete.query({ chain: searchText }).then(function(data) {
        return data
      })
    }
  }

  $scope.attach_supplier = function(details) {
    if($scope.addons[0].name != undefined && $scope.addons[0].charge != undefined)
      details.addons = [{}]
    details.summer = [{}]
    details.winter = [{}]
    $scope.supplier_lists.push(details)
  }
  $scope.deleteHotel = function(id,index) {
    var target = $('#attach_modal').data("target");
    $(target).modal('show');
    temp = new Hotel()
    temp.id=$scope.hotels[index].id
    temp.delete().then(function(data){
      $scope.hotels.splice(index,1)
    })
  }
  

  

  
 

  

  





  




  

  

  $scope.search = function(category_name, subcategory_name) {
    if (category_name){

    $scope.category_name = category_name.split(',')
    }
    if(subcategory_name){
      
    $scope.subcategory_name = subcategory_name.split(',')
    }
    $window.location.href = "/search?result=product&category="+($scope.category_name || '')+"&subcategory="+($scope.subcategory_name || '')
  }

 
}])
