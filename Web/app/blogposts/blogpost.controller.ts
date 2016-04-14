module app.blogposts {
    'use strict';

    interface IBlogPostScope {
        uniqueId: string;
        title: string;
        body: string;
        slug: string;
        description: string;
        tags: string;
        publishedDate?: number;
        save: () => void;
    }

    class BlogPostController implements IBlogPostScope {
        uniqueId: string;
        title: string;
        body: string;
        slug: string;
        description: string;
        tags: string;
        publishedDate: number;

        static $inject = ['blogPost'];
        constructor(blogPost: app.services.IBlogPost) {
            if (blogPost) {
                this.uniqueId = blogPost.uniqueId;
                this.title = blogPost.title;
                this.body = blogPost.body;
                this.slug = blogPost.slug;
                this.description = blogPost.description;
                this.tags = blogPost.tags.join(',');
                this.publishedDate = blogPost.publishedDate;
            }
        }

        save(): void {

        }
    }

    angular
        .module('app.blogposts')
        .controller('app.blogposts.BlogPostController',
        BlogPostController);
} 