var app;
(function (app) {
    var sitesettings;
    (function (sitesettings) {
        'use strict';
        var SiteSettingsController = (function () {
            function SiteSettingsController(siteSettings, themeNames, siteSettingsService) {
                this.siteSettingsService = siteSettingsService;
                this.themeNames = [];
                this.siteSettings = siteSettings;
                this.themeNames = themeNames;
            }
            SiteSettingsController.prototype.save = function () {
            };
            SiteSettingsController.$inject = [
                'siteSettings',
                'themeNames',
                'app.services.SiteSettingsService'
            ];
            return SiteSettingsController;
        })();
        angular
            .module('app.sitesettings')
            .controller('app.sitesettings.SiteSettingsController', SiteSettingsController);
    })(sitesettings = app.sitesettings || (app.sitesettings = {}));
})(app || (app = {}));
//# sourceMappingURL=sitesettings.controller.js.map