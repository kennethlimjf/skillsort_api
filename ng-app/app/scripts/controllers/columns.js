'use strict';

angular.module('skillsortApp.controllers.columns', ['skillsortApp.services.axes'])
  .controller('ColumnsCtrl', function ($scope, Axes) {

    $scope.column_1 = [];
    $scope.column_2 = [];
    $scope.column_3 = [];
    $scope.column_4 = [];
    $scope.column_5 = [];

    $scope.axes = Axes.query();

    $scope.$on('insertCardEvent', function(event, src){
      var column_number = src[0];
      var card = src[1];
      eval("$scope.column_" + column_number + ".push(card)");
    });
  });
