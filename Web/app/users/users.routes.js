(function () {
    'use strict';
    angular
        .module('app.users')
        .config(config);
    config.$inject = [
        '$routeProvider',
        '$locationProvider'
    ];
    function config($routeProvider, $locationProvider) {
        $routeProvider
            .when('/admin/users', {
            templateUrl: 'app/users/users.html',
            controller: 'app.users.UsersController',
            controllerAs: 'vm'
        });
    }
})();
