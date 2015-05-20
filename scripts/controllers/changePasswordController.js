socialNetwork.controller('ChangePasswordController',
    function ChangePasswordController($scope, $location, authentication, profileData, notify) {
        $scope.changePassword = function(passwordData, changePasswordForm) {
            if (changePasswordForm.$valid) {
                profileData.changePassword(passwordData)
                    .then(
                    function successHandler(data) {
                        notify.info("Password changed successfully.");
                        $location.path('/users/me');
                    },
                    function errorHandler(error) {
                        notify.error("Password change failed.");
                    }
                )
            }
        };

        $scope.cancelSave = function () {
            $location.path('/users/me');
        }
    });