'use strict';

socialNetwork.controller('LogoutController',
    function LogoutController($scope, $location) {
        //TODO: add logout logic here

        $location.path('/welcome');
    });