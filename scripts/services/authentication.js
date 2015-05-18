'use strict';

socialNetwork.factory('authentication', function authentication($http, baseServiceUrl, requester) {

    var service = {},
        serviceUrl = baseServiceUrl + 'users';


    service.login = function (loginData) {
        return requester('POST', serviceUrl + '/login', null, loginData);
    };

    service.register = function (registerData) {
        return requester('POST', serviceUrl + '/register', null, registerData);
    };

    service.logout = function () {
        return requester('POST', serviceUrl + '/logout', this.getHeaders());
    };

    service.getUserFullData = function (username) {
        return requester('GET', serviceUrl + '/' + username, this.getHeaders());
    };

    service.getUserPreviewData = function (username) {
        return requester('GET', serviceUrl + '/' + username + '/preview', this.getHeaders());
    };

    service.editUserProfile = function (profileData) {
        return requester('PUT', baseServiceUrl + 'me', this.getHeaders(), profileData);
    };

    service.changePassword = function (passwordData) {
        return requester('PUT', baseServiceUrl + 'me/changepassword', this.getHeaders(), passwordData);
    };

    service.setCredentials = function (serverData) {
        localStorage['accessToken'] = serverData.access_token;
        localStorage['username'] = serverData.userName;
    };

    service.getUserName = function () {
        return localStorage['username'];
    };

    service.clearCredentials = function () {
        localStorage.clear();
    };

    service.getHeaders = function () {
        return {
            Authorization: 'Bearer ' + localStorage['accessToken']
        }
    };

    service.isLogged = function () {
        return localStorage['accessToken'];
    };

    service.setName = function (name) {
        localStorage['name'] = name;
    };

    service.getName = function () {
        return localStorage['name'];
    };

    service.setProfileImageData = function (profileImageData) {
        localStorage['profileImageData'] = profileImageData;
    };

    service.getProfileImageData = function () {
        return localStorage['profileImageData'];
    };

    return service;
});