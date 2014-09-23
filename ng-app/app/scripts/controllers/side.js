'use strict';

angular.module('skillsortApp.controllers.side', ['skillsortApp.services.skills'])
  .controller('SideCtrl', function ($scope, Skills) {
    
    $scope.skillcards = Skills.query(function(){
      $scope.description = $scope.skillcards[0]["Description"];
      $scope.top_z_index = $scope.skillcards.length;
    });

    $scope.press = function(button_number) {
      if ($scope.skillcards.length != 0) {
        var card = $scope.skillcards.shift();
        $scope.description = $scope.skillcards[0]["Description"];
        $scope.$emit('moveCardEvent', [button_number, card]);
      } else {
        $scope.description = "";
      }
    }
  });
