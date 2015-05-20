socialNetwork.controller('CommentController',
    function CommentController($scope, authentication, commentsData, notify) {
        $scope.showReplyForm = function () {
            $scope.replyFormVisible = !$scope.replyFormVisible;
        };

        $scope.addComment = function () {
            commentsData.addCommentToPost($scope.post.id, $scope.replyContent)
                .then(
                function successHandler(data) {
                    notify.info("Commented successfully.");
                    $scope.commentContent = '';
                },
                function errorHandler(error) {
                    notify.error("Comment failed.");
                }
            );
            $scope.replyFormVisible = false;


        }
    });