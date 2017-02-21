(function(){
    //Make sure strict mode is on
    'use strict';
    
    /**
     * Created by domin on 21.02.2017.
     */
    Ext.define('Dashboard.view.orgSwitcher.OrgSwitcherController', {
        extend: 'Ext.app.ViewController',
        alias: 'controller.orgswitcher',

        mixins: [
            'mh.communication.MsgBus'
        ],

        /**
         * Called when the view is created
         */
        init: function() {
            this.watchGlobal('org::changed', this.onOrgChanged, this);

            //obtain orgs
            this.getUserOrgs();
        },

        /**
         * gets user orgs information
         */
        getUserOrgs: function(){
            var tunnel = this.getTunnelId();
            this.watchGlobal('org::context', this.orgCtxRetrieved, this, {single: true, tunnel: tunnel});
            this.fireGlobal('org::getcontext', null, {tunnel: tunnel});
        },

        /**
         * org ctx retrieved
         * @param orgCtx
         * @param orgCtx.userOrgs
         * @param orgCtx.currentOrg
         */
        orgCtxRetrieved: function(orgCtx){
            //here should have the current user org to put into the btn, and a list of orgs to put into the menu

            var vm = this.getViewModel();

            vm.set('currentOrg', orgCtx.currentOrg);
            vm.set('userOrgs', orgCtx.userOrgs);

            console.clear();
            console.warn('orgCtx.currentOrg', orgCtx.currentOrg);
            console.warn('orgCtx.userOrgs', orgCtx.userOrgs)

            this.updateOrgMenu();

        },

        /**
         * org changed reported from global orgs ctrl
         * @param org
         */
        onOrgChanged: function(org){
            this.getViewModel().set('currentOrg', org);
            this.updateOrgMenu();

            this.getView().enable();
        },

        /**
         * recreates the orgs btn menu
         */
        updateOrgMenu: function(){

            var btn = this.getView(),
                menu = btn.getMenu(),
                vm = this.getViewModel(),
                currentOrg = vm.get('currentOrg'),
                userOrgs = vm.get('userOrgs');


            //cleanup the menu
            menu.removeAll();

            //recreate the menu
            Ext.Array.each(userOrgs, function(org) {

                //skip the current org - it gets displayed in the button
                if(org === currentOrg){
                    return;
                }

                menu.add({
                    //maybe some icon for an org...
                    text: org.get('displayName') || org.get('slug'),
                    listeners: {
                        click: 'onBtnOrgChangeClick'
                    },
                    org: org
                });
            });

            menu.setWidth(btn.getWidth());
        },

        /**
         * btn change org handler
         * @param btn
         */
        onBtnOrgChangeClick: function(btn){
            if(btn.org !== this.getViewModel().get('currentOrg')){
                this.changeOrg(btn.org);
            }
        },

        /**
         * changes an organisation
         * @param org
         */
        changeOrg: function(org){
            if(!org){
                return;
            }

            this.fireGlobal('org::change', {
                org: org
            });
        },

        /**
         * user orgs btn click handler - displays a list of orgs user can access
         */
        onUserOrgsBtnClick: function(btn){
            //only show menu if user has access to some more orgs...
            if(btn.getMenu().items.items.length > 0){
                btn.showMenu();
            }
        }

    });
    
}());
    