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
        'mh.module.dataView.LinksPicker',
        'mh.module.loadMask.LoadMask'
    ],

    mixins: [
            'mh.mixin.Localisation',
            'mh.mixin.CallMeParent',
            'mh.mixin.DataViewOrgCtxUtils'
        ],

        /**
         * Called when the view is created
         */
        init: function() {
            this.callMeParent('init', arguments);

            //inject extra user add tools
            this.createAddUserUi();

            this.setUpOrgContextHandlers();

            this.customiseDataViewForm();

            this.lookupReference('grid').on('selectionchange', this.onGridSelectionChanged, this);
        },

        /**
         * customises the dataview behavior on grid selection change; hides some fields to make more sensible presentation
         * @param grid
         * @param selected
         * @param eOpts
         */
        onGridSelectionChanged: function(grid, selected, eOpts){
            var visibleInCatalogue = this.lookupReference('visibleInCatalogue');
            visibleInCatalogue.setVisible(selected && selected.length === 1 && this.isOwnUser(selected[0]));
        },

        /**
         * whether or not user is an own org user
         * @param rec
         * @returns {boolean}
         */
        isOwnUser: function(rec){
            return rec.get('isOrgUser') && rec.get('parentOrganisationId') === this.getCurrentOrgId();
        },

        /**
         * creates UI for adding users to an organisation
         */
        createAddUserUi: function(){
            this.lookupReference('gridTbar').insert(3,
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
            this.lookupReference('gridTbar').insert(4,'-');
        },

        /**
         * initiates a procedure of adding a new organisation user
         * @param btn
         */
        onAddNewOrgUser: function(btn){
            //new org user - redirect to the standard editor!
            this.onBtnCreateClick(btn);
        },

        /**
         * @private {mh.module.dataView.LinksPicker} userLinksPicker
         */
        userLinksPicker: null,

        /**
         * gets an instance of a user links picker
         * @returns {mh.module.dataView.LinksPicker}
         */
        getUserLinksPicker: function(btn){
            //need to display a window with a standard users links picker.
            if(!this.userLinksPicker){
                this.userLinksPicker = Ext.create('mh.module.dataView.users.Catalogue', {});

                //need to get the data, huh?
                this.userLinksPicker.on('linkspicked', this.onLinksPicked, this);
            }

            if(btn){
                this.userLinksPicker.animateTarget = btn;
            }

            return this.userLinksPicker;
        },

        /**
         * initiates adding a user from a catalogue
         * @param btn
         */
        onAddUserFromCatalogue: function(btn){
            this.getUserLinksPicker(btn).show();
        },

        /**
         * linkspicked callback
         * @param records
         */
        onLinksPicked: function(records){
            this.getUserLinksPicker().hide();
            this.fireGlobal('loadmask::show', this.getTranslation('linkUserMask'));

            //note: there should be only one rec for a starter.

            var cfg = {
                    url: this.getApiEndPoint('organisationUsersLink').replace(this.getParentIdentifier(), this.getCurrentOrgId()),
                    params: records[0].getData(),
                    success: this.onLinkUserSuccess,
                    failure: this.onLinkUserFailure,
                    scope: this,
                    exceptionMsg: this.getTranslation('linkUserFailure')
                },
                me = this,
                fn = function(){
                    me.doPost(cfg);
                };

            cfg.retry = fn;

            fn();
        },

        /**
         * user linked successfully
         * @param response
         */
        onLinkUserSuccess: function(response){
            this.fireGlobal('loadmask::hide');
            this.reloadGrid();
        },

        /**
         * handles user failed link
         */
        onLinkUserFailure: function(){
            this.fireGlobal('loadmask::hide');
        },

        viewFormFieldsToHide: ['slug', 'isAccountClosed', 'isAccountVerified', 'gravatarEmail', 'isOrgUser'],

        /**
         * customises the appearance of the data view form
         */
        customiseDataViewForm: function(){
            Ext.Array.each(this.viewFormFieldsToHide, function(ref){
                this.lookupReference(ref).hide();
            }, this);

            //also initially hide visibleInCatalogue; this will be shown depending on data
            this.lookupReference('visibleInCatalogue').hide();
        },

        /**
         * @private
         * whether or not the editor has already been customised
         */
        editorCustomised: false,

        /**
         * customises and returns the editor module;
         * customisation pretty much removes the fields that should not be shown
         * @param btn
         */
        getEditor: function(btn){
            var editor = this.callMeParent('getEditor', arguments);

            if(!this.editorCustomised){
                Ext.Array.each(this.viewFormFieldsToHide, function(ref){
                    editor.getForm().lookupReference(ref).hide();
                }, this);
                this.editorCustomised = true;
            }

            return editor;
        },

        /**
         * customises the user create - adjusts the api url
         * @param btn
         */
        onBtnCreateClick: function(btn) {

            //call the base
            this.callMeParent('onBtnCreateClick', arguments);

            //and make sure to customise the rec content but also the editor itself!
            var editor = this.getEditor();

            editor.getRecord().set('company', this.getCurrentOrgNameOrSlug());
            editor.getForm().setCustomUrl(
                this.getApiEndPoint('organisationUsers').replace(this.getParentIdentifier(), this.getCurrentOrgId())
            );
        },

        /**
         * btn edit behavior customisation; org users will be editable the usual way; it will only be possible to change role for a foreign users
         * @param btn
         */
        onBtnEditClick: function(btn){
            //need to verify the rec first to check if a user is an org user
            var recs = this.lookupReference('grid').getSelection() || [],
                rec;

            if(recs.length === 1){
                rec = recs[0];

                if(this.isOwnUser(rec)){
                    //own user, so just use the default
                    this.callMeParent('onBtnEditClick', arguments);

                    //and make sure to customise the rec content but also the editor itself!
                    var editor = this.getEditor();

                    editor.getRecord().set('company', this.getCurrentOrgNameOrSlug());
                    editor.getForm().setCustomUrl(
                        this.getApiEndPoint('organisationUsers').replace(this.getParentIdentifier(), this.getCurrentOrgId())
                    );
                }
                else {
                    alert('TODO - not own user, so will just allow role edit.');
                }
            }
        },

        /**
         * customises the behavior of delete so can handle both - own and external users
         * @param btn
         */
        onBtnDeleteClick: function(btn){
            var recs = this.lookupReference('grid').getSelection() || [],
                rec;

            if(recs.length === 1){
                if(this.isOwnUser(rec)){
                    //own user, so just use the default
                    this.callMeParent('onBtnEditClick', arguments);
                }
                else {
                    alert('TODO - not own user, so will just unlink from org.');
                }
            }
        }
    });

}());