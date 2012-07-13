//Credit for the x-li tag goes to Lisa Neigut.

(function(){

	var openLink = function (e) {
		window.location = this.getAttribute('href');	
	};
	xtag.register('x-li', {
		events: {
		    'touchstart': openLink
		},
		
	        methods: {
		    selectListElement: function(){
			this.style.background-color="yellow";
		    }
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
