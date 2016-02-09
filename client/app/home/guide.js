angular.module('ericMVP.guide', [])

.controller('guideController', function ($scope, $location,$timeout) {
  console.log('guideController is working');
$scope.tips =['Food: Every shelter has their own rules, so call ahead, but generally shelters only take non-perishable food items with clear expiration dates.', 
    'Personal Care Items: Shelters can distribute personal care items to those living in the shelter.  These include toothbrushes, toothpaste, plastic bandages, floss, deoderant, hygeine products and even some otc medicines.',
    'Clothing and Linens: These can also be distributed among those living at the shelter.  Shirts, pants, jackets, sweaters, scarves, and gloves all are usually accepted, as is business clothing like a suit to be used for interviews.',
    'Toys and Games: Homeless children in shelters often have few personal possessions, including toys and board games. Some shelters that accept families take donated toys and games so the children have something to play with while they are staying in the shelter. An adult only shelter might accept donated board games, as adults play these games as well',
    'Time: If you want to do more, you can volunteer at the homeless shelter in your area. Positions vary by shelter, but your local shelter might need people to coordinate drives or help prepare meals and hand out items. If you have a skill, such as drawing, you can donate your time by providing free instruction or activities in your skilled area at the shelter.']

  $timeout(function() {

    var newTips = $scope.tips.map(function(tip) {
      console.log(tip);
      return tip+" ";
    });
    $scope.tips = newTips;

    }, 3000);


});