socialNetwork.controller('CommentController',
    function CommentController($scope, authentication, commentsData, usersData, profileData, notify) {

        $scope.isUserPreviewVisible = false;

        $scope.showReplyForm = function () {
            $scope.replyFormVisible = !$scope.replyFormVisible;
        };

        usersData.getUserPreviewData($scope.comment.author.username)
            .then(
            function successHandler(data) {
                $scope.commenterData = data;
            },
            function errorHandler(error) {
                console.log(error);
            }
        );

        $scope.addComment = function () {
            commentsData.addCommentToPost($scope.post.id, $scope.replyContent)
                .then(
                function successHandler(data) {
                    notify.info("Commented successfully.");
                    $scope.commentContent = '';
                    $scope.replyFormVisible = false;
                },
                function errorHandler(error) {
                    notify.error("Comment failed.");
                }
            );
        };

        $scope.likeComment = function (commentObject) {
            commentsData.likeComment($scope.post.id, commentObject.id)
                .then(
                function successHandler(data) {
                    notify.info('Comment liked.');
                    $scope.comment.liked = true;
                    commentsData.getCommentPreviewLikes($scope.post.id, commentObject.id)
                        .then(
                        function successHandler(likesData) {
                            $scope.comment.likesCount = likesData.totalLikeCount;
                        }
                    );
                },
                function errorHandler(error) {
                    console.log(error);
                }
            );
        };

        $scope.unlikeComment = function (commentObject) {
            commentsData.unlikeComment($scope.post.id, commentObject.id)
                .then(
                function successHandler(data) {
                    notify.info('Comment unliked');
                    $scope.comment.liked = false;
                    commentsData.getCommentPreviewLikes($scope.post.id, commentObject.id)
                        .then(
                        function successHandler(likesData) {
                            $scope.comment.likesCount = likesData.totalLikeCount;
                        }
                    );
                },
                function errorHandler(error) {
                    console.log(error);
                }
            );
        };

        $scope.previewUser = function () {
            $scope.isUserPreviewVisible = true;
        };

        $scope.inviteFriend = function () {
            profileData.sendFriendRequest($scope.comment.author.username)
                .then(
                function successHandler(data) {
                    notify.info("Invitation sent.")
                    console.log(data);
                },
                function errorHandler(error) {
                    console.log(error);
                }
            );
        };
    });