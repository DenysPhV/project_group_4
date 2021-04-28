var mobile = $('.mobile-menu'),
	scrollPrev = 0;

$(window).scroll(function() {
	var scrolled = $(window).scrollTop();
 
	if ( scrolled > 800 && scrolled > scrollPrev ) {
		mobile.addClass('is open');
	} else {
		mobile.removeClass('is-open');
	}
	scrollPrev = scrolled;
});