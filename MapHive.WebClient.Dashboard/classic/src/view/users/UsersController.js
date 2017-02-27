//Disable some of the JSLint warnings
/*global window,console,Ext*/
(function(){
    //Make sure strict mode is on
    'use strict';

    Ext.define('Dashboard.view.users.UsersController', {
        extend: 'mh.module.dataView.DataViewBaseController',
        alias: 'controller.users',

        requires: [
            'Dashboard.view.users.UsersLocalisation'
        ],

        mixins: [
            'mh.mixin.Localisation',
            'mh.mixin.CallMeParent',
            'mh.mixin.GridUtils',
            'mh.mixin.ApiMap'
        ],

        /**
         * Called when the view is created
         */
        init: function() {
            this.callMeParent('init', arguments);

            this.setUpOrgContextHandlers();
        },

        /**
         * sets up org context related functionality, so a view can adjust its content based on the scoped organisation
         */
        setUpOrgContextHandlers: function(){
            //observing layout evts is the way to know when this comp has been shown
            this.getView().on('activate', this.onViewShow, this);
            this.getView().on('deactivate', this.onViewHide, this);

            this.watchGlobal('org::changed', this.onOrgChanged, this);
        },

        /**
         * whether or not the component is visible;
         * IMPORTANT - must be able to observe its own activate / deactivate events! levels of nesting do have importance!
         */
        visible: false,

        /**
         * view deactivate callback; just flags self internally as hidden
         */
        onViewHide: function(){
            this.visible = false;
        },

        /**
         * timeout identifier for the internal view show callback
         */
        internalViewShowScheduler: null,

        /**
         * afterlayout callback handler; triggers store reloads and such
         */
        onViewShow: function(){
            this.visible = true;

            //get the org, work out the store url and update store's proxy
            var tunnel = this.getTunnelId();
            this.watchGlobal('org::context', this.orgCtxRetrieved, this, {single: true, tunnel: tunnel});
            this.fireGlobal('org::getcontext', null, {tunnel: tunnel});
        },

        /**
         * org changed callback
         * @param org
         */
        onOrgChanged: function(org){
            this.reloadStore(org);
        },

        /**
         * tunnelled org::getcontext callback
         * @param orgCtx
         */
        orgCtxRetrieved: function(orgCtx){
            this.reloadStore(orgCtx.currentOrg);
        },

        /**
         * last store url used to load the data
         */
        lastDataUrl: null,

        /**
         * reloads the store for given org
         * @param org
         */
        reloadStore: function(org){

            if(!this.visible){
                return;
            }

            var newUrl = this.getApiEndPoint('organisationUsers').replace(this.getApiMapParentIdentifier(), org.get('uuid'));
            if(newUrl != this.lastDataUrl){
                this.lastDataUrl = newUrl;

                this.getViewModel().get('gridstore').getProxy().setUrl(newUrl);
                this.reloadGrid();
            }
        }

    });

}());