(function(){
    //Make sure strict mode is on
    'use strict';
    
    /**
     * Created by domin on 21.02.2017.
     */
    Ext.define('Dashboard.view.organisation.Stats', {
        extend: 'Ext.panel.Panel',
    
        xtype: 'orgstats',

        items: [
        ],

        bodyPadding: 20,
        html: 'This is gonna be org stats view. Will show all the organisation specific statics relevant to org owners / admins'
    });
    
}());

    