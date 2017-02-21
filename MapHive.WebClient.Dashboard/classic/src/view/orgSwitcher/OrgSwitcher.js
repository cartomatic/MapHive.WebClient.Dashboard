(function(){
    //Make sure strict mode is on
    'use strict';
    
    /**
     * Created by domin on 21.02.2017.
     */
    Ext.define('Dashboard.view.orgSwitcher.OrgSwitcher', {
        extend: 'Ext.button.Split',
    
        xtype: 'orgswitcher',

    requires: [
        'Dashboard.view.orgSwitcher.OrgSwitcherController',
        'Dashboard.view.orgSwitcher.OrgSwitcherModel'
    ],

    controller: 'orgswitcher',
        viewModel: {
            type: 'orgswitcher'
        },

        menuAlign: 'tr-br?',
        //arrowVisible: false,

        bind: {
            text: '{currentOrgName}'
        },

        scale: 'large',
        ui: 'orgswitcher-button',

        iconCls: 'x-i54c i54c-globe-2',

        height: 70,

        menu: {
            items: []
        },

        listeners: {
            click: 'onUserOrgsBtnClick'
        }

    });
    
}());

    