//Disable some of the JSLint warnings
/*global window,console,Ext*/
(function(){
    //Make sure strict mode is on
    'use strict';

    Ext.define('Dashboard.view.teams.TeamsDataViewForm', {
        extend: 'Ext.container.Container',
    
        xtype: 'teams-data-view-form',

    requires: [
        'Dashboard.view.applications.Applications',
        'Ext.form.field.Checkbox',
        'Ext.form.field.Text',
        'Ext.grid.column.Widget',
        'Ext.layout.container.Form',
        'Ext.layout.container.VBox',
        'Ext.tab.Panel',
        'mh.data.model.Application',
        'mh.data.model.User',
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
            },
            {
                xtype: 'tabpanel',
                flex: 1,
                items: [
                    {
                        xtype: 'mh-links-grid',
                        reference: 'links_users',
                        iconCls: 'x-li li-users2',
                        ddGroup: 'team-users',
                        flex: 1,
                        bind: {
                            context: '{rec}',
                            title: '{localisation.teamUsers}'
                        },
                        model: 'mh.data.model.User',
                        apiUrl: mh.mixin.ApiMap.getApiEndPoint('teamUsers'),

                        //this will defer the links picker refresh, so there is enough time to adjust the url appropriately
                        deferLinksPickerRefresh: true,

                        //this could be a class name too. but configuring it manually here
                        dataView: {
                            //xtype causes sencha plugin in webstorm add to requires arr, and then loader encounters circular ref...
                            type: 'users',
                            form: false,
                            hideGridHeader: true, //hide grid header
                            autoLoad: false, //so can reload this when decided

                            //because this is a view withing a links grid,
                            avoidAutoReloadOnOrgContextChange: true
                        },
                        columns: [
                            {
                                bind: {text: '{localisation.email}'},
                                dataIndex: 'email',
                                flex: 1
                            },
                            {
                                bind: {text: '{localisation.forename}'},
                                dataIndex: 'forename',
                                flex: 1
                            },
                            {
                                bind: {text: '{localisation.surname}'},
                                dataIndex: 'surname',
                                flex: 1
                            }
                        ]
                    },
                    {
                        xtype: 'mh-links-grid',
                        reference: 'links_apps',
                        iconCls: 'x-i54 i54-multy-task-2',
                        ddGroup: 'team-apps',
                        flex: 1,
                        bind: {
                            context: '{rec}',
                            title: '{localisation.teamApps}'
                        },
                        model: 'mh.data.model.Application',
                        apiUrl: mh.mixin.ApiMap.getApiEndPoint('teamApps'),

                        //this will defer the links picker refresh, so there is enough time to adjust the url appropriately
                        deferLinksPickerRefresh: true,

                        //this could be a class name too. but configuring it manually here
                        dataView: {
                            //xtype causes sencha plugin in webstorm add to requires arr, and then loader encounters circular ref...
                            type: 'applications',
                            form: false,
                            hideGridHeader: true, //hide grid header
                            autoLoad: false, //so can reload this when decided

                            //because this is a view withing a links grid,
                            avoidAutoReloadOnOrgContextChange: true
                        },
                        columns: [
                            {
                                bind: {text: '{localisation.name}'},
                                dataIndex: 'name',
                                flex: 1
                            },
                            {
                                xtype: 'widgetcolumn',
                                widget: {
                                    xtype: 'checkbox',
                                    readOnly: true
                                },
                                bind: {text: '{localisation.isAppAdmin}'},
                                dataIndex: 'isAppAdmin',
                                width: 60
                            }
                        ]
                    }
                ]
            }
        ]
    });

}());