//Disable some of the JSLint warnings
/*global window,console,Ext*/
(function(){
    //Make sure strict mode is on
    'use strict';

    /**
     *
     */
    Ext.define('Dashboard.view.main.MainController', {
        extend: 'Ext.app.ViewController',
        alias: 'controller.viewport',

        mixins: [
            'mh.mixin.CallMeParent',
            'mh.mixin.Localisation',
            'mh.mixin.UrlUtils',
            'mh.mixin.UserCfg'
        ],

        requires: [
            'Ext.panel.Panel',
            'Dashboard.view.main.MainLocalisation'
        ],

        init: function(){
            this.callMeParent('init', arguments);

            var user = this.getCurrentUser();

            //inject some stuff to the body for the time being so it looks like something is dynamic...
            this.getView().setHtml(
                'This is a <b>DASHBOARD</b> app. It kicks automatically in when the ORGANIZATION context is known, but the APP is not specified.' +
                '<br/>This app requires authentication so whenever the app starts the user must be known.' +
                '<br>Org\'s Dashboard will work in a few "modes":' +
                '<ul>' +
                    '<li>When no organisation context is known it will display a user\'s org dashboard</li>' +
                    '<li>When no organisation context is known and user has access to more than 1 org, some sort of overview / org picker will be presented</li>' +
                    '<li>When org context is known, the app will display organisation\' dashboard</li>' +
                '</ul>' +
                '<br/>' +
                'Currently authenticated user is: <b>' + user.email + ' (' + user.uuid + ')</b>' +
                '<br/>Current organisations scope detected in URL is: <b>' + (this.getUrlOrgIdentifier() || 'UNDEFINED') + '</b>' +
                '<br/>Note: org context as picked from URL needs verification as obviously it may be changed by hand'
            );
        }
    });

}());