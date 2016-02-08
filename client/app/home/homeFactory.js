angular.module('ericMVP.homeFactory', [])

.factory('Data', function ($http) {
  var data = {};
  data.postmates = function() {
    return $http({
      method: 'GET',
      url: '/postmates'
    });
  };

  return data;


})