'use strict';

socialNetwork.factory('postsData', function postsData($http, requester, baseServiceUrl) {
    var serviceUrl = baseServiceUrl + 'Posts';

    function getPostById(id) {

        return requester('GET', serviceUrl + '/' + id);
    }

    function getPostDetailedLikes(id) {

        return requester('GET', serviceUrl + '/' + id + '/likes');
    }

    function getPostPreviewLikes(id) {

        return requester('GET', serviceUrl + '/' + id + '/likes/preview');
    }

    function addPost(content, username) {

        var headers = {
            postContent: content,
            username: username
        };

        return requester('POST', baseServiceUrl + 'posts', headers);
    }

    function editPostById(content, id) {

        var headers = {
            postContent: content
        };

        return requester('PUT', serviceUrl + '/' + id, headers);
    }

    function deletePostById(id) {

        return requester('DELETE', serviceUrl + '/' + id);
    }

    function likePostById(id) {

        return requester('POST', serviceUrl + '/' + id + '/likes');
    }

    function unlikePostById(id) {

        return requester('DELETE', serviceUrl + '/' + id + '/likes');
    }

    return {
        getPostById: getPostById,
        getPostDetailedLikes: getPostDetailedLikes,
        getPostPreviewLikes: getPostPreviewLikes,
        addPost: addPost,
        editPostById: editPostById,
        deletePostById: deletePostById,
        likePostById: likePostById,
        unlikePostById: unlikePostById
    }
});