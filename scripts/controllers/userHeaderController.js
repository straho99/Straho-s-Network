socialNetwork.controller('UserHeaderController',
    function UserHeaderController($scope, $location, authentication, usersData, notify) {
        $scope.username = authentication.getUserName();

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
        }
    });