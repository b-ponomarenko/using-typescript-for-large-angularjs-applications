interface IBlogPostRouteParams extends ng.route.IRouteParamsService {
    uniqueId: string;
}

((): void => {
    'use strict';

    angular
        .module('app.blogposts')
        .config(config);

    config.$inject = [
        '$routeProvider',
        '$locationProvider'
    ];
    function config(
        $routeProvider: ng.route.IRouteProvider,
        $locationProvider: ng.ILocationProvider): void {
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

    function resolveNewBlogPost(): app.services.IBlogPost {
        return <app.services.IBlogPost>{
            tags: []
        };
    }

    resolveBlogPost.$inject = ['app.services.BlogPostService'];
    function resolveBlogPost(
        blogPostService: app.services.IBlogPostService): ng.IPromise<app.services.IBlogPost> {
        return null;
    }
})();