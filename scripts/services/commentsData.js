'use strict';

socialNetwork.factory('commentsData', function commentsData($http, requester, authentication , baseServiceUrl) {
    var serviceUrl = baseServiceUrl + 'posts';

    function getPostById(id) {

        return requester('GET', serviceUrl + '/' + id, authentication.getHeaders());
    }





    return {

    }
});