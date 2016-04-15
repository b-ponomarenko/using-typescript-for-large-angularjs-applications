module app.services.errorLoggers {
    'use strict';

    class ConsoleErrorLogger implements loggers.IErrorLoger {
        log(error: string): void {}
    }
}