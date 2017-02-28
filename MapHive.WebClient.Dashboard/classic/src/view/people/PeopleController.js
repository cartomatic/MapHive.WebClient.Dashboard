(function(){
    //Make sure strict mode is on
    'use strict';
    
    /**
     * Created by domin on 21.02.2017.
     */
    Ext.define('Dashboard.view.people.PeopleController', {
        extend: 'Ext.app.ViewController',
        alias: 'controller.people',

    requires: [
        'Dashboard.view.people.PeopleLocalisation',
        'Ext.toolbar.Fill'
    ],

    mixins: [
            'mh.mixin.Localisation',
            'mh.mixin.CallMeParent',
            'mh.mixin.RouteUtils'
        ],

        routes: {
            'people': 'onViewKickIn',
            'people/:subView': 'onViewKickIn'
        },

        mainRoute: 'people',

        /**
         * Called when the view is created
         */
        init: function() {
            this.callMeParent('init', arguments);
            this.injectLocalisationToViewModel();

            //this should center the tabs
            var tabBar = this.getView().getTabBar();
            tabBar.insert(0, Ext.create('Ext.toolbar.Fill'));
            tabBar.add(Ext.create('Ext.toolbar.Fill'));

            //this is a startup, so need to grab the route manually and feed it into the route handler for the view...
            this.getView().on('afterrender', function(){
                //this is init. and there is a chance the view has been created dynamically just after a route has been recognised
                //make sure to force route execution again this one time
                if(window.location.hash.indexOf(this.mainRoute) > -1){
                    this.redirectTo(window.location.hash.substring(1), true);
                }
            }, this);

            //tabs should have their routes too; routes are based on their refs
            this.getView().on(
                'tabchange',
                function(panel, newCard, oldCard){
                    window.location.hash = this.mainRoute + '/' + newCard.reference;
                },
                this
            );
        },

        /**
         * Dbl checks if a view that is requested can be handled and turns it on if so. Otherwise it redirects to the app's default view
         * @param view
         */
        onViewKickIn: function(subView){
            var view = this.lookupReference(subView);
            if(!view){
                view = this.getView().items.items[0];
            }

            if(view){
                this.getView().getLayout().setActiveItem(view);
            }
            else {
                //okey dokey, this is an unmatched route after all, so redirect to a default route
                this.redirectToDefaultRoute();
            }
        }
    });
    
}());
    