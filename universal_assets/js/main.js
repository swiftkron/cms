slider = $('.slider').unslider({
	speed: 500,               //  The speed to animate each slide (in milliseconds)
	delay: 5000,              //  The delay between slide animations (in milliseconds)
	complete: function() {},  //  A function that gets called after every slide animation
	keys: true,               //  Enable keyboard (left, right) arrow shortcuts
	dots: true,               //  Display dot navigation
	fluid: true              //  Support responsive design. May break non-responsive designs
});


//product select button on homepage

$( ".product_select a" ).on( "click", function() {
	$('.home_p_btn.active').removeClass('active');
	$(this).addClass('active');
	var link = $(this).attr('data-link');


    $(".product.active" ).fadeOut( "slow", function(){
    	$(".product.active").removeClass('active');
       $( ".product."+link ).fadeIn( "slow" ).addClass('active');
      });
    });
// accordion
$('.accordion .panel .title').on('click', function() {

  	if($(this).parent().hasClass('active')) {
    		$(this).parent().removeClass('active').find('.panel-content').slideUp('slow');
  	} else {
    		$(this).parent().addClass('active').find('.panel-content').slideDown('slow');
  	}
  	$(this).parent().siblings().each(function() {
    		if($(this).hasClass('active')) {
			$(this).removeClass('active').find('.panel-content').slideUp('slow');
    		}
  	});
});
// accordion business care & resources (getting started)
$('.alt-accordion .title').on('click',  function() {
	
	var $trigger = $(this); 
  	var $triggerIcon = $trigger.find('.expand-icon');
  	var $content = $trigger.next('.panel-content'); 
  	
  	if($trigger.hasClass('active')){
	  	$trigger.removeClass('active triangle-border');//removes the down arrow and active class on close
	  	$triggerIcon.removeClass('rotate');
	  	$content.slideUp('slow');
  	}else{
	  	$trigger.addClass('active triangle-border');//adds the down arrow and active class on open
	  	$triggerIcon.addClass('rotate');
	  	$content.slideDown('slow');
  	}

});


// Mobile business care selctor
$('.care-selector a').on('click', function() {
	$(this).addClass('selected');
	$(this).siblings().removeClass('selected');
	// --- just changed to tables so altered below code slighty to this...
	var selected = '.'+$(this).attr('data-selector');
   	$('#care-table td:not(.expand-col)').addClass('hide');
 	$('#care-table td'+selected).removeClass('hide');
  	$('#care-table td'+selected).filter(function() {
      	if($(this).text() === "-") {
        	$(this).parent('tr').addClass('hide');
      	}else{
        	$(this).parent('tr').removeClass('hide');
      	}
  	});

  
});


var $testWrap = $('.test-wrap')
var $filterInput = $('.filter-category input')

$filterInput.on('click', function() {
	var catArray = [];
	var testArray = [];
	var solArray = [];
	  	
  	$filterInput.each( function(){
  		var filterType = $(this).closest('ol').attr('data-filter-type');
  		var filter = $(this).attr('data-filter');
	  	if($(this).is(':checked')){
		  	switch(filterType){
			  	case 'test-cat':	
			  		catArray.push(filter);
			  	break;
			  	case 'test-size':	
			  		testArray.push(filter);
			  	break;
			  	case 'test-solution':	
			  		solArray.push(filter);
			  	break;
			  }
			}
  	});
  	
  	$testWrap.each(function(){
  			var split = $(this).data('test-cat').split(' ');
  			console.log(split);
  			for(var i = 0; i < split.length; i++) {
  				if(
  					($.inArray(split[i], catArray) !== -1) && 
		  		   	($.inArray( $(this).attr('data-test-size'), testArray)> -1 || testArray.length <1)  && 
		  		    ($.inArray( $(this).attr('data-test-solution'), solArray)> -1 || solArray.length <1))
  				{
		  			$(this).show();
		  			return;
		  		} else {
		  			$(this).hide();
		  		}
			}
			if(catArray.length === 0) {
				$(this).show();
			};
	});  	

});


// Reset filter
$('.reset-filter').on('click', function() {
	$testWrap.show();
	$filterInput.prop('checked', false);
});


//Menu fix for touch devices

function is_touch_device() {

  return !!('ontouchstart' in window);

}

$(document).ready(function() { 
	/* If mobile browser, prevent click on parent nav item from redirecting to URL */
	if(is_touch_device()) {	

		$('.nav-collapse li > ul').each(function (index, elem) {
			/* Option 1: Use this to modify the href on the <a> to # */
			$(elem).prev('a').attr('href' ,'#');	
			
			/* OR Option 2: Use this to keep the href on the <a> intact but prevent the default action */
			$(elem).prev('a').click(function(event) {
  				event.preventDefault();
			});
		});
	}
	
});


