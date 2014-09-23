'use strict';

angular.module('skillsortApp.controllers.main', ['skillsortApp.controllers.side', 'skillsortApp.controllers.columns'])
  .controller('MainCtrl', function ($scope) {
    $scope.$on('moveCardEvent', function(event, src){
      $scope.$broadcast('insertCardEvent', src);
    });
  });
