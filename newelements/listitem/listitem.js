//Credit for the x-li tag goes to Lisa Neigut.

(function(){

	var openLink = function (e) {
		window.location = this.getAttribute('href');	
	};
        var g_yPosBegin;
        var yPositionBeginClick = function(e){
	    g_yPosBegin = e.screenY;
	};
        var yPositionEndClick = function(e){
	    var offset = 30;
	    var biggerthan = (g_yPosBegin <= e.screenY + offset);
	    var lessthan = (g_yPosBegin >= e.screenY - offset);
	    if(biggerthan || lessthan ){
		openLink;
	    }
	};
	xtag.register('x-li', {
		events: {
		    'mousedown': yPositionBeginClick,
		    'mouseup': yPositionEndClick
		},
		
		onCreate : function(){
			var href = this.getAttribute('href');
			var a = document.createElement('a');
			this.style.cursor = 'pointer';
		        a.setAttribute('href', href);
			a.style.display='none';
			this.appendChild(a);
		        this.style.display = 'block';
		}
	    
	    });
})();
