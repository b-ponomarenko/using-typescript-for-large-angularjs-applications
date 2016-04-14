((): void => {
    'use strict';

    angular
        .module('app.dashboard')
        .config(config);

    config.$inject = [
        '$routeProvider',
        '$locationProvider'
    ];
    function config(
        $routeProvider: ng.route.IRouteProvider,
        $locationProvider: ng.ILocationProvider): void {
        $routeProvider
            .when('/admin', {
                templateUrl: 'app/dashboard/dashboard.html',
                controller: 'app.dashboard.DashboardController',
                controllerAs: 'vm',
                resolve: {
                    blogPosts: resolveBlogPosts
                }
            });
    }

    resolveBlogPosts.$inject = ['app.services.BlogPostService'];
    function resolveBlogPosts(blogPostService: app.services.IBlogPostService): ng.IPromise<app.services.IBlogPost[]> {
        return blogPostService.getAll();
    }
})();