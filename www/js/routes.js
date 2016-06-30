angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

  .state('googleMap', {
      url: '/googleMap',
      templateUrl: 'templates/googleMap.html',
      controller: 'MapController'
    })

    .state('login', {
        url: '/login',
        templateUrl: 'templates/login.html',
        controller: 'loginController'
      })

    .state('heatMap', {
        url: '/heatMap',
        templateUrl: 'templates/heatMap.html',
        controller: 'heatMapController'
      })

    $urlRouterProvider.otherwise('/login')


});
