module errorLoggers {
    'use strict';

    export interface IErrorLoger {
        log(error: string): void;
    }

    export interface IErrorBroker {
        log(error: string): void;
        registerLogger(errorLogger: IErrorBroker): void;
    }

    class ErrorBroker implements IErrorBroker {
        log(error: string): void { }
        registerLogger(errorLogger: IErrorBroker): void {
            
        }
    }

    angular
        .module('app.blocks')
        .service('app.blocks.ErrorBroker', ErrorBroker);
}