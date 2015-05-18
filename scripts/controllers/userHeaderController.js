socialNetwork.controller('UserHeaderController',
    function UserHeaderController($scope, $location, authentication, notify) {
        $scope.username = authentication.getUserName();

        authentication.getUserPreviewData($scope.username)
            .then(
            function successHandler(data) {
                $scope.name = data.name;
                $scope.profileImageData = data.profileImageData;
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