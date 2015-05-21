'use strict';

socialNetwork.directive('postToUser', function() {

    return {
        restrict: 'A',
        templateUrl: 'partials/directives/user-friends-sidebar.html',
        controller: 'UserFriendsController',
        replace: false,
        scope: {
            friendUserName: "@friendUserName"
        }
    }
});