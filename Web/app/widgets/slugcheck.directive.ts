module app.widgets {
    'use strict';

    class SlugCheckController {
        static $inject = ['$scope'];
        constructor($scope: ng.IScope) {
        }
    }

    angular
        .module('app.widgets')
        .directive('blSlugCheck', slugCheck);

    slugCheck.$inject = ['app.services.BlogPostService'];
    function slugCheck(blogPostService: app.services.IBlogPostService): ng.IDirective {
        var directive = <ng.IDirective> {
            restrict: 'A',
            link: link,
            controller: SlugCheckController
        };

        function link(scope: ng.IScope, element: ng.IAugmentedJQuery): void {
            element.on('blur', (): void => {
                blogPostService.checkSlugInUse(element.val())
                    .then((inUse: boolean): void => {
                        console.log(inUse);
                    });
            });
        }

        return directive;
    }    
}