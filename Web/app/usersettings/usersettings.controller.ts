module app.usersettings {
    'use strict';

    interface IUserSettingsScope {
        user: app.services.IUser;
        save: () => void;
    }

    class UserSettingsController implements IUserSettingsScope {
        user: app.services.IUser;

        static $inject = ['user'];
        constructor(user: app.services.IUser) {
            this.user = user;
        }

        save(): void {
        }
    }

    angular
        .module('app.usersettings')
        .controller('app.usersettings.UserSettingsController',
        UserSettingsController);
} 