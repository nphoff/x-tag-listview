(function(){

        xtag.register('x-listview', {
        });

        //The following code prevents a link from firing when touch scrolling, 
        //by tracking the vertical position of a click.
        var g_yPosBegin;
        var yPositionBeginClick = function(e){
            g_yPosBegin = e.screenY;
        };
        var yPositionEndClick = function(e){
            var offset = 30;	
            var that = this;
            if((g_yPosBegin <= e.screenY + offset) && (g_yPosBegin >= e.screenY - offset)){ 
                window.location = that.getAttribute('href');	
            }
        };
        xtag.query(this, 'li a', {
            events: {
                'mousedown': yPositionBeginClick,
                'mouseup': yPositionEndClick
            }
        });
})();
