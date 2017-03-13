//Disable some of the JSLint warnings
/*global window,console,Ext*/
(function(){
    //Make sure strict mode is on
    'use strict';

    Ext.define('Dashboard.view.applications.ApplicationsModel', {
        extend: 'mh.module.dataView.applications.ApplicationsModel',
        alias: 'viewmodel.applications',

    requires: [
        'mh.data.model.Application',
        'mh.data.proxy.Rest',
        'mh.mixin.ApiMap'
    ],

    stores: {
            gridstore:{
                model: 'mh.data.model.Application',
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