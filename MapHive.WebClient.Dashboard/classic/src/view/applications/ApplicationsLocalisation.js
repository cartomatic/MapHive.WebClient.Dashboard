//Disable some of the JSLint warnings
/*global window,console,Ext*/
(function(){
    //Make sure strict mode is on
    'use strict';

    Ext.define('Dashboard.view.applications.ApplicationsLocalisation', {

        requires: [
            'mh.localisation.Localisation',
            'mh.module.dataView.applications.ApplicationsLocalisation'
        ],
        statics: {
            inherits: 'mh.module.dataView.applications.ApplicationsLocalisation',
            localisation: {
            }
        }
    }, function(){
        mh.localisation.Localisation.registerTranslations(this);
    });

}());