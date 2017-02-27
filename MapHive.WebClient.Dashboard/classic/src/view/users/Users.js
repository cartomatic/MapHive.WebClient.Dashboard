//Disable some of the JSLint warnings
/*global window,console,Ext*/
(function(){
    //Make sure strict mode is on
    'use strict';

    Ext.define('Dashboard.view.users.Users', {
        extend: 'mh.module.dataView.DataViewBase',

        requires: [
            'Ext.grid.Panel',
            'Ext.grid.filters.Filters',
            'Dashboard.view.users.DataViewForm',
            'Dashboard.view.users.UsersController',
            'Dashboard.view.users.UsersModel'
        ],

        xtype: 'users',

        viewModel: {
            type: 'users'
        },
    
        controller: 'users',

        hideGridHeader: true,
        hideFormHeader: true,
        autoLoad: false,

        grid: {
            xtype: 'grid',
            border: false,
            plugins: 'gridfilters',
            bind: {store: '{gridstore}'},
            columns: [
                {
                    bind: {text: '{localisation.email}'},
                    dataIndex: 'email',
                    flex: 1,
                    filter: {
                        // required configs
                        type: 'string'
                    }
                }
            ]
        },
        gridIconCls: 'x-li li-users2',
        form: 'Dashboard.view.users.DataViewForm',
        //formWidth: 300,
        editForm: false
    });

}());