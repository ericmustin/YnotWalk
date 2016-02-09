angular.module('ericMVP.home', [])

.controller('HomeController', function ($scope, $location, Data) {
  console.log('HomeController is working');

  $scope.postmateData;
  $scope.startAddress;
  
$scope.sheltersObj = Data.sheltersObj;

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