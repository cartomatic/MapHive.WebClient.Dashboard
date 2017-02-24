(function(){
    //Make sure strict mode is on
    'use strict';
    
    /**
     * Created by domin on 21.02.2017.
     */
    Ext.define('Dashboard.view.people.People', {
        extend: 'Ext.tab.Panel',

        xtype: 'people',

    requires: [
        'Dashboard.view.people.PeopleController',
        'Dashboard.view.people.PeopleModel',
        'Dashboard.view.teams.Teams',
        'Dashboard.view.users.Users',
        'Ext.layout.container.Fit'
    ],

    controller: 'people',
        viewModel: {
            type: 'people'
        },

        header: false,

        items: [
            {
                xtype: 'users',
                reference: 'users',
                bind: {
                    title: '{localisation.users}'
                },
                iconCls: 'x-li li-users2'
            },
            {
                xtype: 'teams',
                reference: 'teams',
                bind: {
                    title: '{localisation.teams}'
                },
                iconCls: 'x-li li-group-work'
            }
        ]
    });
    
}());

    