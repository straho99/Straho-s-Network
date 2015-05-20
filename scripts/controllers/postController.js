socialNetwork.controller('PostController',
    function PostController($scope, authentication, commentsData, notify) {
        $scope.showCommentForm = function () {
            $scope.commentFormVisible = true;
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
        }
    });