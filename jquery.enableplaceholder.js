/**
 *
 * @Author Scott Campbell
 * @Website github.com/scottc/
 * @Version 1.1a
 *
 * Adding placeholder support for those browsers who don't support it yet.
 *
 */
 
(function( $ ){
	$.fn.enableplaceholder = function() {
		
		if('placeholder' in document.createElement('input')) return this;
		
		return this.each(function(){ var $this = $(this);
			//initalize
			$this.val($this.attr("placeholder"));
			 
			//focus event handlers
			$this.focus(function(){
				if($this.val() == $this.attr("placeholder"))
					$this.val("");
			}).blur(function(){
				if($this.val() == "")
					$this.val($this.attr("placeholder"));
			});
			
			//reset button fix
			$this.closest("form").bind("reset",function(){
				$this.val($this.attr("placeholder"));
				return false;
			});
		});
	};
})( jQuery );