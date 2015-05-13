var socialNetwork = angular.module('socialNetwork', ['ngRoute']);

socialNetwork.config(['$routeProvider',
    function($routeProvider) {

        //TODO: add checks if there is a logged user!

        $routeProvider.
            when('/', {
                templateUrl: 'partials/home.html',
                controller: 'HomeController'
            }).
            when('/users/:username/friends', {
                templateUrl: 'partials/friends.html',
                controller: 'FriendsController'
            }).
            when('/users/:username', {
                templateUrl: 'partials/user-wall.html',
                controller: 'UserWallController'
            }).
            when('/profile', {
                templateUrl: 'partials/edit-profile.html',
                controller: 'EditProfileController'
            }).
            when('/profile/password', {
                templateUrl: 'partials/change-password.html',
                controller: 'ChangePasswordController'
            }).
            when('/logout', {
                //TODO: add logout logic here
            }).
            otherwise({
                redirectTo: '/'
            });
    }]);