//Disable some of the JSLint warnings
/*global window,console,Ext*/
(function(){
    //Make sure strict mode is on
    'use strict';

    Ext.define('Dashboard.view.teams.TeamsModel', {
        extend: 'mh.module.dataView.DataViewBaseModel',
        alias: 'viewmodel.teams',

    requires: [
        'mh.data.model.Team',
        'mh.data.proxy.Rest'
    ],

    stores: {
            gridstore:{
                model: 'mh.data.model.Team',
                data: [],
                //Note: autoLoad, remoteSort, remoteFilter is automatically set to true in the dataview base and override whatever may be set here
                //initially sort users on accountClosed
                sorters: [
                    {
                        property: 'name', direction: 'ASC'
                    }
                ],
                proxy: {
                    type: 'mhrest',
                    url: 'to-be-changed-in-runtime'
                }
            }
        }
    });

}());