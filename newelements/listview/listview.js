xtag.register('x-listview', {
        events: {
	    'tap:delegate(x-li)': function(event){
		this.xtag.selectListElement();
	    },
	    'mousedown:delegate(x-li)': function(event){
		this.xtag.selectListElement();
	    },
});