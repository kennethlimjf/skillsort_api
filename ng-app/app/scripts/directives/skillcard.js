'use strict';

angular.module('skillsortApp.directives.skillcard', [])
  .directive('skillcard', function () {
    return {
      restrict: 'E',
      templateUrl: '/templates/skillcard.html',
      replace: true,
      link: function (scope, element, attrs) {
        element.css('z-index', scope.$parent.top_z_index);
        scope.$parent.top_z_index = scope.$parent.top_z_index - 1;
      }
    }
  });
