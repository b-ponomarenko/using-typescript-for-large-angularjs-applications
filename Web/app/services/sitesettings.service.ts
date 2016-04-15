module app.services {
    'use strict';

    export interface ISiteSettings {
        title: string;
        description: string;
        themeName: string;
        availableThemeNames: string[];
    }

    export interface ISiteSettingsService {
        getSettings(): ng.IPromise<ISiteSettings>;
        getThemes(): ng.IPromise<string[]>;
        updateSettings(siteSettings: ISiteSettings): void;
    }

    class SiteSettingsService implements ISiteSettingsService {
        constructor(private $http: ng.IHttpService,
            private apiEndpoint: app.blocks.IApiEndpointConfig) {
        }

        getSettings(): ng.IPromise<ISiteSettings> {
            return this.$http.get(this.apiEndpoint.baseUrl + '/site')
                .then((response: ng.IHttpPromiseCallbackArg<ISiteSettings>): ISiteSettings => {
                    return <ISiteSettings>response.data;
                });
        }

        updateSettings(siteSettings: ISiteSettings): void {
        }

        getThemes(): ng.IPromise<string[]> {
            return this.$http.get(this.apiEndpoint.baseUrl + '/themes')
                .then((response: ng.IHttpPromiseCallbackArg<string[]>): string[] => {
                    return <string[]>response.data;
                });
        }
    }

    factory.$inject = [
        '$http',
        'app.blocks.ApiEndpoint'
    ];
    function factory($http: ng.IHttpService,
        apiEndpoint: app.blocks.IApiEndpointConfig): ISiteSettingsService {
        return new SiteSettingsService($http, apiEndpoint);
    }

    angular
        .module('app.services')
        .factory('app.services.SiteSettingsService',
        factory);
} 