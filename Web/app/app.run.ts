interface IAppCookies {
    userId: string;
}

((): void => {
    'use strict';

    angular
        .module('app')
        .run(run);

    run.$inject = [
        '$rootScope',
        '$cookies',
        'currentUser'
    ];
    function run(
        $rootScope: ng.IRootScopeService,
        $cookies: IAppCookies,
        currentUser: ICurrentUser): void {

        $rootScope.$on('$routeChangeError', (): void => {
        });
        currentUser.userId = $cookies.userId;
    }
})();