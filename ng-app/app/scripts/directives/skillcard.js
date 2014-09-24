'use strict';

angular.module('skillsortApp.directives.skillcard', [])
  .directive('skillcard', function () {
    return {
      restrict: 'E',
      templateUrl: '/templates/skillcard.html',
      scope: {
        card: '='
      },
      replace: true,
      link: function (scope, element, attrs) {
        
        // Set z-index of skillcard
        element.css('z-index', scope.$parent.$parent.top_z_index);

        // Initial card laying out uses z-index 1-50 with 50 for the first card on top.
        // Z-index will reset to 51 once all cards are deployed.
        // Subsequent z-indexes will start from 51 and above.
        if(scope.$parent.$parent.top_z_index == 1){
          scope.$parent.$parent.top_z_index = 51;
        } else if (scope.$parent.$parent.top_z_index <= 50){
          scope.$parent.$parent.top_z_index--;
        } else {
          scope.$parent.$parent.top_z_index++;
        }
        
        // Set title after parsing angular expression
        attrs.$set('title', scope.card.Description);
        $(element).tooltip();

        // Behavior for click
        element.bind('click', function(){ 
          scope.$emit('returnCardEvent1', scope.card);
        });
      }
    }
  });
