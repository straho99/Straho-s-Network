socialNetwork.controller('RegisterController',
    function RegisterController($scope, $location) {
        //$scope.profileData.gender.male = true;

        $scope.cancelRegister = function () {
            $location.path('/welcome');
        }
    });