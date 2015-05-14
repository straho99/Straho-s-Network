socialNetwork.controller('EditProfileController',
    function EditProfileController($scope, $location) {
        //$scope.profileData.gender.male = true;

        $scope.cancelSave = function () {
            $location.path('/');
        }

    });