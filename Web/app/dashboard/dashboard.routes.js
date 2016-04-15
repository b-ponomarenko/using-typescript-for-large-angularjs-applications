(function () {
    'use strict';
    angular
        .module('app.dashboard')
        .config(config);
    config.$inject = [
        '$routeProvider',
        '$locationProvider'
    ];
    function config($routeProvider, $locationProvider) {
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
    function resolveBlogPosts(blogPostService) {
        return blogPostService.getAll();
    }
})();
