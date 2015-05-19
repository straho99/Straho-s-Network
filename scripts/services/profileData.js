'use strict';

socialNetwork.factory('profileData', function profileData($http, requester, authentication , baseServiceUrl) {
    var serviceUrl = baseServiceUrl + 'posts';

    function getPostById(id) {

        return requester('GET', serviceUrl + '/' + id, authentication.getHeaders());
    }





    return {

    }
});