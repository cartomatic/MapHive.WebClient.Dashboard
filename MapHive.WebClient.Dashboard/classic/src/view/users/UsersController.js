//Disable some of the JSLint warnings
/*global window,console,Ext*/
(function(){
    //Make sure strict mode is on
    'use strict';

    Ext.define('Dashboard.view.users.UsersController', {
        extend: 'mh.module.dataView.users.UsersController',
        alias: 'controller.users',

    requires: [
        'Dashboard.view.users.UsersLocalisation',
        'Ext.button.Split',
        'mh.module.dataView.LinksPicker'
    ],

    mixins: [
            'mh.mixin.Localisation',
            'mh.mixin.CallMeParent',
            'Dashboard.mixin.DataViewOrgCtxUtils'
        ],

        /**
         * Called when the view is created
         */
        init: function() {
            this.callMeParent('init', arguments);

            //inject extra user add tools
            this.createAddUserUi();

            this.setUpOrgContextHandlers();
        },

        /**
         * creates UI for adding users to an organisation
         */
        createAddUserUi: function(){
            this.lookupReference('gridTbar').add(
                Ext.create('Ext.button.Split', {
                    text: this.getTranslation('btnAddUser'),
                    iconCls: 'x-li li-user-plus',
                    menuAlign: 'tr-br?',
                    arrowVisible: false,
                    menu: {
                        items: [
                            {
                                text: this.getTranslation('btnAddNewOrgUser'),
                                iconCls: 'x-li li-user-plus',
                                listeners: {
                                    click: 'onAddNewOrgUser'
                                }
                            },
                            {
                                text: this.getTranslation('btnAddUserFromCatalogue'),
                                iconCls: 'x-li li-users',
                                listeners: {
                                    click: 'onAddUserFromCatalogue'
                                }
                            }
                        ]
                    },
                    listeners: {
                        click: function(btn){
                            btn.showMenu();
                        }
                    }
                })
            );
        },

        /**
         * initiates a procedure of adding a new organisation user
         * @param btn
         */
        onAddNewOrgUser: function(btn){
            //just a new user, so a simple user details input should do
        },

        /**
         * @private {mh.module.dataView.LinksPicker} userLinksPicker
         */
        userLinksPicker: null,

        /**
         * initiates adding a user from a catalogue
         * @param btn
         */
        onAddUserFromCatalogue: function(btn){
            //need to display a window with a standard users links picker.
            if(!this.userLinksPicker){
                this.userLinksPicker = Ext.create('mh.module.dataView.users.Catalogue', {
                    animateTarget: btn
                });

                //need to get the data, huh?
                this.userLinksPicker.on('linkspicked', this.onLinksPicked, this);
            }

            this.userLinksPicker.show();
        },

        /**
         * linkspicked callback
         * @param records
         */
        onLinksPicked: function(records){

        }



    });

}());