(function () {
    'use strict';
    var currentUser = {
        userId: ''
    };
    angular
        .module('app')
        .value('currentUser', currentUser);
})();