//Mobile menu

var nav = responsiveNav(".nav-collapse", { // Selector
  	animate: false, // Boolean: Use CSS3 transitions, true or false
  	transition: 284, // Integer: Speed of the transition, in milliseconds
  	label: "Menu", // String: Label for the navigation toggle
  	insert: "before", // String: Insert the toggle before or after the navigation
  	customToggle: "mobile_btn", // Selector: Specify the ID of a custom toggle
  	closeOnNavClick: false, // Boolean: Close the navigation when one of the links are clicked
  	openPos: "relative", // String: Position of the opened nav, relative or static
  	navClass: "nav-collapse", // String: Default CSS class. If changed, you need to edit the CSS too!
  	navActiveClass: "js-nav-active", // String: Class that is added to  element when nav is active
  	jsClass: "js", // String: 'JS enabled' class which is added to  element
  	init: function(){}, // Function: Init callback
  	open: function(){
	  	$(".menu_icon").hide();
 	  	$(".menu_icon_close").show();
 	  	$('.nav-collapse').removeClass('closed');
 	  	$('.fixed-wrapper').addClass('full-height');
 	}, // Function: Open callback
  	close: function(){
	  	$(".menu_icon_close").hide();
	  	$(".menu_icon").show();
	  	$('.nav-collapse').removeClass('opened');
	  	$('.fixed-wrapper').removeClass('full-height');

  	} // Function: Close callback
});
$('.nav-collapse li').on('click', function(){
	$(this).find('a:first').addClass('active'); 
	$(this).find('ul').css('display', 'block');
	$(this).siblings().find('a').removeClass('active'); 
	$(this).siblings().find('ul').css('display', 'none');
});

//Lovely js to fix that varying height header maybe replace with css?
function setSpacer(){
    var height = jQuery(".fixed-wrapper").outerHeight();
	$(".spacer").css('padding-bottom' , height+'px');
	$(".anchor").css('bottom' , height+'px');
}



$( document ).ready(function() {
	$('.extra .container:nth-child(3), #extra .container:nth-child(3)').after("<hr class='notopmargin'>");	
	$(".second-nav a, .second-nav-2 a, .newpageh a").click(function(event){		
		event.preventDefault();

		var anchoroffset = $('.fixed-wrapper').height();
	
		var anchoroffset = anchoroffset + $('.second-nav').height();
			//console.log(anchoroffset);
		$('html,body').animate({scrollTop:$(this.hash).offset().top - anchoroffset}, 500);
	});

 $('.cta').css('visibility','visible');
  
     setTimeout( setSpacer, 50);
    stickElement();

    $('.fadingnav').on('mouseover', function(){$(this).removeClass('fadingnav');});
    
		//nav dropdown	
			$('.filter-category span').on('click', function(){
				if($(this).parent().find('ol').hasClass('active-category')){
						$(this).parent().find('ol').removeClass('active-category').slideUp();
					}else{
						$('.filter-category ol').removeClass('active-category').slideUp();
						$(this).parent().find('ol').addClass('active-category').slideDown();
					}
			});
		//click anywhere to close nav dropdown
			$(document).click(function() {
						$('.filter-category ol').removeClass('active-category').slideUp();
			});	
			$('.filter-category').on('click', function(event){
					event.stopPropagation();
			});
 
    
    
});
   $(".chosen-select").chosen();
// ======    Testimonial popouts
    $('.test-popout').on('mouseover', function(){
	    $(this).css('z-index','2');
	    $(this).addClass('popped');
    });
    $('.test-popout').on('mouseout', function(){
	    $(this).css('z-index','1');
	    $(this).removeClass('popped');
    });
// ======    End Testimonial popouts

// ======  Need to trigger this on screen resize too...
window.onresize = function(event) {
	//setSpacer();
	//fix responsive nav hover bug
	$('nav ul li a, #mobile_btn').removeClass('active');
	$('html').removeClass('js-nav-active');
	$('html').removeClass('applicationcache');
	//$('.opened').removeClass('opened').addClass('closed');
	$('nav ul li ul').removeAttr('style');
};

$('.second-nav a').on('click', function(){
});
//Stick the secondary menu to the top of the page when the other menu hits it, magical stuff.

function stickElement() {
    var move = function() {
        var offset = jQuery(".fixed-wrapper").height();

        //distance scrolled
        var topdist = $(window).scrollTop();
        //offsetting sticky top nav
        topdist = topdist + offset;
        //distance sticky from top
        if($("#scroller-anchor").length) {
	        var stickdistance = $("#scroller-anchor").offset().top;
	        var s = $(".second-nav");
	        if(topdist > stickdistance) {
	            s.css({
	                position: "fixed",
	                top: offset+"px"
	            });
	        } else {
	            if(topdist <= stickdistance) {
	                s.css({
	                    position: "absolute",
	                    top: ""
	                });
	           }
	        }
	    }
    };
	$(window).scroll(move);
    move();
}



