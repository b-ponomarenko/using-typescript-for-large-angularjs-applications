module app.services {
    'use strict';

    export interface IBlogPostService {
        getAll(): ng.IPromise<IBlogPost[]>;
        getById(uniqueId: string): ng.IPromise<IBlogPost>;
        checkSlugInUse(slug: string): ng.IPromise<boolean>;
    }

    export interface IBlogPost {
        uniqueId: string;
        slug: string;
        title: string;
        description: string;
        body: string;
        tags: string[];
        createDate: number;
        modifiedDate: number;
        publishedDate?: number;
    }

    class BlogPostService implements IBlogPostService {
        constructor(private $http: ng.IHttpService,
            private apiEndpoint: app.blocks.IApiEndpointConfig) { }

        getAll(): ng.IPromise<IBlogPost[]> {
            return this.$http
                .get(this.apiEndpoint.baseUrl + '/blogposts')
                .then((response: ng.IHttpPromiseCallbackArg<IBlogPost[]>): IBlogPost[]=> {
                    return <IBlogPost[]>response.data;
                });
        }

        getById(uniqueId: string): ng.IPromise<IBlogPost> {
            return this.$http
                .get(this.apiEndpoint.baseUrl + '/blogposts/' + uniqueId)
                .then((response: ng.IHttpPromiseCallbackArg<IBlogPost>): IBlogPost=> {
                    return <IBlogPost>response.data;
                });
        }

        checkSlugInUse(slug: string): ng.IPromise<boolean> {
            return this.$http
                .get(this.apiEndpoint.baseUrl + '/blogposts/slugisinuse/' + slug)
                .then((response: ng.IHttpPromiseCallbackArg<boolean>): boolean => {
                    return <boolean>response.data;
                });
        }
    }

    factory.$inject = [
        '$http',
        'app.blocks.ApiEndpoint'
    ];
    function factory($http: ng.IHttpService,
        apiEndpoint: app.blocks.IApiEndpointConfig): IBlogPostService {
        return new BlogPostService($http, apiEndpoint);
    }

    angular
        .module('app.services')
        .factory('app.services.BlogPostService',
        factory);
} 