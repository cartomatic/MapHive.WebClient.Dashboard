(function(){
    //Make sure strict mode is on
    'use strict';
    
    /**
     * Created by domin on 21.02.2017.
     */
    Ext.define('Dashboard.view.organisation.Settings', {
        extend: 'Ext.tab.Panel',

        xtype: 'orgsettings',

    requires: [
        'Dashboard.view.organisation.BasicInfo',
        'Dashboard.view.organisation.Payments',
        'Dashboard.view.organisation.SettingsController',
        'Dashboard.view.organisation.SettingsModel',
        'Dashboard.view.organisation.Stats'
    ],

    controller: 'orgsettings',
        viewModel: {
            type: 'orgsettings'
        },


        header: false,

        items: [
            {
                xtype: 'orgbasicinfo',
                reference: 'basicinfo',
                bind: {
                    title: '{localisation.basicinfo}'
                },
                iconCls: 'x-i54c i54c-globe-2'
            },
            {
                xtype: 'orgpayments',
                reference: 'payments',
                bind: {
                    title: '{localisation.payments}'
                },
                iconCls: 'x-i54c i54c-dollar-2'
            },
            {
                xtype: 'orgstats',
                reference: 'stats',
                bind: {
                    title: '{localisation.stats}'
                },
                iconCls: 'x-li li-graph'
            }

        ]
    });
    
}());

    