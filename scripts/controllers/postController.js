socialNetwork.controller('PostController',
    function PostController($scope, authentication, postsData, commentsData, notify) {

        $scope.isUserPreviewVisible = false;

        //$scope.on('click', function () {
        //    $scope.isUserPreviewVisible = false;
        //});

        commentsData.getPostComments($scope.post.id)
            .then(
            function successHandler(data) {
                $scope.post.comments = data;
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

        //$scope.previewUser = function($event, user) {
        //
        //    console.log(event, user);
        //
        //    var dialogScope = $scope.$new(true);
        //    dialogScope.user = user;
        //
        //    var userPreviewModal = $modal.open({
        //        templateUrl: 'partials/user-preview.html',
        //        scope: dialogScope,
        //        size: 'sm',
        //        class: 'user-preview-container'
        //    });
        //};
    });