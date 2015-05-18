socialNetwork.controller('ChangePasswordController',
    function ChangePasswordController($scope, $location, authentication, notify) {
        $scope.changePassword = function(passwordData, changePasswordForm) {
            if (changePasswordForm.$valid) {
                authentication.changePassword(passwordData)
                    .then(
                    function successHandler(data) {
                        notify.info("Password changed successfully.");
                        $location.path('/users/' + authentication.getUserName());
                    },
                    function errorHandler(error) {
                        notify.error("Password change failed.");
                    }
                )
            }
        };

        $scope.cancelSave = function () {
            $location.path('/users/' + authentication.getUserName());
        }
    });