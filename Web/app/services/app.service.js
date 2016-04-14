var app;
(function (app) {
    var services;
    (function (services) {
        'use strict';
        var UserService = (function () {
            /* @ngInject */
            function UserService($http) {
                this.$http = $http;
            }
            UserService.prototype.getById = function (uniqueId) {
                return this.$http.get('api/users/' + uniqueId)
                    .then(function (response) {
                    return response.data;
                });
            };
            UserService.$inject = ['$http'];
            return UserService;
        })();
        angular
            .module('app.services')
            .service('app.services.userService', UserService);
    })(services = app.services || (app.services = {}));
})(app || (app = {}));
//# sourceMappingURL=app.service.js.map