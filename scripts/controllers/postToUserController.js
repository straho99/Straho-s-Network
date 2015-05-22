socialNetwork.controller('PostToUserController',
    function PostToUserController($scope, postsData, profileData, notify) {

        $scope.addNewPost = function () {
            postsData.addPost($scope.postContent, $scope.test2)
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