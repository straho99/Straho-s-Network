socialNetwork.controller('PostController',
    function PostController($scope, $document, authentication, postsData, commentsData, usersData, profileData, notify) {

        $scope.isUserPreviewVisible = false;
        $scope.showComments = false;

        commentsData.getPostComments($scope.post.id)
            .then(
            function successHandler(data) {
                $scope.post.comments = data;
            },
            function errorHandler(error) {
                console.log(error);
            }
        );

        usersData.getUserPreviewData($scope.post.author.username)
            .then(
            function successHandler(data) {
                $scope.posterData = data;
            },
            function errorHandler(error) {
                console.log(error);
            }
        );

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

        $scope.likePost = function () {
            postsData.likePostById($scope.post.id)
                .then(
                function successHandler(data) {
                    notify.info('Post liked.');
                    $scope.post.liked = true;
                    postsData.getPostPreviewLikes($scope.post.id)
                        .then(
                        function successHandler(likesData) {
                            $scope.post.likesCount = likesData.totalLikeCount;
                        }
                    );
                },
                function errorHandler(error) {
                    console.log(error);
                }
            );
        };

        $scope.unlikePost = function () {
            postsData.unlikePostById($scope.post.id)
                .then(
                function successHandler(data) {
                    notify.info('Post unliked');
                    $scope.post.liked = false;
                    postsData.getPostPreviewLikes($scope.post.id)
                        .then(
                        function successHandler(likesData) {
                            $scope.post.likesCount = likesData.totalLikeCount;
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
            profileData.sendFriendRequest($scope.post.author.username)
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
        
        $scope.toggleComments = function () {
            $scope.showComments = !$scope.showComments;
        };
    });