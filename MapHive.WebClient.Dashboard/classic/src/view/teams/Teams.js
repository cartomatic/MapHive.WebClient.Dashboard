(function(){
    //Make sure strict mode is on
    'use strict';
    
    /**
     * Created by domin on 21.02.2017.
     */
    Ext.define('Dashboard.view.teams.Teams', {
        extend: 'Ext.panel.Panel',
    
        xtype: 'teams',

        items: [
            /* include child components here */
        ],

        bodyPadding: 20,

        html: 'This is gonna be a teams view<br/><br/>The idea here is a team groups users, but also grants them access to apps.<br/>So basically a team is a container for users and the apps they can use'
    });
    
}());

    