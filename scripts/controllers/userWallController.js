'use strict';

socialNetwork.controller('UserWallController',
    function UserWallController($scope, $location, $routeParams, usersData, profileData, notify) {

        $scope.friendUserName = $routeParams.username;
        $scope.uname = $routeParams.username;

        usersData.getUserFullData($routeParams.username)
            .then(
            function successHandler(data) {
                $scope.user = data;

                usersData.getFriendWallByPages($routeParams.username, "")
                    .then(
                    function successHandler(data) {
                        $scope.posts = data;
                    },
                    function errorHandler(error) {
                        console.log(error);
                    }
                );
            },
            function errorHandler(error) {
                notify.error("Loading user's wall failed.");
                $location.path("/users/me");
            }
        );

        $scope.inviteFriend = function () {
            profileData.sendFriendRequest($routeParams.username)
                .then(
                function successHandler(data) {
                    notify.info("Invitation sent.")
                    console.log(data);
                },
                function errorHandler(error) {
                    console.log(error);
                }
            );
        };
    });