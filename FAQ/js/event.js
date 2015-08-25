////////////////////////////////////////////////////////////////////
////////////////////////////EVENT SECTION///////////////////////////
////////////////////////////////////////////////////////////////////

////////////////////////STICKY NAVIGATION//////////////////////////

$(document).ready(function() {
	var stickyNavTop = $('.nav').offset().top; //offset() gets the top coordinate of element(s) 
	 
	var stickyNav = function(){
		var scrollTop = $(window).scrollTop(); //.scrollTop() gets vertical position of scroll bar of element(s)
		      
		if (scrollTop > stickyNavTop) { 
		    $('.nav').addClass('sticky');
		} else {
		    $('.nav').removeClass('sticky'); 
		}
	};
	 
	stickyNav();
	 
	$(window).scroll(function() { //.scroll() event handler
	    stickyNav();
	});
});
