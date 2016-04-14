var app;
(function (app) {
    var widgets;
    (function (widgets) {
        'use strict';
        var SlugCheckController = (function () {
            function SlugCheckController($scope) {
            }
            SlugCheckController.$inject = ['$scope'];
            return SlugCheckController;
        })();
        angular
            .module('app.widgets')
            .directive('blSlugCheck', slugCheck);
        slugCheck.$inject = ['app.services.BlogPostService'];
        function slugCheck(blogPostService) {
            var directive = {
                restrict: 'A',
                link: link,
                controller: SlugCheckController
            };
            function link(scope, element) {
                element.on('blur', function () {
                    blogPostService.checkSlugInUse(element.val())
                        .then(function (inUse) {
                        console.log(inUse);
                    });
                });
            }
            return directive;
        }
    })(widgets = app.widgets || (app.widgets = {}));
})(app || (app = {}));
//# sourceMappingURL=slugcheck.directive.js.map