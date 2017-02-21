
(function(){
    //Make sure strict mode is on
    'use strict';
    
    /**
     * Created by domin on 21.02.2017.
     */
    Ext.define('Dashboard.view.orgSwitcher.OrgSwitcherModel', {
        extend: 'Ext.app.ViewModel',
        alias: 'viewmodel.orgswitcher',
    
        stores: {
        },

        data: {
            currentOrg: null
        },

        formulas: {
            currentOrgName: {
                bind: {
                    bindTo: '{currentOrg}',
                    deep: true
                },
                get: function(currentOrg){
                    return currentOrg ? currentOrg.get('displayName') || currentOrg.get('slug') : '';
                }
            }
        }
    });
    
}());

    