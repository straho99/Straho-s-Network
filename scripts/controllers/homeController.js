socialNetwork.controller('HomeController',
    function HomeController($scope, authentication, postsData, profileData, notify) {
        $scope.name = authentication.getName();
        $scope.username = authentication.getUserName();
        $scope.isUserPreviewVisible = false;

        profileData.getNewsFeedPages("")
            .then(
            function successHandler(data) {
                $scope.posts = data;
                if (data.length === 0) {
                    $scope.isNewsFeedEmpty = true;
                }
            },
            function errorHandler(error) {
                notify.error('Loading news feed failed.');
            }
        );

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

        $scope.addNewPost = function () {
            postsData.addPost($scope.postContent, authentication.getUserName())
                .then(
                function successHandler(data) {
                    notify.info("Post successful.");
                    $scope.postContent = '';
                    //TODO: refresh page.
                },
                function errorHandler(error) {
                    console.log(error);
                }
            );
        };
    });