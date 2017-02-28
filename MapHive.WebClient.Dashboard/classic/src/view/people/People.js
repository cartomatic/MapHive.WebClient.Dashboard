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
        'Dashboard.view.people.PeopleLocalisation',
        'Dashboard.view.people.PeopleModel',
        'Dashboard.view.teams.Teams',
        'Dashboard.view.users.Users',
        'Ext.layout.container.Fit',
        'Ext.panel.Panel',
        'mh.localisation.Localisation'
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
                iconCls: 'x-li li-users2',

                //container does not bind title, and title is needed for the tab, hence a little hack...
                title: mh.localisation.Localisation.getTranslation('users', 'Dashboard.view.people.PeopleLocalisation')
            },
            {
                xtype: 'teams',
                reference: 'teams',
                iconCls: 'x-li li-group-work',

                //container does not bind title, and title is needed for the tab, hence a little hack...
                title: mh.localisation.Localisation.getTranslation('teams', 'Dashboard.view.people.PeopleLocalisation')
            }
        ]
    });
    
}());

    