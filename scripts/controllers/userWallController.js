'use strict';

socialNetwork.controller('UserWallController',
    function UserWallController($scope, authentication, $location, $routeParams, usersData, profileData, notify) {

        if (!authentication.isLogged()) {
            $location.path('/welcome');
            return;
        }

        $scope.isMe = $routeParams.username === authentication.getUserName() ? true : false;

        $scope.friendUserName = $routeParams.username;
        $scope.friend = true;

        usersData.getUserFullData($routeParams.username)
            .then(
            function successHandler(data) {
                $scope.user = data;
                $scope.friend = data.isFriend;

                usersData.getFriendWallByPages($routeParams.username, "")
                    .then(
                    function successHandler(data) {
                        $scope.posts = data;
                        if (data.length == 0) {
                            $scope.isNewsFeedEmpty = true;
                        } else {
                            $scope.isNewsFeedEmpty = false;
                        }
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
                    $scope.user.hasPendingRequest = true;

                    notify.info("Invitation sent.")
                },
                function errorHandler(error) {
                    console.log(error);
                }
            );
        };

        $scope.$on('addedPost', function(event, data) {
            $scope.posts.push(data);
        });

        $scope.$on('deletePost', function(event, data) {
            var index = $scope.posts.indexOf(data);

            if (index > -1) {
                $scope.posts.splice(index, 1);
            }
        });
    });