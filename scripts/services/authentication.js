'use strict';

socialNetwork.factory('authentication', function authentication() {

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

    return {
        getPostById: getPostById

    }
});