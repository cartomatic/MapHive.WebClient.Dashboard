//Disable some of the JSLint warnings
/*global window,console,Ext*/
(function(){
    //Make sure strict mode is on
    'use strict';

    Ext.define('Dashboard.view.teams.TeamsDataEditFormController', {
        extend: 'mh.module.dataView.GenericEditFormController',
        alias: 'controller.teams-data-edit-form',

        requires: [
            'Dashboard.view.teams.TeamsDataEditFormLocalisation'
        ],

        mixins: [
            'mh.mixin.Localisation',
            'mh.mixin.CallMeParent'
        ],

        /**
         * Called when the view is created
         */
        init: function() {
            this.callMeParent('init', arguments);
            this.injectLocalisationToViewModel();

            //enable input fields - this view inherits from a display only view
            this.lookupReference('name').setReadOnly(false);
            this.lookupReference('description').setReadOnly(false);

            this.lookupReference('links_users').setEditable();
        },

        /**
         * makes sure the links are collected prior to saving!
         */
        save: function () {
            this.addLinksDiff(
                this.lookupReference('links_users').getChanges()
            );

            //finally save
            this.callMeParent('save', arguments);
        },


    });

}());