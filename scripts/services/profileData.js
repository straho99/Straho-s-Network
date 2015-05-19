'use strict';

socialNetwork.factory('profileData', function profileData($http, requester, authentication , baseServiceUrl) {
    var service = {},
        serviceUrl = baseServiceUrl + 'me';

    service.getDataAboutMe = function () {
        return requester('GET', serviceUrl, this.getHeaders());
    };

    service.getOwnFriends = function () {
        return requester('GET', serviceUrl + '/friends', this.getHeaders());
    };

    service.getFriendRequests = function () {
        return requester('GET', serviceUrl + '/requests', this.getHeaders());
    };

    service.sendFriendRequest = function (username) {
        return requester('POST', serviceUrl + '/requests/' + username, this.getHeaders());
    };

    service.approveFriendRequest = function (requestId) {
        return requester('PUT', serviceUrl + '/requests/' + requestId + '?status=approved', this.getHeaders());
    };

    service.rejectFriendRequest = function (requestId) {
        return requester('PUT', serviceUrl + '/requests/' + requestId + '?status=delete', this.getHeaders());
    };

    service.getNewsFeedPages = function (StartPostId) {
        return requester('GET', serviceUrl + '/feed?StartPostId=' + StartPostId + '&PageSize=5', this.getHeaders());
    };

    service.changePassword = function (passwordData) {
        return requester('PUT', serviceUrl + '/changepassword', this.getHeaders(), passwordData);
    };

    return {
        getDataAboutMe: getDataAboutMe,
        getOwnFriends: getOwnFriends,
        getFriendsRequests: getFriendRequests,
        sendFriendRequest: sendFriendRequest,
        approveFriendRequest: approveFriendRequest,
        rejectFriendRequest: rejectFriendRequest,
        getNewsFeedPages: getNewsFeedPages,
        changePassword: changePassword
    }
});