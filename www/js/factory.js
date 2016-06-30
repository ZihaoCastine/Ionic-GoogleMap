angular.module('app.factory', [])

.factory('eventsFactory', function($q, $timeout, $http) {
  return {
    getEvents: function() {
      // return the same promise that $http.get returns
      return $http.get('http://localhost:8080/events');
    }
  };
})
