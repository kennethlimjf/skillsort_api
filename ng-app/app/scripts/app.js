'use strict';

/**
 * @ngdoc overview
 * @name skillsortAppApp
 * @description
 * # skillsortAppApp
 *
 * Main module of the application.
 */
angular
  .module('skillsortApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngTouch',
    'skillsortApp.controllers.main',
    'skillsortApp.directives.skillcard'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
