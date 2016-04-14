(function () {
    'use strict';
    angular
        .module('app.sitesettings')
        .config(config);
    config.$inject = [
        '$routeProvider',
        '$locationProvider'
    ];
    function config($routeProvider, $locationProvider) {
        $routeProvider
            .when('/admin/sitesettings', {
            templateUrl: 'app/sitesettings/sitesettings.html',
            controller: 'app.sitesettings.SiteSettingsController',
            controllerAs: 'vm',
            resolve: {
                siteSettings: siteSettingsResolve,
                themeNames: themeNamesResolve
            }
        });
    }
    siteSettingsResolve.$inject = ['app.services.SiteSettingsService'];
    function siteSettingsResolve(siteSettingsService) {
        return siteSettingsService.getSettings();
    }
    themeNamesResolve.$inject = ['app.services.SiteSettingsService'];
    function themeNamesResolve(siteSettingsService) {
        return siteSettingsService.getThemes();
    }
})();
//# sourceMappingURL=sitesettings.routes.js.map