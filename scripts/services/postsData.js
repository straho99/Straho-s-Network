'use strict';

socialNetwork.factory('postsData', function postsData($http, $q, $log, baseServiceUrl) {
    var serviceUrl = baseServiceUrl + 'Posts';

    function getPostById(id) {
        var deferred = $q.defer();

        $http(
            {
                method: 'GET',
                url: serviceUrl + '/' + id
            })
            .success(function (data, status, headers, config) {
                deferred.resolve(data);
            })
            .error(function (data, status, headers, config) {
                $log.error(data);
                deferred.reject(data);
            });

        return deferred.promise;
    }

    function getPostDetailedLikes(id) {
        var deferred = $q.defer();

        $http(
            {
                method: 'GET',
                url: serviceUrl + '/' + id + '/likes'
            })
            .success(function (data, status, headers, config) {
                deferred.resolve(data);
            })
            .error(function (data, status, headers, config) {
                $log.error(data);
                deferred.reject(data);
            });

        return deferred.promise;
    }

    function getPostPreviewLikes(id) {
        var deferred = $q.defer();

        $http(
            {
                method: 'GET',
                url: serviceUrl + '/' + id + '/likes/preview'
            })
            .success(function (data, status, headers, config) {
                deferred.resolve(data);
            })
            .error(function (data, status, headers, config) {
                $log.error(data);
                deferred.reject(data);
            });

        return deferred.promise;
    }

    function addPost(content, username) {
        var deferred = $q.defer();

        $http(
            {
                method: 'POST',
                url: baseServiceUrl + 'posts',
                headers: {
                    postContent: content,
                    username: username
                }
            })
            .success(function (data, status, headers, config) {
                deferred.resolve(data);
            })
            .error(function (data, status, headers, config) {
                $log.error(data);
                deferred.reject(data);
            });

        return deferred.promise;
    }

    function editPostById(content, id) {
        var deferred = $q.defer();

        $http(
            {
                method: 'PUT',
                url: serviceUrl + '/' + id,
                headers: {
                    postContent: content
                }
            })
            .success(function (data, status, headers, config) {
                deferred.resolve(data);
            })
            .error(function (data, status, headers, config) {
                $log.error(data);
                deferred.reject(data);
            });

        return deferred.promise;
    }

    function deletePostById(id) {
        var deferred = $q.defer();

        $http(
            {
                method: 'DELETE',
                url: serviceUrl + '/' + id
            })
            .success(function (data, status, headers, config) {
                deferred.resolve(data);
            })
            .error(function (data, status, headers, config) {
                $log.error(data);
                deferred.reject(data);
            });

        return deferred.promise;
    }

    function likePostById(id) {
        var deferred = $q.defer();

        $http(
            {
                method: 'POST',
                url: serviceUrl + '/' + id + '/likes'
            })
            .success(function (data, status, headers, config) {
                deferred.resolve(data);
            })
            .error(function (data, status, headers, config) {
                $log.error(data);
                deferred.reject(data);
            });

        return deferred.promise;
    }

    function unlikePostById(id) {
        var deferred = $q.defer();

        $http(
            {
                method: 'DELETE',
                url: serviceUrl + '/' + id + '/likes'
            })
            .success(function (data, status, headers, config) {
                deferred.resolve(data);
            })
            .error(function (data, status, headers, config) {
                $log.error(data);
                deferred.reject(data);
            });

        return deferred.promise;
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
})