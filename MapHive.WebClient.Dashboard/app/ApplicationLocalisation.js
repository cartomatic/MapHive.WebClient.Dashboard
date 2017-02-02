//Disable some of the JSLint warnings
/*global window,console,Ext*/
(function(){
    //Make sure strict mode is on
    'use strict';
    
    Ext.define('Dashboard.ApplicationLocalisation', {
        requires: [
            'mh.localisation.Localisation',
            'mh.ApplicationLocalisation'
        ],
        statics: {
            inherits: 'mh.ApplicationLocalisation',
            localisation: {
            }
        }
    }, function(){
        mh.localisation.Localisation.registerTranslations(this);
    });

}());