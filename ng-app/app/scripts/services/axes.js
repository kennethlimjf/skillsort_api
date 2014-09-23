'use strict'

angular.module('skillsortApp.services.axes', ['ngResource'])
  .factory('Axes', ['$resource', function($resource){
    return $resource('http://localhost:9000/api/axes');
  }]);