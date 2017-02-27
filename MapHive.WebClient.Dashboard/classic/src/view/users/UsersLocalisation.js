//Disable some of the JSLint warnings
/*global window,console,Ext*/
(function(){
    //Make sure strict mode is on
    'use strict';

    Ext.define('Dashboard.view.users.UsersLocalisation', {

        requires: [
            'mh.localisation.Localisation',
            'mh.module.dataView.DataViewBaseLocalisation'
        ],
        statics: {
            inherits: 'mh.module.dataView.DataViewBaseLocalisation',
            localisation: {
                gridTitle: {
                    en: 'Users',
                    pl: 'Użytkownicy'
                },
                forename: {
                    en: 'Forename',
                    pl: 'Imię'
                },
                surname: {
                    en: 'Surname',
                    pl: 'Nazwisko'
                },
                email: {
                    en: 'Email',
                    pl: 'Email'
                },
                bio: {
                    en: 'Bio',
                    pl: 'Bio'
                }
            }
        }
    }, function(){
        mh.localisation.Localisation.registerTranslations(this);
    });

}());