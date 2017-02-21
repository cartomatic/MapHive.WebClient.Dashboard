//Disable some of the JSLint warnings
/*global window,console,Ext*/
(function(){
    //Make sure strict mode is on
    'use strict';
    
    Ext.define('Dashboard.view.main.MainLocalisation', {
        requires: [
            'mh.localisation.Localisation'
        ],
        statics: {
            localisation: {
                dashboard: {
                    en: 'Dashboard',
                    pl: 'Dashboard'
                },
                people: {
                    en: 'People',
                    pl: 'Użytkownicy'
                },
                organisation_settings: {
                    en: 'Organisation settigs',
                    pl: 'Ustawienia organizacji'
                }
            }
        }
    }, function(){
        mh.localisation.Localisation.registerTranslations(this);
    });

}());