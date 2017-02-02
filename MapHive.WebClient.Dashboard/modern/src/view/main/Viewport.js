//Disable some of the JSLint warnings
/*global Ext,console,MapHive,mh*/
(function(){
    //Make sure strict mode is on
    'use strict';

    Ext.define('Dashboard.view.main.Viewport', {

        extend: 'Ext.Container',

        fullscreen: 'true',

        layout: 'card',

        html: 'No mobile app so far. Sorry...',
    
        items: [
        ]
    });

}());