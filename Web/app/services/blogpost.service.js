var app;
(function (app) {
    var services;
    (function (services) {
        'use strict';
        var BlogPostService = (function () {
            function BlogPostService($http, apiEndpoint) {
                this.$http = $http;
                this.apiEndpoint = apiEndpoint;
            }
            BlogPostService.prototype.getAll = function () {
                return this.$http
                    .get(this.apiEndpoint.baseUrl + '/blogposts')
                    .then(function (response) {
                    return response.data;
                });
            };
            BlogPostService.prototype.getById = function (uniqueId) {
                return this.$http
                    .get(this.apiEndpoint.baseUrl + '/blogposts/' + uniqueId)
                    .then(function (response) {
                    return response.data;
                });
            };
            BlogPostService.prototype.checkSlugInUse = function (slug) {
                return this.$http
                    .get(this.apiEndpoint.baseUrl + '/blogposts/slugisinuse/' + slug)
                    .then(function (response) {
                    return response.data;
                });
            };
            return BlogPostService;
        })();
        factory.$inject = [
            '$http',
            'app.blocks.ApiEndpoint'
        ];
        function factory($http, apiEndpoint) {
            return new BlogPostService($http, apiEndpoint);
        }
        angular
            .module('app.services')
            .factory('app.services.BlogPostService', factory);
    })(services = app.services || (app.services = {}));
})(app || (app = {}));
//# sourceMappingURL=blogpost.service.js.map