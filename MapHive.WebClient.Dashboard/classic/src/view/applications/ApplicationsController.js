//Disable some of the JSLint warnings
/*global window,console,Ext*/
(function(){
    //Make sure strict mode is on
    'use strict';

    Ext.define('Dashboard.view.applications.ApplicationsController', {
        extend: 'mh.module.dataView.applications.ApplicationsController',
        alias: 'controller.applications',

    requires: [
        'Dashboard.view.applications.ApplicationsLocalisation'
    ],

    mixins: [
            'mh.mixin.Localisation',
            'mh.mixin.CallMeParent',
            'mh.mixin.DataViewOrgCtxUtils'
        ],

        /**
         * Called when the view is created
         */
        init: function() {
            this.callMeParent('init', arguments);

            this.setUpOrgContextHandlers('organisationLinkableApps');
        }
    });

}());