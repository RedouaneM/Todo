'use strict';

angular.module('app',
    ['ui.router',
      'ngResource',
      'ui.bootstrap'
    ]);

angular.module('app').config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('app', {
    url: '',
    templateUrl: 'main/todo.html',
    controller:'',
  });
});
