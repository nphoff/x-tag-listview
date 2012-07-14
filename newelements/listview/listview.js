(function(){
	var openLink = function (e,that) {
	    window.location = that.getAttribute('href');	
	};
        var g_yPosBegin;
        var yPositionBeginClick = function(e){
	    g_yPosBegin = e.screenY;
	};
        var yPositionEndClick = function(e){
	    var offset = 30;	
	    var that = this;
	    if((g_yPosBegin <= e.screenY + offset) && (g_yPosBegin >= e.screenY - offset)){ 
		openLink(e,that);
	    }
	};
        xtag.register('x-listview', {
        });
	xtag.query('li a', {
	    events: {
		'mousedown': yPositionBeginClick,
		'mouseup': yPositionEndClick
	    }
	});
})();
