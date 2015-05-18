socialNetwork.controller('UserHeaderController',
    function UserHeaderController($scope, authentication) {
        $scope.username = authentication.getUserName();
    });