/* =====  contact forms   ==== */


                
                
	        successOverlay = $('.successOverlay');
	        successModal = $('.successModal');
	        videoModal = $('.videoModal');
			allElements = $('*');
	        $(document).on('click', '.CloseButton', function(){
		    	successOverlay.hide();	
		    	successModal.hide();	
	        }); 
	        
	        	if(window.location.search == '?thankyou'){
	        		successOverlay.show();
		        	successModal.show().find('.box2').html(thankYouMessage);
				}

//SOCIAL OVERLAY//

var url      = window.location.href;     // Returns full URL
var sharetitle = $('.large_strapline').html();
var sharetitle = encodeURIComponent(sharetitle);
var shareimage = '';


if (shareimage.length >= 1) {

var shareimage = $('.section-bg').css('background-image');
shareimage = shareimage.replace('url(','').replace(')','');
}

//console.log(shareimage);


var overlaycontent = '<div class="social pop-share"><div class="close_test"><img src="img/cross.png" alt="cross"></div><a href="https://www.linkedin.com/shareArticle?mini=true&url=' + url + '&title=' + sharetitle + ' &source=LinkedIn" class="social-roll linkd" target="_blank">LinkedIn</a><a href="http://twitter.com/intent/tweet?url=' + url + '/&text=' + sharetitle + '" class="social-roll twit" target="_blank">Twitter</a><a target="_blank" href="http://www.facebook.com/sharer/sharer.php?s=100&amp;p[url]=' + url +'&amp;p[images][0]=' + shareimage + '&amp;p[title]=Act! Software;p[summary]=Act software" class="social-roll fb" >Facebook</a><br></div>';

//console.log(overlaycontent);
//console.log(sharetitle);
$('body').on('click', '.close_test img', function () {

	console.log('pressed');
$('.pop-share').remove();
			$('#overlay').css('display', 'none');
	})

jQuery('.share_btn').on("click", function() {
	
	var docHeight = $(document).height();
	$("#overlay").height(docHeight);

	if ($('.pop-share').length) {
			$('.pop-share').remove();
			$('#overlay').css('display', 'none');
	}

	else {

		$(this).before(overlaycontent);
		$('#overlay').css('display', 'block');

	}

	$(this).toggleClass('share_selected');

	
})


//Adding the overlay

$(function() {

   var docHeight = $(document).height();

   $("body").append("<div id='overlay'></div>");

   $("#overlay")
      .height(docHeight)
      .css({
         'opacity' : 0.8,
         'position': 'absolute',
         'top': 0,
         'display': 'none',
         'left': 0,
         'background-color': 'black',
         'width': '100%',
         'z-index': 5000
      });

    // Buy button popup
	if ($(".buy-popup")[0]){
		$('body').prepend('<div class="successOverlay"></div><div class="successModal largeContentModal buyModal"><span class="CloseButton"><img src="img/cross.png" alt="cross"  /></span><div class="box2"><span>Choose currency:</span><p><strong>Act! Pro</strong> will automatically be added to your Shopping Cart.</p><div class="col-md-6"><a target="_blank" href="http://store.act.com/app/site/backend/intl/additemtocart.nl?buyid=7486&qty=1&selcurrency=2&selsubsidiary=7&selshopperlanguage=en_EN"><div class="icon-pound"></div></a><br><a target="_blank" href="http://store.act.com/app/site/backend/intl/additemtocart.nl?buyid=7486&qty=1&selcurrency=2&selsubsidiary=7&selshopperlanguage=en_EN" class="btn-second btn">buy in pounds</a></div><div class="col-md-6"><a target="_blank" href="http://store.act.com/app/site/backend/intl/additemtocart.nl?buyid=7486&qty=1&selcurrency=4&selsubsidiary=7&selshopperlanguage=en_EN"><div class="icon-euro"></div></a><br><a target="_blank" href="http://store.act.com/app/site/backend/intl/additemtocart.nl?buyid=7486&qty=1&selcurrency=4&selsubsidiary=7&selshopperlanguage=en_EN" class="btn-second btn">buy in euros</a></div></div>');
	}
	$('.buy-popup').on("click", function(){
	  $('.successOverlay').show();
	  $('.successModal').show();
	});
	$('.successModal .CloseButton').on("click", function(){
	  $('.successOverlay').hide();
	  $('.successModal').hide();
	});
});