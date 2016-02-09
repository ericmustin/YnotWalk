angular.module('ericMVP.newYork', [])

.controller('newYorkController', function ($scope, $location, DataNewYork) {
  console.log('newYorkController is working');

  $scope.postmateData;
  $scope.startAddress;
  $scope.confirmation = 'Click Me to Schedule Your Delivery!'

  
  $scope.sheltersObj = DataNewYork.sheltersObj;

//This Send delivery function allows users to actually schedule a delivery
//disabled since this is using my API info
  // $scope.sendDelivery = function(dName,dAddress,dPhoneNumber){
  //   var obj = {};
  //   obj.dropoff_name = dName;
  //   obj.dropoff_address = dAddress;
  //   obj.dropoff_phone_number = dPhoneNumber;
  //   obj.pickup_phone_number = '123-456-7890';
  //   obj.pickup_name = 'home';
  //   obj.pickup_address = $scope.startAddress;
  //   obj.manifest = "A Test delivery for a charity app";
  //   DataNewYork.delivery(obj);
  //   $scope.confirmation = DataNewYork.response;
  // };

  $scope.sendFunction = function() {
    DataNewYork.postmatesController($scope.startAddress);
    $scope.sheltersObj = DataNewYork.sheltersObj;
  };

  // $scope.sendFunction();

});