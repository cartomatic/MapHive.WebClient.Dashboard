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
                }
            }
        }
    }, function(){
        mh.localisation.Localisation.registerTranslations(this);
    });

}());