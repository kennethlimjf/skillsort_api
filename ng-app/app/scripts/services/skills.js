'use strict'

angular.module('skillsortApp.services.skills', ['ngResource'])
  .factory('Skills', ['$resource', function($resource){
    return $resource('http://localhost:9000/api/skills');
  }]);