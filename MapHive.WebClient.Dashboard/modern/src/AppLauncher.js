//Disable some of the JSLint warnings
/*global Ext,console,MapHive,mh*/
(function(){
    //Make sure strict mode is on
    'use strict';
    
    Ext.define('Dashboard.AppLauncher', {

    requires: [
        'Dashboard.view.main.Viewport'
    ],

    constructor: function(config){

            //Do whatever the customisation are required - running in an iframe vs standalone...

            //init the GUI
            Ext.create('Dashboard.view.main.Viewport');
        }
    });
}());