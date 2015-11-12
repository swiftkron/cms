$(function() {

	$('.watch-5star').click(function(e) {
	    $('.video-5star').lightbox_me();
	    e.preventDefault();
	});
	
	$('.watch-cassidy').click(function(e) {
	    $('.video-cassidy').lightbox_me();
	    e.preventDefault();
	});
	
	$('.watch-pdm').click(function(e) {
	    $('.video-pdm').lightbox_me();
	    e.preventDefault();
	});
	
	$('.watch-assisted').click(function(e) {
	    $('.video-assisted').lightbox_me();
	    e.preventDefault();
	});
	
	$('.watch-superior').click(function(e) {
	    $('.video-superior').lightbox_me();
	    e.preventDefault();
	});
	
	$('.watch-keevac').click(function(e) {
	    $('.video-keevac').lightbox_me();
	    e.preventDefault();
	});
	
	$('.watch-books').click(function(e) {
	    $('.video-books').lightbox_me();
	    e.preventDefault();
	});
	
	$('.watch-turnock').click(function(e) {
	    $('.video-turnock').lightbox_me();
	    e.preventDefault();
	});
	
	$('.watch-zaxis').click(function(e) {
	    $('.video-zaxis').lightbox_me();
	    e.preventDefault();
	});
	
	$('.watch-sandler').click(function(e) {
	    $('.video-sandler').lightbox_me();
	    e.preventDefault();
	});
	
	$('.watch-charter').click(function(e) {
	    $('.video-charter').lightbox_me();
	    e.preventDefault();
	});


    $('.slider-glance').cycle({
        fx:      'scrollHorz',
        timeout:  0,
        prev:    '.prev-glance',
        next:    '.next-glance',
        pager:   '.pager-glance',
        speed:	600
    });
    
    $('.slider-services').cycle({
        fx:      'scrollHorz',
        timeout:  0,
        prev:    '.prev-services',
        next:    '.next-services',
        pager:   '.pager-services',
        speed:	600
    });
    
    $('.slider-manufacturing').cycle({
        fx:      'scrollHorz',
        timeout:  0,
        prev:    '.prev-manufacturing',
        next:    '.next-manufacturing',
        pager:   '.pager-manufacturing',
        speed:	600
    });
    
    $('.slider-wholesale').cycle({
        fx:      'scrollHorz',
        timeout:  0,
        prev:    '.prev-wholesale',
        next:    '.next-wholesale',
        pager:   '.pager-wholesale',
        speed:	600
    });
    
    $('.slider-insurance').cycle({
        fx:      'scrollHorz',
        timeout:  0,
        prev:    '.prev-insurance',
        next:    '.next-insurance',
        pager:   '.pager-insurance',
        speed:	600
    });
    
    $('.slider-realestate').cycle({
        fx:      'scrollHorz',
        timeout:  0,
        prev:    '.prev-realestate',
        next:    '.next-realestate',
        pager:   '.pager-realestate',
        speed:	600
    });
    
    $('.slider-finance').cycle({
        fx:      'scrollHorz',
        timeout:  0,
        prev:    '.prev-finance',
        next:    '.next-finance',
        pager:   '.pager-finance',
        speed:	600
    });
    
    $("iframe").each(function(){
    	var ifr_source = $(this).attr('src');
	    var wmode = "wmode=transparent";
	    if(ifr_source.indexOf('?') != -1) $(this).attr('src',ifr_source+'&'+wmode);
	    else $(this).attr('src',ifr_source+'?'+wmode);
	});
    
});