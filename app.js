var myFullpage = new fullpage('#fullpage', {
    scrollBar: true,
    anchors: ['home', 'about', 'experience', 'projects'],

    afterLoad: function(origin, destination, direction) {
        if(destination.anchor == 'about') {

        }
    }
});
