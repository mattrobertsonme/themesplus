$(document).ready(function() {
	
/* -----------------------------------------------------------------------------
	
	=OPEN AND CLOSE MODIFY WINDOW
  
----------------------------------------------------------------------------- */
	
	// CLOSE WINDOW 
	$("#closeWindow").click(function () {
    	$('footer').addClass('move-out');
    });
	
	// OPEN WINDOW 
	$("#openWindow").click(function () {
    	$('footer').removeClass('move-out');
    });
	
/* -----------------------------------------------------------------------------
	
	=SLIDE DOWN/UP
  
----------------------------------------------------------------------------- */
	
	$("#addClass").click(function () {
    	$('body').addClass('search-slide-down');
    });
	
	$("#removeClass").click(function () {
        $('body').removeClass('search-slide-down');
    });
    
});    