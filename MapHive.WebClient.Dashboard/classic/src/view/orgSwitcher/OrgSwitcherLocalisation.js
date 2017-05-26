(function(){
    //Make sure strict mode is on
    'use strict';
    
    /**
     * Created by domin on 01.04.2017.
     */
    Ext.define('Dashboard.view.orgSwitcher.OrgSwitcherLocalisation', {
        requires: [
            'mh.localisation.Localisation'
        ],
        statics: {
            localisation: {
                btnAddOrg: {
                    en: 'Create new organisation',
                    pl: 'Nowa organizacja'
                }
            }
        }
    }, function(){
        mh.localisation.Localisation.registerTranslations(this);
    });

}());