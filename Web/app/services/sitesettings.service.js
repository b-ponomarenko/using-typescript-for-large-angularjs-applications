var app;
(function (app) {
    var services;
    (function (services) {
        'use strict';
        var SiteSettingsService = (function () {
            function SiteSettingsService($http, apiEndpoint) {
                this.$http = $http;
                this.apiEndpoint = apiEndpoint;
            }
            SiteSettingsService.prototype.getSettings = function () {
                return this.$http.get(this.apiEndpoint.baseUrl + '/site')
                    .then(function (response) {
                    return response.data;
                });
            };
            SiteSettingsService.prototype.updateSettings = function (siteSettings) {
            };
            SiteSettingsService.prototype.getThemes = function () {
                return this.$http.get(this.apiEndpoint.baseUrl + '/themes')
                    .then(function (response) {
                    return response.data;
                });
            };
            return SiteSettingsService;
        }());
        factory.$inject = [
            '$http',
            'app.blocks.ApiEndpoint'
        ];
        function factory($http, apiEndpoint) {
            return new SiteSettingsService($http, apiEndpoint);
        }
        angular
            .module('app.services')
            .factory('app.services.SiteSettingsService', factory);
    })(services = app.services || (app.services = {}));
})(app || (app = {}));
