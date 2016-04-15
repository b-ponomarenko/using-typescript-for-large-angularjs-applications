var app;
(function (app) {
    var dashboard;
    (function (dashboard) {
        'use strict';
        var DashboardController = (function () {
            function DashboardController(blogPosts) {
                this.blogPosts = [];
                this.blogPosts = blogPosts;
                this.blogPost = blogPosts[0];
            }
            DashboardController.prototype.selectBlogPost = function (uniqueId) {
                var _this = this;
                angular.forEach(this.blogPosts, function (blogPost) {
                    if (blogPost.uniqueId === uniqueId) {
                        _this.blogPost = blogPost;
                    }
                });
            };
            DashboardController.$inject = ['blogPosts'];
            return DashboardController;
        }());
        angular
            .module('app.dashboard')
            .controller('app.dashboard.DashboardController', DashboardController);
    })(dashboard = app.dashboard || (app.dashboard = {}));
})(app || (app = {}));
