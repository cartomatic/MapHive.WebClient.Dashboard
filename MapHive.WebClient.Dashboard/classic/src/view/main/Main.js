//Disable some of the JSLint warnings
/*global Ext,console,MapHive,mh*/
(function(){
    //Make sure strict mode is on
    'use strict';

    /**
     * App's viewport
     */
    Ext.define('Dashboard.view.main.Main', {
        extend: 'mh.module.sideNav.SideNav',

        requires: [
            'Dashboard.view.main.MainController',
            'Ext.plugin.Viewport'
        ],

        plugins: 'viewport',

        controller: 'viewport'
    });

}());