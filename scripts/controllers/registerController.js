socialNetwork.controller('RegisterController',
    function RegisterController($scope, $location, authentication, notify) {
        $scope.register = function(registerData, registerForm) {
            if (registerForm.$valid) {
                authentication.register(registerData)
                    .then(
                    function successHandler(data) {
                        authentication.setCredentials(data);
                        notify.info("Registration successful.");
                        $location.path('/users/' + authentication.getUserName());
                    },
                    function errorHandler(error) {
                        console.log(error);
                        notify.error("Registration failed.");
                    }
                )
            }
        };

        $scope.cancelRegister = function () {
            $location.path('/welcome');
        }
    });