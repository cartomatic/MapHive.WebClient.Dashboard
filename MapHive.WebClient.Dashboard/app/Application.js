(function(){
    //Make sure strict mode is on
    'use strict';
    
    /**
     * Just a customised generic app entry point
     */
    Ext.define('Dashboard.Application', {
        extend: 'mh.Application',

        requires: [
            'Dashboard.AppLauncher',
            'Dashboard.ApplicationLocalisation'
        ],

        mixins: [
            'mh.mixin.CallMeParent'
        ],

        //defaultToken : '',

        //global shared controllers - they fire up automatically
        controllers: [
            //default Root
            'mh.controller.Root',

            //default auth
            'mh.controller.Auth',

            'mh.controller.Organisation',

            //default splash
            'mh.controller.Splash'
        ],
        
        //here goes a custom app launcher class. If not overridden, it will default to mh.AppLauncher
        appLauncher: 'Dashboard.AppLauncher',

        /**
         * internal app launch procedure
         * @param cfg
         * @param cfg.userConfig
         * @param cfg.orgCtx
         */
        internalAppLaunch: function(cfg){

            //suppress aria warnings!
            Ext.ariaWarn = Ext.emptyFn;

            //tooltips
            Ext.QuickTips.init();


            //TODO - make sure the app can start - permissions and such...

            //first make sure the base does what's required! This will trigger the configured UI creation (AppLauncher)
            this.callMeParent('internalAppLaunch', arguments);


            //Now the post-launch setup

            //start the external route watcher - this will watch changes advised by a parent, and pass own changes to a parent
            this.fireGlobal('root::watchexternalroutes', {host: true});

        }

    });
}());