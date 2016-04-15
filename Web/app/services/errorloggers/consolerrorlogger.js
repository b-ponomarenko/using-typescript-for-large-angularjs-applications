var app;
(function (app) {
    var services;
    (function (services) {
        var errorLoggers;
        (function (errorLoggers) {
            'use strict';
            var ConsoleErrorLogger = (function () {
                function ConsoleErrorLogger() {
                }
                ConsoleErrorLogger.prototype.log = function (error) { };
                return ConsoleErrorLogger;
            }());
        })(errorLoggers = services.errorLoggers || (services.errorLoggers = {}));
    })(services = app.services || (app.services = {}));
})(app || (app = {}));
