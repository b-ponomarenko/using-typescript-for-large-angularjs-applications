(function () {
    'use strict';
    angular
        .module('app.blogposts')
        .config(config);
    config.$inject = [
        '$routeProvider',
        '$locationProvider'
    ];
    function config($routeProvider, $locationProvider) {
        $routeProvider
            .when('/admin/blogposts/newpost', {
            templateUrl: 'app/blogposts/blogpost.html',
            controller: 'app.blogposts.BlogPostController',
            controllerAs: 'vm',
            resolve: {
                blogPost: resolveNewBlogPost
            }
        })
            .when('/admin/blogposts/:uniqueId', {
            templateUrl: 'app/blogposts/blogpost.html',
            controller: 'app.blogposts.BlogPostController',
            controllerAs: 'vm',
            resolve: {
                blogPost: resolveBlogPost
            }
        });
    }
    function resolveNewBlogPost() {
        return {
            tags: []
        };
    }
    resolveBlogPost.$inject = ['app.services.BlogPostService'];
    function resolveBlogPost($route, blogPostService) {
        var routeParams = $route.current.params;
        return blogPostService.getById(routeParams.uniqueId);
    }
})();
