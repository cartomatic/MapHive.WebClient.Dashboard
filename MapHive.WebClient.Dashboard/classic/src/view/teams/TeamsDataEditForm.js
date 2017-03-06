//Disable some of the JSLint warnings
/*global window,console,Ext*/
(function(){
    //Make sure strict mode is on
    'use strict';

    Ext.define('Dashboard.view.teams.TeamsDataEditForm', {

        extend: 'Dashboard.view.teams.TeamsDataViewForm',
    
        xtype: 'teams-data-edit-form',

        viewModel: {
            type: 'teams-data-edit-form'
        },

        controller: 'teams-data-edit-form',

    requires: [
        'Dashboard.view.teams.TeamsDataEditFormController',
        'Dashboard.view.teams.TeamsDataEditFormModel'
    ]
});

}());