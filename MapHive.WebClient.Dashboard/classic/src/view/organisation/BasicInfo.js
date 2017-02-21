(function(){
    //Make sure strict mode is on
    'use strict';
    
    /**
     * Created by domin on 21.02.2017.
     */
    Ext.define('Dashboard.view.organisation.BasicInfo', {
        extend: 'Ext.panel.Panel',
    
        xtype: 'orgbasicinfo',

        items: [
        ],

        bodyPadding: 20,
        html: 'This is gonna be an org basic info view. Will show org data such as name, description, image, etc.'
    });
    
}());

    