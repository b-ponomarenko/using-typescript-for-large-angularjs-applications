module app.users {
    'use strict';

    interface IUsersScope {
        users: IUser[];
        user: IUser;
        userForm: ng.IFormController;
        edit: (uniqueId: string) => void;
        delete: (uniqueId: string) => void;
        save: () => void;
        cancel: () => void;
    }

    interface IUser {
        email: string;
        firstName: string;
        lastName: string;
        twitterUsername: string;
        socialNetworks: ISocialNetwork[];
    }

    interface ISocialNetwork {
        name: string;
        username: string;
    }

    class UsersController implements IUsersScope {
        users: IUser[];
        user: IUser;
        userForm: ng.IFormController;

        static $inject = [];
        constructor() {
            this.user = this.createEmptyUser();
        }

        edit(uniqueId: string): void {
        }

        delete(uniqueId: string): void {
        }

        save(): void {
        }

        cancel(): void {
            this.user = this.createEmptyUser();
        }

        private createEmptyUser(): IUser {
            return <IUser>{
                email: '',
                password: '',
                firstName: '',
                lastName: '',
                twitterUsername: '',
                socialNetworks: []
            };
        }
    }

    angular
        .module('app.users')
        .controller('app.users.UsersController',
        UsersController);
} 