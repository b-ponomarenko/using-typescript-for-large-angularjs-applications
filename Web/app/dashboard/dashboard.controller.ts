module app.dashboard {
    'use strict';

    interface IDashboardScope {
        blogPosts: IBlogPost[];
        blogPost: IBlogPost;
        selectBlogPost: (uniqueId: string) => void;
    }

    interface IBlogPost {
        uniqueId: string;
        title: string;
        publishedDate?: number;
        body?: string;
    }

    class DashboardController implements IDashboardScope {
        blogPost: IBlogPost;
        blogPosts: IBlogPost[] = [];

        static $inject = ['blogPosts'];
        constructor(blogPosts: IBlogPost[]) {
            this.blogPosts = blogPosts;
            this.blogPost = blogPosts[0];
        }

        selectBlogPost(uniqueId: string): void {
            angular.forEach(this.blogPosts, (blogPost: IBlogPost): void => {
                if (blogPost.uniqueId === uniqueId) {
                    this.blogPost = blogPost;
                }
            });
        }
    }

    angular
        .module('app.dashboard')
        .controller('app.dashboard.DashboardController',
        DashboardController);
} 