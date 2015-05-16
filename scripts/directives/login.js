'use strict';

socialNetwork.directive('login', function() {
    return {
        restrict: 'AE',
        //template: "<div>Test</div>"
        templateUrl: 'partials/directives/login-form.html'
    }
});