//Disable some of the JSLint warnings
/*global window,console,Ext*/
(function(){
    //Make sure strict mode is on
    'use strict';

    Ext.define('Dashboard.view.teams.TeamsController', {
        extend: 'mh.module.dataView.DataViewBaseController',
        alias: 'controller.teams',

        requires: [
            'Dashboard.view.teams.TeamsLocalisation'
        ],

        mixins: [
            'mh.mixin.Localisation',
            'mh.mixin.CallMeParent',
            'mh.mixin.GridUtils',
            'mh.mixin.DataViewOrgCtxUtils'
        ],

        /**
         * Called when the view is created
         */
        init: function() {
            this.callMeParent('init', arguments);

            this.setUpOrgContextHandlers('organisationTeams');
        }
    });

}());