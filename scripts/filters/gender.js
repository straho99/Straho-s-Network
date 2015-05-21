'use strict';

socialNetwork.filter('gender', function() {
    return function(input) {
        input = parseInt(input);
        switch (input) {
            case 1: return "Male"; break;
            case 2: return "Female"; break;
            case 3: return "gender: got undefined"; break;
        }
    }
});