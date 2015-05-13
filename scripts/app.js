var socialNetwork = angular.module('socialNetwork', ['ngRoute']);

socialNetwork.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'partials/welcome.html',
                controller: 'WelcomeController'
            }).
            when('/news-feed/:userId', {
                templateUrl: 'partials/news-feed.html',
                controller: 'NewsFeedController'
            }).
            when('/friends/:userId', {
                templateUrl: 'partials/friends.html',
                controller: 'FriendsController'
            }).
            when('/friend/:userId', {
                templateUrl: 'partials/friend.html',
                controller: 'FriendController'
            }).
            when('/edit-profile/:userId', {
                templateUrl: 'partials/edit-profile.html',
                controller: 'EditProfileController'
            }).
            when('/change-password/:userId', {
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