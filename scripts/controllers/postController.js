socialNetwork.controller('PostController',
    function PostController($scope, authentication, commentsData, notify) {

        commentsData.getPostComments($scope.post.id)
            .then(
            function successHandler(data) {
                $scope.post.comments = data;
            },
            function errorHandler(error) {
                console.log(error);
            }
        );

        $scope.isLiked = false; //TODO: get data from the server here!

        $scope.showCommentForm = function () {
            $scope.commentFormVisible = !$scope.commentFormVisible;
        };
        
        $scope.addComment = function () {
            commentsData.addCommentToPost($scope.post.id, $scope.commentContent)
                .then(
                function successHandler(data) {
                    notify.info("Commented successfully.");
                    $scope.commentContent = '';
                },
                function errorHandler(error) {
                    notify.error("Comment failed.");
                }
            );
            $scope.commentFormVisible = false;
        };
    });