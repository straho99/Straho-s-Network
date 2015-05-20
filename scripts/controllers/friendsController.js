socialNetwork.controller('FriendsController',
    function FriendsController($scope, authentication, profileData) {
        $scope.name = authentication.getName();

        profileData.getOwnFriends()
            .then(
            function successHandler(data) {
                $scope.friends = data;
                $scope.friendsCount = data.length;
            },
            function errorHandler(error) {
                console.log(error);
            }
        );

    });