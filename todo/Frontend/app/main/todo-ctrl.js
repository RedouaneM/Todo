'use strict';
/**
* Created by Redouane on 21/11/2015.
*/
/*var app = angular.module('app',[]);*/
angular.module('app')
    .controller('todoctrl', function($scope, $log) {

    /**********************************************************/
    /***************Scope initialization *********************/
    /**********************************************************/
        $scope.liste=[];
        $scope.enregistrer=function(){
            $scope.liste.push($scope.tache);
            $scope.tache="";
        }
});