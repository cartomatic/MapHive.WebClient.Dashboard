//Disable some of the JSLint warnings
/*global window,console,Ext*/
(function(){
    //Make sure strict mode is on
    'use strict';
    
    /**
     * App launcher
     */
    Ext.define('Dashboard.AppLauncher', {

    requires: [
        'Ext.tip.QuickTipManager',
        'Dashboard.view.main.Main',
        'mh.module.appBar.AppBar'
    ],

    constructor: function(config){

            Ext.QuickTips.init();

            //init the GUI
            Ext.create('Dashboard.view.main.Main', {
                dockedItems: [
                    //standardised app top tbar
                    {
                        xtype: 'mh-app-bar',
                        cls: 'mh-app-bar-shadow'
                    }
                ]
            });
        }
    });

}());