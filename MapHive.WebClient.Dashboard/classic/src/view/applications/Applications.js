//Disable some of the JSLint warnings
/*global window,console,Ext*/
(function(){
    //Make sure strict mode is on
    'use strict';

    Ext.define('Dashboard.view.applications.Applications', {
        extend: 'mh.module.dataView.applications.Applications',

    requires: [
        'Dashboard.view.applications.ApplicationsController',
        'Dashboard.view.applications.ApplicationsModel',
        'Ext.grid.filters.Filters'
    ],

    xtype: 'applications',

        viewModel: {
            type: 'applications'
        },
    
        controller: 'applications',

        hideGridHeader: true,
        hideFormHeader: true,
        autoLoad: false,

        preventEdit: true,

        grid: {
            xtype: 'grid',
            plugins: 'gridfilters',
            bind: {store: '{gridstore}'},
            border: false,
            columns: {
                items: [
                    {
                        bind: {text: '{localisation.name}'},
                        dataIndex: 'name',
                        flex: 1,
                        filter: {
                            type: 'string'
                        }
                    }
                ]
            }
        }
    });

}());