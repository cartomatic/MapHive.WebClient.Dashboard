//Disable some of the JSLint warnings
/*global window,console,Ext*/
(function(){
    //Make sure strict mode is on
    'use strict';

    Ext.define('Dashboard.view.users.UsersLocalisation', {

        requires: [
            'mh.localisation.Localisation',
            'mh.module.dataView.users.UsersLocalisation'
        ],
        statics: {
            inherits: 'mh.module.dataView.users.UsersLocalisation',
            localisation: {
                btnAddUser: {
                    en: 'Add user',
                    pl: 'Dodaj użytkownika'
                },
                btnAddNewOrgUser: {
                    en: 'Add new user',
                    pl: 'Dodaj nowego użytkownika'
                },
                btnAddUserFromCatalogue: {
                    en: 'Search for user',
                    pl: 'Wyszukaj użytkownika'
                },
                addUserMask: {
                    en: 'Adding a user...',
                    pl: 'Dodawanie użytkownika...'
                },
                addUserFailure: {
                    en: 'Failed to add a user.',
                    pl: 'Dodanie użytkownika nie powiodło się.'
                },
                linkUserMask: {
                    en: 'Linking a user...',
                    pl: 'Dodawanie użytkownika...'
                },
                linkUserFailure: {
                    en: 'Failed to link a user.',
                    pl: 'Dodanie użytkownika nie powiodło się.'
                },
                externalUser: {
                    en: 'Global user',
                    pl: 'Użytkownik globalny'
                },
                orgUser: {
                    en: 'Local user',
                    pl: 'Użytkownik lokalny'
                }
            }
        }
    }, function(){
        mh.localisation.Localisation.registerTranslations(this);
    });

}());