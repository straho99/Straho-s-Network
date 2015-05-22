socialNetwork.controller('FriendsController',
    function FriendsController($scope, $routeParams, authentication, profileData, usersData) {

        $scope.currentUser = authentication.getName();
        $scope.user = $routeParams['username'];

        if ($scope.currentUser === $scope.user) {

            $scope.name = $scope.currentUser;

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
        } else {

            usersData.getUserPreviewData($scope.user)
                .then(
                function successHandler(data) {
                    $scope.name = data.name;
                    usersData.getFriendsDetailedFriendsList($scope.user)
                        .then(
                        function successHandler(data) {
                            $scope.friends = data;
                            $scope.friendsCount = data.length;
                        },
                        function errorHandler(error) {
                            console.log(error);
                        }
                    );
                },
                function errorHandler(error) {
                    console.log(error);
                }
            );
        }
    });



