socialNetwork.controller('HomeController',
    function HomeController($scope, authentication, postsData, notify) {
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
        }

    });