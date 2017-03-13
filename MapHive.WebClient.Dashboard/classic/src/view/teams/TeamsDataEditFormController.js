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

            var me = this;

            this.callMeParent('init', arguments);
            this.injectLocalisationToViewModel();

            //enable input fields - this view inherits from a display only view
            this.lookupReference('name').setReadOnly(false);
            this.lookupReference('description').setReadOnly(false);

            this.lookupReference('links_users').setEditable();
            this.lookupReference('links_apps').setEditable();

            //make sure to activate the widgets, so they become clickable
            Ext.Array.each(this.lookupReference('links_apps').getColumns(), function(c){
                if(c.reference === 'isAppAdmin'){
                    c.onWidgetAttach = function(col, widget, rec){
                        //set backref, so it's easy to find it later
                        widget.rec = rec;
                        widget.setReadOnly(false);

                        widget.un('change', me.onIsAdminWidgetCheckChange, me);
                        widget.on('change', me.onIsAdminWidgetCheckChange, me);
                    }
                    return false;
                }
            });
        },

        /**
         * is admin widget check chaange handler - makes sure the data is appropriately set on a rec
         * @param widget
         */
        onIsAdminWidgetCheckChange: function(widget){

            if(!widget.rec){
                return;
            }

            //Note:
            //linkData.app_access_credentials.app_admin_access - property names defined in MapHive.Server.Core.DataModel.Team

            var linkData = widget.rec.get('linkData') || {};

            linkData.app_access_credentials = linkData.app_access_credentials || {};

            linkData.app_access_credentials.app_admin_access = widget.getValue();

            widget.rec.set('linkData', linkData);
        },

        /**
         * makes sure the links are collected prior to saving!
         */
        save: function () {
            this.addLinksDiff(
                this.lookupReference('links_users').getChanges(),
                this.getAppLinksData()
            );

            //finally save
            this.callMeParent('save', arguments);
        },

        /**
         * gets the apps links with their extra data
         */
        getAppLinksData: function(){
            var links = this.lookupReference('links_apps').getChanges(true), //true is to read the data whether or not the links were modified
                linkedObjects = this.lookupReference('links_apps').getLinkedObjects(),
                getLinkData = function(uuid){
                    var linkData;
                    Ext.Array.each(linkedObjects, function(l){
                        if(l.get('uuid') === uuid){
                            linkData = l.get('linkData');
                            return false;
                        }
                    });
                    return linkData || {};
                };

            Ext.Array.each(links.upsert, function(l){
                l.linkData = getLinkData(l.childUuid);
            });

            return links;
        }


    });

}());