angular.module('ericMVP.home', [])

.controller('HomeController', function ($scope, $location, Data) {
  console.log('HomeController is working');

  $scope.postmateData;

  Data.postmates().then(function(info) {
    $scope.postmateData = JSON.parse(info.data.data);
    console.log('Home Controller data is: ', $scope.postmateData);
  });
  
});