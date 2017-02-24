(function(){
    //Make sure strict mode is on
    'use strict';
    
    /**
     * Created by domin on 21.02.2017.
     */
    Ext.define('Dashboard.view.dashboard.DashboardController', {
        extend: 'Ext.app.ViewController',
        alias: 'controller.dboard',

        requires: [
            'Dashboard.view.dashboard.DashboardLocalisation'
        ],

        mixins: [
            'mh.mixin.CallMeParent',
            'mh.mixin.Localisation',
            'mh.mixin.UrlUtils',
            'mh.mixin.UserCfg',
            'mh.communication.MsgBus'
        ],

        /**
         * Called when the view is created
         */
        init: function() {
            this.callMeParent('init', arguments);

            this.injectLocalisationToViewModel();

            this.watchGlobal('org::changed', this.printInfo, this);

            //this will obtain the intial org info, as the changed evt may have already fired
            this.watchGlobal('org::context', function(orgCtx){
                this.printInfo(orgCtx.currentOrg);
            }, this, {single: true});
            this.fireGlobal('org::getcontext');
        },

        printInfo: function(org){
            var user = this.getCurrentUser();

            //inject some stuff to the body for the time being so it looks like something is dynamic...
            this.getView().setHtml(
                'This is a <b>DASHBOARD</b> app. It kicks automatically in when the ORGANIZATION context is known, but the APP is not specified.' +
                '<br/>This app requires authentication so whenever the app starts the user must be known.' +
                '<br>Dashboard view will show some information that is relevant to a user within a current organisation' +

                '<br/>' +
                'Currently authenticated user is: <b>' + user.email + ' (' + user.uuid + ')</b>' +

                '<br/>Current organisations scope is: <b>' + org.get('displayName') + ' (' + org.get('slug') + ')</b>'
            );
        }
    });
    
}());
    