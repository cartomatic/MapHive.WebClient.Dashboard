(function(){
    //Make sure strict mode is on
    'use strict';
    
    /**
     * Created by domin on 21.02.2017.
     */
    Ext.define('Dashboard.view.dashboard.DashboardLocalisation', {
        requires: [
            'mh.localisation.Localisation'
        ],
        statics: {
            localisation: {
                title: {
                    en: 'Dashboard',
                    pl: 'Dashboard'
                }
            }
        }
    }, function(){
        mh.localisation.Localisation.registerTranslations(this);
    });
    
}());

    