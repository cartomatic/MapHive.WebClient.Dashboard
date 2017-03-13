//Disable some of the JSLint warnings
/*global window,console,Ext*/
(function(){
    //Make sure strict mode is on
    'use strict';

    Ext.define('Dashboard.view.teams.TeamsLocalisation', {

        requires: [
            'mh.localisation.Localisation',
            'mh.module.dataView.DataViewBaseLocalisation'
        ],
        statics: {
            inherits: 'mh.module.dataView.DataViewBaseLocalisation',
            localisation: {
                gridTitle: {
                    en: 'Teams',
                    pl: 'Grupy użytkowników'
                },
                name: {
                    en: 'Name',
                    pl: 'Nazwa'
                },
                description: {
                    en: 'Description',
                    pl: 'Opis'
                },
                teamUsers: {
                    en: 'Users',
                    pl: 'Użytkownicy'
                },
                email: {
                    en: 'Email',
                    pl: 'Email'
                },
                forename: {
                    en: 'Forename',
                    pl: 'Imię'
                },
                surname: {
                    en: 'Surname',
                    pl: 'Nazwisko'
                },
                teamApps: {
                    en: 'Applications',
                    pl: 'Aplikacje'
                },
                isAppAdmin: {
                    en: 'Admin',
                    pl: 'Admin'
                }
            }
        }
    }, function(){
        mh.localisation.Localisation.registerTranslations(this);
    });

}());