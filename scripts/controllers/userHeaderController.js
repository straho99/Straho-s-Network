socialNetwork.controller('UserHeaderController',
    function UserHeaderController($scope, $location, authentication, notify) {
        $scope.username = authentication.getUserName();

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