//Disable some of the JSLint warnings
/*global window,console,Ext*/
(function(){
    //Make sure strict mode is on
    'use strict';

    Ext.define('Dashboard.view.teams.Teams', {
        extend: 'mh.module.dataView.DataViewBase',

        requires: [
            'Ext.grid.Panel',
            'Ext.grid.filters.Filters',
            'Dashboard.view.teams.TeamsController',
            'Dashboard.view.teams.TeamsModel',
            'Dashboard.view.teams.TeamsDataViewForm',
            'Dashboard.view.teams.TeamsDataEditForm'
        ],

        xtype: 'teams',

        viewModel: {
            type: 'teams'
        },
    
        controller: 'teams',

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
                    bind: {text: '{localisation.name}'},
                    dataIndex: 'name',
                    flex: 1,
                    filter: {
                        // required configs
                        type: 'string'
                    }
                },
                {
                    bind: {text: '{localisation.description}'},
                    dataIndex: 'description',
                    flex: 1,
                    filter: {
                        // required configs
                        type: 'string'
                    }
                }
            ]
        },
        gridIconCls: 'x-li li-group-work',
        form: 'Dashboard.view.teams.TeamsDataViewForm',
        //formWidth: 300,
        editForm: 'Dashboard.view.teams.TeamsDataEditForm'
    });

}());