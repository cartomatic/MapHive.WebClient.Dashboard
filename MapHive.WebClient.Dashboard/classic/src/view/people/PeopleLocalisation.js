(function(){
    //Make sure strict mode is on
    'use strict';
    
    /**
     * Created by domin on 21.02.2017.
     */
    Ext.define('Dashboard.view.people.PeopleLocalisation', {
        requires: [
            'mh.localisation.Localisation'
        ],
        statics: {
            localisation: {
                title: {
                    en: 'People',
                    pl: 'Użytkownicy'
                },
                users: {
                    en: 'Users',
                    pl: 'Użytkownicy'
                },
                teams: {
                    en: 'Teams',
                    pl: 'Grupy użytkowników'
                }
            }
        }
    }, function(){
        mh.localisation.Localisation.registerTranslations(this);
    });
    
}());

    