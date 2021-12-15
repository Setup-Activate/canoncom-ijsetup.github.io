(function($) {

	"use strict";

	/* Event - Document Ready /- */	
	$(document).ready(function($) {

		/* Service Section */
		$("#make-clean-service").owlCarousel( {

			autoPlay: 3000, //Set AutoPlay to 3 seconds

			items : 3, //10 items above 1000px browser width
			itemsDesktop : [1000,2], //5 items between 1000px and 901px
			itemsDesktopSmall : [900,2], // 3 items betweem 900px and 601px
			itemsTablet: [700,2], //2 items between 600 and 0;
			itemsMobile : [480,1], // itemsMobile disabled - inherit from itemsTablet option 
			navigation : true,
			pagination: false
		});

		/* Team Section */
		$("#make-clean-team").owlCarousel( {

			autoPlay: 3000, //Set AutoPlay to 3 seconds

			items : 3, //10 items above 1000px browser width
			itemsDesktop : [1200,2], //2 items between 1200px and 901px
			itemsDesktopSmall : [900,2], // 3 items betweem 900px and 601px
			itemsTablet: [700,2], //2 items between 600 and 0;
			itemsMobile : [480,1], // itemsMobile disabled - inherit from itemsTablet option 
			navigation : true,
			pagination: false
		});

		/* Partners Section */
		$("#make-clean-partner").owlCarousel( {

			autoPlay: 3000, //Set AutoPlay to 3 seconds

			items : 6, //10 items above 1000px browser width
			itemsDesktop : [1200,4], //2 items between 1200px and 901px
			itemsDesktopSmall : [900,3], // 3 items betweem 900px and 601px
			itemsTablet: [700,3], //2 items between 600 and 0;
			itemsMobile : [550,2], // itemsMobile disabled - inherit from itemsTablet option
			navigation : true,
			pagination: false
		});

		/* Type 1 */
		$('.statistics-section').each(function () {

			var $this = $(this);
			var myVal = $(this).data("value");

			$this.appear(function() {

				var statistics_item_count = 0;
				var statistics_count = 0;					
				statistics_item_count = $( "[id*='statistics_1_count-']" ).length;

				for(var i=1; i<=statistics_item_count; i++) {

					statistics_count = $( "[id*='statistics_1_count-"+i+"']" ).attr( "data-statistics_percent" );
					$("[id*='statistics_1_count-"+i+"']").animateNumber({ number: statistics_count }, 2000);
				}				
			});
		});

		/* Portfolio Details Slider */
		$('#portfolio-carousel').flexslider({
			animation: "slide",
			controlNav: false,			
			animationLoop: true,
			slideshow: false,
			itemWidth: 110,
			itemMargin: 10,
			asNavFor: '#portfolio-slider',
		});

		$('#portfolio-slider').flexslider({
			animation: "fade",
			controlNav: false,
			animationLoop: false,
			slideshow: false,
			sync: '#portfolio-carousel',
			directionNav: false
		});
		
		/* Product Details Slider */
		$('#product-carousel').flexslider({
			animation: "slide",
			controlNav: false,
			animationLoop: false,
			slideshow: false,
			itemWidth: 125,
			itemMargin: 10,
			asNavFor: '#product-slider',
		});

		$('#product-slider').flexslider({
			animation: "fade",
			controlNav: false,
			animationLoop: false,
			slideshow: false,
			sync: "#product-carousel",
			directionNav: false
		});

		/* - Responsive Caret */
		$('.ddl-switch').on('click', function() {

			var li = $(this).parent();

			if ( li.hasClass('ddl-active') || li.find('.ddl-active').length !== 0 || li.find('.dropdown-menu').is(':visible') ) {
				li.removeClass('ddl-active');
				li.children().find('.ddl-active').removeClass('ddl-active');
				li.children('.dropdown-menu').slideUp();	
			}
			else {
				li.addClass('ddl-active');
				li.children('.dropdown-menu').slideDown();
			}
		});
		
		/* PreLoader */
		$(".preloader").delay(700).fadeOut();
		
		$(".about_company .panel-group .panel:first-of-type .panel-collapse").addClass('in');
		
		/*----------------------------------------------------*/
		/*  Count Up
		/*----------------------------------------------------*/
		$('.counter').counterUp({
			delay: 15,
			time: 1500
		});
			
		/*----------------------------------------------------*/
		/*  Owl Carousels
		/*----------------------------------------------------*/        
		$('.offer_service_carousel').owlCarousel({
			loop:true,
			margin:0,
			nav:false,
			items:1
		});
		
		$('.clients_carousel').owlCarousel({
			loop:true,
			responsiveClass:true,
			dots:false,
			nav:true,
			navText:['<i class="fa fa-angle-right"></i>','<i class="fa fa-angle-left"></i>'],
			responsive:{
				0:{
					items:2,
					nav:true
				},
				500:{
					items:3,
					nav:true
				},
				992:{
					items:4,
					nav:false
				},
				1200:{
					items:4,
					nav:true,
					loop:false
				}
			}
		});

	});
	/* document.ready /- */

	if( $('.social-share').length ) {

		$('.social-share > li > a', this).bind('click', function(e) {

			e.preventDefault();
			e.stopPropagation();

			var data_action = $(this).attr('data-action');
			var data_title = $(this).attr('data-title');
			var data_url = $(this).attr('data-url');

			if( data_action == 'facebook' ) {		
				window.open('http://www.facebook.com/share.php?u='+encodeURIComponent(data_url)+'&title='+encodeURIComponent(data_title),'sharer','toolbar=0,status=0,width=580,height=325');
			}
			else if( data_action == 'twitter' ) {
				window.open('http://twitter.com/intent/tweet?status='+encodeURIComponent(data_url)+'+'+encodeURIComponent(data_title),'sharer','toolbar=0,status=0,width=580,height=325');
			}
			else if( data_action == 'google-plus' ) {
				window.open('https://plus.google.com/share?url='+encodeURIComponent(data_url),'sharer','toolbar=0,status=0,width=580,height=325');
			}
			else if( data_action == 'linkedin' ) {
				window.open('http://www.linkedin.com/shareArticle?mini=true&url='+encodeURIComponent(data_url)+'&title='+encodeURIComponent(data_title)+'&source='+encodeURIComponent(data_url),'sharer','toolbar=0,status=0,width=580,height=325');
			}
			else if( data_action == 'rss' ) {
				window.open('https://rss.com/share?url='+encodeURIComponent(data_url),'sharer','toolbar=0,status=0,width=580,height=325');
			}
		});
	}

	$('.tweet_slider').flexslider({
		animation: "fade",
		directionNav: false
	})

})(jQuery);