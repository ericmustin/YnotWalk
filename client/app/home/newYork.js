angular.module('ericMVP.newYork', [])

.controller('newYorkController', function ($scope, $location, DataNewYork) {
  console.log('newYorkController is working');

  $scope.postmateData;
  $scope.startAddress;
  
$scope.sheltersObj = DataNewYork.sheltersObj;

  $scope.sendFunction = function() {
    DataNewYork.postmatesController($scope.startAddress);
    // Data.postmates($scope.startAddress,$scope.sheltersObj[key].address).then(function(info) {
    // $scope.sheltersObj[key].details = JSON.parse(info.data.data);
    // $scope.sheltersObj[key].fee = $scope.sheltersObj[key].details.fee;
    // console.log($scope.sheltersObj[key]);
    // });
  // }
  };

  // $scope.sendFunction();

});