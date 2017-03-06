//Disable some of the JSLint warnings
/*global window,console,Ext*/
(function(){
    //Make sure strict mode is on
    'use strict';
    
    Ext.define('Dashboard.view.teams.TeamsDataEditFormLocalisation', {

        requires: [
            'mh.localisation.Localisation',
            'Dashboard.view.teams.TeamsLocalisation'
        ],
        statics: {
            inherits: 'Dashboard.view.teams.TeamsLocalisation',
            localisation: {}
        }

    }, function(){
        mh.localisation.Localisation.registerTranslations(this);
    });

}());