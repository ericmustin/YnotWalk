angular.module('ericMVP.home', [])

.controller('HomeController', function ($scope, $location, Data) {
  console.log('HomeController is working');

  $scope.postmateData;
  $scope.startAddress;
  $scope.confirmation = 'Click Me to Schedule Your Delivery!'
  
$scope.sheltersObj = Data.sheltersObj;

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
  //   Data.delivery(obj);
  //   $scope.confirmation = Data.response;
  // };

  $scope.sendFunction = function() {
    Data.postmatesController($scope.startAddress);
    // Data.postmates($scope.startAddress,$scope.sheltersObj[key].address).then(function(info) {
    // $scope.sheltersObj[key].details = JSON.parse(info.data.data);
    // $scope.sheltersObj[key].fee = $scope.sheltersObj[key].details.fee;
    // console.log($scope.sheltersObj[key]);
    // });
  // }
  };

  // $scope.sendFunction();

});