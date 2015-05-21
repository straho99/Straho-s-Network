socialNetwork.controller('UserHeaderController',
    function UserHeaderController($scope, $location, authentication, usersData, profileData, notify) {
        $scope.username = authentication.getUserName();
        $scope.areFriendRequestsVisible = false;

        usersData.getUserPreviewData($scope.username)
            .then(
            function successHandler(data) {
                $scope.name = data.name;

                if (data.profileImageData) {
                    $scope.profileImageData = data.profileImageData;
                } else {
                    document.getElementById('me-preview').src = "img/noavatar.jpg";
                }

                authentication.setName(data.name);
                authentication.setProfileImageData(data.profileImageData);
            },
            function errorHandler(error) {
                console.log(error);
            }
        );

        profileData.getFriendRequests()
            .then(
            function successHandler(data) {
                $scope.requests = data;
                $scope.requestsCount = data.length;
            },
            function errorHandler(error) {
                console.log(error);
            }
        );

        $scope.logout = function () {
            authentication.logout()
                .then(
                function successHandler(data) {
                    authentication.clearCredentials();
                    notify.info("Logout successful.");
                    $location.path('/');

                },
                function errorHandler(error) {
                    notify.error("Logout failed.");
                }
            );
        };

        $scope.showFriendRequests = function (event) {
            var leftPosition = event.screenX,
                topPosition = event.clientY + 10,
                container = document.getElementById('friendRequestsContainer');

            container.style.top = topPosition + 'px';
            container.style.left = leftPosition + 'px';

            $scope.areFriendRequestsVisible = true;
        };

        $scope.approveFriendRequest = function (request) {
            profileData.approveFriendRequest(request.id)
                .then(
                function successHandler(data) {
                    notify.info("Friend request accepted.");
                },
                function errorHandler(error) {
                    console.log(error);
                }
            );
        };

        $scope.rejectFriendRequest = function (request) {
            profileData.rejectFriendRequest(request.id)
                .then(
                function successHandler(data) {
                    notify.error("Friend request rejected.");
                },
                function errorHandler(error) {
                    console.log(error);
                }
            );
        };
    });