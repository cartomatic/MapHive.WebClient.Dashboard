(function(){
    //Make sure strict mode is on
    'use strict';
    
    /**
     * Created by domin on 21.02.2017.
     */
    Ext.define('Dashboard.view.dashboard.Dashboard', {
        extend: 'Ext.panel.Panel',
    
        xtype: 'dboard',

        requires: [
        'Dashboard.view.dashboard.DashboardController'
    ],

    controller: 'dboard',

        bind: {
            title: '{localisation.title}'
        },

        items: [

        ],

        bodyPadding: 20
    });
    
}());

    