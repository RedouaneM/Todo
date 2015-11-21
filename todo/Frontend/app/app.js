       'use strict';

       angular.module('app',
           ['ui.router',
               'ngResource',
               'ui.bootstrap'
           ])
           .config(function($stateProvider, $urlRouterProvider) {
               $stateProvider.state('app', {
                   url: '',
                   templateUrl: 'main/todo.html',
                   controller: 'todoctrl',
               });
           })

           .controller('todoctrl1', function($scope){
               $scope.liste = "";

           })



