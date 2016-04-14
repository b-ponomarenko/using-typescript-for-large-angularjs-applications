((): void => {
    'use strict';

    angular
        .module('app.sitesettings')
        .config(config);

    config.$inject = [
        '$routeProvider',
        '$locationProvider'
    ];
    function config(
        $routeProvider: ng.route.IRouteProvider,
        $locationProvider: ng.ILocationProvider): void {
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
    function siteSettingsResolve(
        siteSettingsService: app.services.ISiteSettingsService): ng.IPromise<app.services.ISiteSettings> {
        return siteSettingsService.getSettings();
    }

    themeNamesResolve.$inject = ['app.services.SiteSettingsService'];
    function themeNamesResolve(
        siteSettingsService: app.services.ISiteSettingsService): ng.IPromise<string[]> {
        return siteSettingsService.getThemes();
    }
})(); 
