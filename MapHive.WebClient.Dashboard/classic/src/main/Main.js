//Disable some of the JSLint warnings
/*global Ext,console,MapHive,mh*/
(function(){
    //Make sure strict mode is on
    'use strict';

    /**
     * App's viewport
     */
    Ext.define('Dashboard.view.main.Main', {
        extend: 'Ext.panel.Panel',

        requires: [
            'Ext.plugin.Viewport'
        ],

        plugins: 'viewport',

        controller: 'viewport',

        bodyPadding: 20
    });

}());