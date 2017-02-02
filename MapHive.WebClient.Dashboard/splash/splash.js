/**
 * A splashscreen used to give users a visual feedback while the app scripts are being loaded
 */

/*global Ext*/

var splash = (function() {

    //Make sure strict mode is on
    'use strict';

    var Splash = function(){
        var
            getHtml = function(){
                var html =
                    '<div id="splash-screen-container">' +
                        '<div id="splash-screen-mask"></div>' +
                        '<div id="load-info-container">' +
                            // '<span style="position: relative; top: 50%;transform: translateY(-50%);">' +
                            //     'Loading...' +
                            // '</span>' +
                            '<div class="cssload-whirlpool"></div>' +
                        '</div>' +
                    '</div>';

                return html;
            },
            hidden = false;

        this.init = function(){
            //suppress splash if required.
            if(window.location.href.indexOf('suppress-splash:true') > -1){
                this.hidden = true;
            }
            else {
                //emit html to dom
                document.write(getHtml());
            }
        };

        this.hide = function(){
            if(!this.hidden){
                this.hidden = true;
                clearTimeout(this.autoUpdateSchedule);
                var ssc = Ext.get('splash-screen-container');
                if(ssc.fadeOut){
                    ssc.fadeOut({duration: 1000, remove: true});
                }
                else {
                    ssc.destroy();
                }
            }
        };
    };

    return new Splash();
}());

//init the splash screen after the script has been loaded
splash.init();