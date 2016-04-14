(function () {
    'use strict';
    angular
        .module('app.usersettings')
        .config(config);
    config.$inject = [
        '$routeProvider',
        '$locationProvider'
    ];
    function config($routeProvider, $locationProvider) {
        $routeProvider
            .when('/admin/usersettings', {
            templateUrl: 'app/usersettings/usersettings.html',
            controller: 'app.usersettings.UserSettingsController',
            controllerAs: 'vm',
            resolve: {
                user: userResolve
            }
        });
    }
    userResolve.$inject = [
        'currentUser',
        'app.services.UserService'
    ];
    function userResolve(currentUser, userService) {
        return userService.getById(currentUser.userId);
    }
})();
//# sourceMappingURL=usersettings.routes.js.map