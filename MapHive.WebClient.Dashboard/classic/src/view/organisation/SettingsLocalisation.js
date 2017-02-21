(function(){
    //Make sure strict mode is on
    'use strict';
    
    /**
     * Created by domin on 21.02.2017.
     */
    Ext.define('Dashboard.view.organisation.SettingsLocalisation', {
        requires: [
            'mh.localisation.Localisation'
        ],
        statics: {
            localisation: {
                basicinfo: {
                    en: 'Basic info',
                    pl: 'Informacje podstawowe'
                },
                payments: {
                    en: 'Payments',
                    pl: 'Płatności'
                },
                stats: {
                    en: 'Stats',
                    pl: 'Statystyki'
                }
            }
        }
    }, function(){
        mh.localisation.Localisation.registerTranslations(this);
    });
    
}());

    