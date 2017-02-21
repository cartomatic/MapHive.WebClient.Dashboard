//Disable some of the JSLint warnings
/*global window,console,Ext*/
(function(){
    //Make sure strict mode is on
    'use strict';

    /**
     *
     */
    Ext.define('Dashboard.view.main.MainController', {
        extend: 'mh.module.sideNav.SideNavController',
        alias: 'controller.viewport',

        mixins: [
            'mh.mixin.CallMeParent',
            'mh.mixin.Localisation',
            'mh.communication.MsgBus'
        ],

    requires: [
        'Dashboard.view.main.MainLocalisation',
        'Dashboard.view.orgSwitcher.OrgSwitcher',
        'Ext.button.Button',
        'Ext.panel.Panel',

        'Dashboard.view.dashboard.Dashboard',
        'Dashboard.view.people.People',
        'Dashboard.view.organisation.Settings'
    ],

    init: function(){
            this.callMeParent('init', arguments);

            //need to inject an org switcher btn just above the tree list
            this.lookupReference('sidePanel').insert(0,{
                xtype: 'orgswitcher'
            });
        },

        /**
         * Prepares the menu data for the navigation tree list
         * @returns {*[]}
         */
        prepareMenuData: function() {
            //Note: this can be data driven and based on the serverside roles / permissions configuration
            return [
                {
                    text: this.getTranslation('dashboard'),
                    iconCls: 'x-i54 i54-analitics',
                    view: 'Dashboard.view.dashboard.Dashboard',
                    viewReference: 'dashboard',
                    routes: [
                        'dashboard'
                    ],
                    leaf: true
                },
                {
                    text: this.getTranslation('people'),
                    iconCls: 'x-li li-users',
                    view: 'Dashboard.view.people.People',
                    viewReference: 'people',
                    routes: [
                        'people',
                        'people/:subView'
                    ],
                    leaf: true
                },
                {
                    text: this.getTranslation('organisation_settings'),
                    iconCls: 'x-i54c i54c-globe-4',
                    view: 'Dashboard.view.organisation.Settings',
                    viewReference: 'organisation',
                    routes: [
                        'organisation',
                        'organisation/:subView'
                    ],
                    leaf: true
                }
            ];
        }
    });

}());