angular.module('ericMVP', [
  'ericMVP.home',
  'ericMVP.homeFactory',
  'ngOrderObjectBy',
  'ng-fx',
  'ngAnimate',
  'ui.router'])

.config(function ( $httpProvider, $stateProvider, $urlRouterProvider) {
  console.log('hey config');
  // $urlRouterProvider.otherwise('/home');

  $stateProvider
    .state('home', {
      templateUrl: 'app/home/home.html',
      url: '/home',
      controller: 'HomeController'
    })

})



.run(function ($rootScope, $location) {

  $rootScope.$on('$routeChangeStart', function (evt,next,current) {
    $loation.path('/');
    console.log(evt);
    console.log(next);
    console.log(current);
  });
});