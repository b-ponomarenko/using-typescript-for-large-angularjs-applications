((): void => {
    'use strict';

    angular
        .module('app.core', [
        /*
         * Angular Modules
         */
            'ngRoute',
            'ngSanitize',
            'ngCookies',
        /*
         * 3rd Party Modules
         */
            'hc.marked'
        ]);
})();