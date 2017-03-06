//Disable some of the JSLint warnings
/*global window,console,Ext*/
(function(){
    //Make sure strict mode is on
    'use strict';

    Ext.define('Dashboard.view.teams.TeamsDataViewForm', {
        extend: 'Ext.container.Container',
    
        xtype: 'teams-data-view-form',

    requires: [
        'Ext.form.field.Checkbox',
        'Ext.form.field.Text',
        'Ext.layout.container.Form',
        'Ext.layout.container.VBox',
        'mh.mixin.ApiMap',
        'mh.module.dataView.LinksGrid'
    ],

    layout: {
            type: 'vbox',
            align: 'stretch'
        },
        items: [
            {
                layout: 'form',
                border: false,
                items: [
                    {
                        xtype: 'textfield',
                        reference: 'name',
                        bind: {
                            fieldLabel: '{localisation.name}',
                            value: '{rec.name}'
                        },
                        readOnly: true
                    },
                    {
                        xtype: 'textfield',
                        reference: 'description',
                        bind: {
                            fieldLabel: '{localisation.description}',
                            value: '{rec.description}'
                        },
                        readOnly: true
                    }
                ]
            }
        ]
    });

}());