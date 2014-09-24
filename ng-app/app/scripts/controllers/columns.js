'use strict';

angular.module('skillsortApp.controllers.columns', ['skillsortApp.services.axes'])
  .controller('ColumnsCtrl', function ($scope, Axes) {

    $scope.column_1 = [];
    $scope.column_2 = [];
    $scope.column_3 = [];
    $scope.column_4 = [];
    $scope.column_5 = [];
    $scope.columns = [$scope.column_1, $scope.column_2, $scope.column_3, $scope.column_4, $scope.column_5]

    $scope.axes = Axes.query();

    $scope.$on('insertCardEvent', function(event, src){
      var column_number = src[0];
      var card = src[1];

      if(column_number == 5 && $scope.column_5.length == 5){
        $scope.$emit('returnCardEvent2', card);
        return;
      }

      eval("$scope.column_" + column_number + ".push(card)");
    });

    $scope.$on('returnCardEvent1', function(event, src){
      $scope.columns.forEach(function(column){
        if(column.indexOf(src) != -1){
          column.splice(column.indexOf(src), 1);
          $scope.$apply(); 
        }
      });

      $scope.$emit('returnCardEvent2', src);
    });
  });
