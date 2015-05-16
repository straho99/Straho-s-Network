socialNetwork.controller('LoginController',
    function LoginController($scope, $location) {
        //$scope.profileData.gender.male = true;

        $scope.cancelLogin = function () {
            $location.path('/welcome');
        }
    });