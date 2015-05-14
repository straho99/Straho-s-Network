socialNetwork.controller('ChangePasswordController',
    function ChangePasswordController($scope, $location) {
        $scope.changePassword = function changePassword(passwordData, changePasswordForm) {
            //TODO: add implementation
        }

        $scope.cancelSave = function () {
            $location.path('/');
        }
    });