//Disable some of the JSLint warnings
/*global window,console,Ext*/
(function(){
    //Make sure strict mode is on
    'use strict';

    Ext.define('Dashboard.view.users.Users', {
        extend: 'mh.module.dataView.users.Users',

        requires: [
            'Ext.grid.Panel',
            'Ext.grid.filters.Filters',
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

        //hide the default create tools
        preventCreate: true
    });

}());