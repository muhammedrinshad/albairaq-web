(function ($) {
  "use strict";
  /*-------------------------------------
      Animation on scroll: Number rotator
  -------------------------------------*/
  $("[data-appear-animation]").each(function() {
      var self      = $(this);
      var animation = self.data("appear-animation");
      var delay     = (self.data("appear-animation-delay") ? self.data("appear-animation-delay") : 0);{ 
          self.html('0');
          self.waypoint(function(direction) {
              if( !self.hasClass('completed') ){
                  var from     = self.data('from');
                  var to       = self.data('to');
                  var interval = self.data('interval');
                  self.numinate({
                      format: '%counter%',
                      from: from,
                      to: to,
                      runningInterval: 2000,
                      stepUnit: interval,
                      onComplete: function(elem) {
                          self.addClass('completed');
                      }
                  });
              }
          }, { offset:'85%' });
      }
  });

 
     /*-------------------------------------
    Swiper Slider
    -------------------------------------*/
    var swiperslider = $(".swiper-slider");
	var x = 1;
	swiperslider.each(function () {  
				var carouselElement	= $(this);
				var columns = $(this).data('columns');
				var loop = $(this).data('loop');
				var autoplay2 = $(this).data('autoplay');
				var autoplayspeed1 = $(this).data('autoplayspeed');
				var val_nav = $(this).data('arrows');
				var nav_arrow = $(this).data('arrows-class');                
				var val_dots = $(this).data('dots');
				var val_center = $(this).data('center');
				var style = $(this).data('effect');
				var loopSlide = null;
				var sl_speed = 3000; 

				carouselElement.addClass( 'pbmit-element-viewtype-carousel-' + x );


				if( columns === 1 ||  columns == 1.6 ){ 
					var responsive_items = [ /* 1199 : */ columns, /* 991 : */ '1', /* 767 : */ '1', /* 575 : */ '1', /* 0 : */ '1' ];
				} else if( columns === 2 ||  columns == 2.1  ||  columns == 2.5){ 
					var responsive_items = [ /* 1199 : */ columns, /* 991 : */ '2', /* 767 : */ '2', /* 575 : */ '2', /* 0 : */ '1' ];
				} else if( columns === 3 ||  columns == 3 ){
					var responsive_items = [ /* 1199 : */ columns, /* 991 : */ '2', /* 767 : */ '2', /* 575 : */ '2', /* 0 : */ '1' ];
				} else if( columns === 3 ||  columns == 3.6 ){
					var responsive_items = [ /* 1199 : */ columns, /* 991 : */ '3', /* 767 : */ '3', /* 575 : */ '2', /* 0 : */ '1' ];
				} else if( columns === 4||  columns == 4.5 ){
					var responsive_items = [ /* 1199 : */ columns, /* 991 : */ '3', /* 767 : */ '2', /* 575 : */ '2', /* 0 : */ '1' ];
				} else if( columns === 5 ){
					var responsive_items = [ /* 1199 : */ '5', /* 991 : */ '4', /* 767 : */ '2', /* 575 : */ '2', /* 0 : */ '1' ];
				} else if( columns === 6 ){
					var responsive_items = [ /* 1199 : */ '6', /* 991 : */ '4', /* 767 : */ '3', /* 575 : */ '2', /* 0 : */ '1' ];
				} else {
					var responsive_items = [ /* 1199 : */ '3', /* 991 : */ '3', /* 767 : */ '2', /* 575 : */ '2', /* 0 : */ '1' ];
				}

				if (val_dots === true) {
					carouselElement.append('<div class="swiper-pagination swiper-pagination"></div>');
				}

				if(val_nav === true){
					
					if(!nav_arrow){
					carouselElement.append( '<div class="swiper-buttons"></div>' );
					carouselElement.find('.swiper-buttons').append( '<div class="swiper-button-next swiper-button-next-' + x + '"></div>' );
					carouselElement.find('.swiper-buttons').append( '<div class="swiper-button-prev swiper-button-prev-' + x + '"></div>' );
					} else{             
					$('.' + nav_arrow).append( '<div class="swiper-buttons"></div>' );
					$('.' + nav_arrow).append( '<div class="swiper-button-next swiper-button-next-' + x + '"></div>' );
					$('.' + nav_arrow).append( '<div class="swiper-button-prev swiper-button-prev-' + x + '"></div>' );
					}
				}

				var pagination_val = false;
				if (val_dots === true) {

					if(carouselElement.hasClass('pbmit-sep-number')){ 
						pagination_val = {
							el: '.swiper-pagination',
							type :'fraction',
						};
					} else{
						pagination_val = {
						el: '.swiper-pagination',
						clickable: true,
					};
						}
					}
				var navigation_val = false;
				if(val_nav === true){
					navigation_val =  {
					nextEl: '.swiper-button-next-' + x,
					prevEl: '.swiper-button-prev-' + x,
					};
				}

				if(!style){
					style = "slide";
				}    
				
				var margin_val = 30;
				if( $(carouselElement).data('margin') !== '' || $(carouselElement).data('margin') === '0'){
					margin_val = $(carouselElement).data('margin');  
				} 
				
				if(carouselElement.hasClass('marquee')){ 
					var reverse_direction = $(this).data('reverse');
					if (!reverse_direction) reverse_direction = false;
					var swiper2 = new Swiper( '.pbmit-element-viewtype-carousel-' + x, { 
						spaceBetween: 0,
						centeredSlides: true,
						speed: 12000,
						autoplay: {
							delay: 1,
							disableOnInteraction: true,
							reverseDirection: reverse_direction,
						},
						loop: true,
						slidesPerView: 'auto',
						allowTouchMove: false,
						disableOnInteraction: true
					});
				} else{                   
				var swiper = new Swiper( '.pbmit-element-viewtype-carousel-' + x, { 
					loop: loop, 
					navigation: navigation_val,
					pagination: pagination_val,
					slidesPerView: columns,
					spaceBetween: margin_val,
					loopedSlides: loopSlide, 
					autoplay : autoplay2,
					effect: style,
					speed: sl_speed, 
					grabCursor: false,
					centeredSlides: val_center,
					breakpoints		  : {
					
					1199 : {
						slidesPerView	: responsive_items[0],
					},
					991	 : {					
						slidesPerView	: responsive_items[1],
					},
					767	 : {
						slidesPerView	: responsive_items[2],
					},
					575	 : {
						slidesPerView	: responsive_items[3],
					},
					0	 : {
						slidesPerView	: responsive_items[4],
					}
					}
				});
			}
		x = x + 1;             
	});
  

/* ====================================== */
/* Circle Progress bar
/* ====================================== */
 function pbmit_circle_progressbar() {

  jQuery('.pbmit-circle-outer').each(function() {

      var this_circle = jQuery(this);

      // Circle settings
      var emptyFill_val = "rgba(0, 0, 0, 0)";
      var thickness_val = 10;
      var fill_val = this_circle.data('fill');
      var size_val = 110;

      if (typeof this_circle.data('emptyfill') !== 'undefined' && this_circle.data('emptyfill') != '') {
          emptyFill_val = this_circle.data('emptyfill');
      }
      if (typeof this_circle.data('thickness') !== 'undefined' && this_circle.data('thickness') != '') {
          thickness_val = this_circle.data('thickness');
      }
      if (typeof this_circle.data('size') !== 'undefined' && this_circle.data('size') != '') {
          size_val = this_circle.data('size');
      }
      if (typeof this_circle.data('filltype') !== 'undefined' && this_circle.data('filltype') == 'gradient') {
          fill_val = { gradient: [this_circle.data('gradient1'), this_circle.data('gradient2')], gradientAngle: Math.PI / 4 };
      }

      if (typeof jQuery.fn.circleProgress == "function") {
          var digit = this_circle.data('digit');
          var before = this_circle.data('before');
          var after = this_circle.data('after');
          var digit = Number(digit);
          var short_digit = (digit / 100);

          jQuery('.pbmit-circle', this_circle).circleProgress({
              value: 0,
              size: size_val,
              startAngle: -Math.PI / 4 * 2,
              thickness: thickness_val,
              emptyFill: emptyFill_val,
              fill: fill_val
          }).on('circle-animation-progress', function(event, progress, stepValue) { // Rotate number when animating
              this_circle.find('.pbmit-circle-number').html(before + Math.round(stepValue * 100) + after);
          });
      }

      this_circle.waypoint(function(direction) {
          if (!this_circle.hasClass('completed')) {
              // Re draw when view
              if (typeof jQuery.fn.circleProgress == "function") {
                  jQuery('.pbmit-circle', this_circle).circleProgress({ value: short_digit });
              };
              this_circle.addClass('completed');
          }
      }, { offset: '85%' });

  });
} 

  /*-------------------------------------
  ProgressBar
  -------------------------------------*/
  AOS.init({
    once: true,
  });

  /*-------------------------------------
  Scroll To Top
  -------------------------------------*/

	var pbmit_back_to_top = function() {
		var progressPath = document.querySelector('.pbmit-progress-wrap path');
		var pathLength = progressPath.getTotalLength();
		progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
		progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
		progressPath.style.strokeDashoffset = pathLength;
		progressPath.getBoundingClientRect();
		progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
		var updateProgress = function() {
			var scroll = jQuery(window).scrollTop();
			var height = jQuery(document).height() - jQuery(window).height();
			var progress = pathLength - (scroll * pathLength / height);
			progressPath.style.strokeDashoffset = progress;
		}
		updateProgress();
		jQuery(window).scroll(updateProgress);
		var offset = 50;
		var duration = 550;
		jQuery(window).on('scroll', function() {
			if (jQuery(this).scrollTop() > offset) {
				jQuery('.pbmit-progress-wrap').addClass('active-progress');
			} else {
				jQuery('.pbmit-progress-wrap').removeClass('active-progress');
			}
		});
		jQuery('.pbmit-progress-wrap').on('click', function(event) {
			event.preventDefault();
			jQuery('html, body').animate({ scrollTop: 0 }, duration);
			return false;
		})
	}
	pbmit_back_to_top();

  /*-------------------------------------
  Header Search Form
  -------------------------------------*/
	$( ".pbmit-header-search-btn a" ).on('click', function() {     
		$(".pbmit-search-overlay").addClass('st-show');
		$("body").addClass('st-prevent-scroll');            
		return false;
	});   
	$( ".pbmit-icon-close" ).on('click', function() {
			$(".pbmit-search-overlay").removeClass('st-show');
		$("body").removeClass('st-prevent-scroll');            
		return false;
	}); 
	$('.pbmit-site-searchform').on('click', function(event){
		event.stopPropagation();
	});
  
  /*-------------------------------------
  Count Down
  -------------------------------------*/ 

	if( $('#clock').length>0 ){
		$('#clock').countdown('2024/10/10', function(event) {
		$(this).html(event.strftime(''
		+ '<div class="conut-time"><span class="time_left">86</span><span class="time_description">Day%!d </span></div>'
		+ '<div class="conut-time"><span class="time_left">05</span><span class="time_description"> Hours </span></div> '
		+ '<div class="conut-time"><span class="time_left">33</span><span class="time_description"> Minutes </span></div>'
		+ '<div class="conut-time"><span class="time_left">%S</span><span class="time_description"> Seconds </span></div>'
		));
		});
	}

    /*-------------------------------------
    Active Hover
    -------------------------------------*/ 
    $( ".active-onhover .pbmit-miconheading-style-4:nth-child(1)" ).addClass('pbmit-mihbox-hover-active');
    
      $( ".active-onhover .pbmit-miconheading-style-4" ).mouseover(function() {
        var main_row = $( this ).closest( '.active-onhover' );
        $('.pbmit-miconheading-style-4', main_row).removeClass('pbmit-mihbox-hover-active'); 
        $(this).addClass('pbmit-mihbox-hover-active');
      }).mouseout(function() {
        var main_row = $( this ).closest( '.active-onhover' );
        $('.pbmit-miconheading-style-4', main_row).removeClass('pbmit-mihbox-hover-active');
        $('.pbmit-miconheading-style-4:nth-child(1)', main_row).addClass('pbmit-mihbox-hover-active');
       
    });

  /*-------------------------------------
    tooltip
  -------------------------------------*/
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
      var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl)
    })
    
  /*-------------------------------------
    Mobile Menu
  -------------------------------------*/     
  $('.navbar-toggler,.closepanel').on('click', function () { 
    jQuery("header").toggleClass("active");
  }); 

  /*-------------------------------------
  Sticky header wrapper
  -------------------------------------*/
	if( jQuery('.site-header-menu-wrapper').length == 0 ){
		jQuery('.site-header-menu').wrap('<div class="site-header-menu-wrapper"></div>');
		}
		jQuery('.site-header-menu-wrapper').height( jQuery('.site-header-menu-wrapper').height() ).css('margin-bottom', jQuery('.site-header-menu').css('margin-bottom') );

		jQuery(window).resize(function(){
		if( jQuery(window).width() < 1200 ){
			jQuery('.site-header-menu-wrapper').css('height', '');
			jQuery('.site-header-menu-wrapper').css('margin-bottom', '');
		} else {
			jQuery('.site-header-menu-wrapper').height( jQuery('.site-header-menu-wrapper').height() ).css('margin-bottom', jQuery('.site-header-menu').css('margin-bottom') );
		}
		
	});

  /*-------------------------------------
  Magnific Popup
  -------------------------------------*/
	var i_type = 'image';
	$('.pbmin-lightbox-video, .pbmin-lightbox-video a, a.pbmit-lightbox').each(function(){
		if( $(this).hasClass('pbmin-lightbox-video')){ 
			i_type = 'iframe';
		} else {
			i_type = 'image';
		}  
		$(this).magnificPopup({type:i_type});
	});   

  /*-------------------------------------
  Magnific Popup
  -------------------------------------*/
	$('.pbmit-nav-menu-toggle').on('click', function() {
			$(".floting-bar-wrap").toggleClass("active");
		})
		$('.floting-bar-wrap .closepanel').on('click', function() {
			$(".floting-bar-wrap").toggleClass("active");
	});
  /*-------------------------------------
   Accordion
  -------------------------------------*/

	$('.accordion .accordion-item').on('click', function () { 
		var e = $(this);  
		$(this).parent().find('.accordion-item').removeClass('active');        
		if(!$(this).find('.accordion-button').hasClass('collapsed')){
		$(this).addClass('active');
		}  
	}); 

  /*-------------------------------------
    Add plus icon in menu
    -------------------------------------*/
  	$( ".main-menu ul.navigation li.dropdown").append( "<span class='righticon'><i class='pbmit-base-icon-angle-right'></i></span>" );
  
  /*-------------------------------------
  Responsive Menu
  -------------------------------------*/ 
	$('.main-menu ul.navigation li.dropdown .righticon').on('click', function() {
			$(this).siblings().toggleClass('open');
			$(this).find('i').toggleClass('pbmit-base-icon-angle-right pbmit-base-icon-up-open-big');
			return false;
	});  

    /*-------------------------------------
    Sortable Div
    -------------------------------------*/

    jQuery('.pbmit-sortable-yes').each(function(){ 
		var boxes = jQuery('.pbmit-element-posts-wrapper', this ); 
		var links = jQuery('.pbmit-sortable-list a', this ); 
		boxes.isotope({ animationEngine : 'best-available'}); 
		links.on('click', function(e){  
		  var selector = jQuery(this).data('sortby'); 
		  if( selector != '*' ){ 
			var selector = '.' + selector; 
		  } 
		  boxes.isotope({ filter : selector, itemSelector : '.pbmit-ele', layoutMode : 'fitRows' }); 
		  links.removeClass('pbmit-selected');
		  jQuery(this).addClass('pbmit-selected');
		  e.preventDefault(); 
		});
	}); 

	/*-------------------------------------
    Stretched Div
    -------------------------------------*/ 	
	var document_width = $(document).width();
	function pbmit_col_stretched(){
		$('.pbmit-col-stretched-yes').each(function() {
			var this_ele = $(this);
			var window_width = jQuery(window).width();
			var main_width = $('.container').width();
			var extra_width = ((window_width - main_width) / 2);  
			if (window_width < 1200){
				extra_width = 0;
			}
			if (this_ele.hasClass('pbmit-col-right')) { 
				$('.pbmit-col-stretched-right', this_ele).css('margin-right', '-' + extra_width + 'px'); 
			} else { 
				$('.pbmit-col-stretched-left', this_ele).css('margin-left', '-' + extra_width + 'px'); 
			}
		});
	}
	$(window).resize(function(){
		pbmit_col_stretched();
	});
	pbmit_col_stretched();

  /*-------------------------------------
  Circle Progressbar
  -------------------------------------*/
  $('.pbmit-circle-outer').each(function() {
	var this_circle = $(this);


	// Circle settings
	var emptyFill_val = "rgba(0, 0, 0, 0)";
	var thickness_val = 10;
	var fill_val = this_circle.data('fill');
	var size_val = 115;

	if (typeof this_circle.data('emptyfill') !== 'undefined' && this_circle.data('emptyfill') !== '') {
		emptyFill_val = this_circle.data('emptyfill');
	}
	if (typeof this_circle.data('thickness') !== 'undefined' && this_circle.data('thickness') !== '') {
		thickness_val = this_circle.data('thickness');
	}
	if (typeof this_circle.data('size') !== 'undefined' && this_circle.data('size') !== '') {
		size_val = this_circle.data('size');
	}
	if (typeof this_circle.data('filltype') !== 'undefined' && this_circle.data('filltype') === 'gradient') {
		fill_val = { gradient: [this_circle.data('gradient1'), this_circle.data('gradient2')], gradientAngle: Math.PI / 4 };
	}

	if (typeof $.fn.circleProgress === "function") {
		var digit = this_circle.data('digit');
		var before = this_circle.data('before');
		var after = this_circle.data('after');
		var digit = Number(digit);
		var short_digit = (digit / 100);

		$('.pbmit-circle', this_circle).circleProgress({
			value: 0,
			size: size_val,
			startAngle: -Math.PI / 4 * 2,
			thickness: thickness_val,
			emptyFill: emptyFill_val,
			fill: fill_val
		}).on('circle-animation-progress', function(event, progress, stepValue) { // Rotate number when animating
			this_circle.find('.pbmit-circle-number').html(before + Math.round(stepValue * 100) + after);
		});
	}
	
	this_circle.waypoint(function(direction) {
		if (!this_circle.hasClass('completed')) {
			// Redraw when view
			if (typeof $.fn.circleProgress === "function") {
				$('.pbmit-circle', this_circle).circleProgress({ value: short_digit });
			};
			this_circle.addClass('completed');
		}
	}, { offset: '115%' });

});

})($);

   /*-------------------------------------
    Contact form validator
    -------------------------------------*/
    if ( $.isFunction($.fn.validate) ) {
      $("#contact-form").validate(); 
    }


    /*-------------------------------------
     Send email via Ajax
   Make sure you configure send.php file 
     -------------------------------------*/
    $("#contact-form").submit(function(){
 
   if( $("#contact-form .doing-via-ajax").length == 0 ){
     $("#contact-form").prepend('<input class="doing-via-ajax" type="hidden" name="doing-via-ajax" value="yes" />');;
   }
 
   if( $("#contact-form").valid() ){  // check if form is valid
 
     $(".contact-form .message-status").html('');
     $('.form-btn-loader').removeClass('d-none');
     $('.contact-form button.pbmit-btn span').hide();
     $('.contact-form button.pbmit-btn').attr("disabled", "disabled");
 
     $.ajax( {
       type: "POST",
       url: "send.php",
       data:$('#contact-form').serialize(),
       success: function(cevap) {
         $('.form-btn-loader').addClass('d-none');
         $('.contact-form button.pbmit-btn span').show();
         $(".contact-form button.pbmit-btn").removeAttr("disabled");
         $(".contact-form .message-status").html(cevap);
       }
     });
     
   }
 
   return false;
 
   });

   /*-------------------------------------
    Masonry
   -------------------------------------*/
 
	if (jQuery('.pbmit-element-viewtype-masonry').length > 0) {
		jQuery('.pbmit-element-viewtype-masonry').each(function() {

			var main_ele = jQuery(this); 			
			// init Masonry
			let $grid = jQuery('.pbmit-element-posts-wrapper', main_ele).masonry({
				
				itemSelector: '.pbmit-portfolio-style-2,.pbmit-blog-style-1',
				columnWidth: '.pbmit-portfolio-style-2,.pbmit-blog-style-1',
				gutter: 0,
				percentPosition: true,
				stagger: 30,
				// nicer reveal transition
				visibleStyle: { transform: 'translateY(0)', opacity: 1 },
				hiddenStyle: { transform: 'translateY(100px)', opacity: 0 },
				horizontalOrder: true
			});
			
		}
	)};

	/*-------------------------------------
	Apexcharts
    -------------------------------------*/

	var options = {
		series: [44, 55, 13, 43, 22],
		chart: {
		width: 380,
		type: 'pie',
	},
	labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
	responsive: [{
		breakpoint: 480,
		options: {
		chart: {
			width: 200
		},
		legend: {
			position: 'bottom'
		}
		}
	}]
	};

	/*-------------------------------------
  	Donut Graph
    -------------------------------------*/

	function pbmit_donut_chart_demo1() {
		
		if( typeof Chart !== 'undefined' ){
				
			var data = {
				labels: ['Solar Panel', 'Cost', 'System', 'Labor'],
				datasets: [{
				data: [30, 80, 30 ,40],
				backgroundColor: ['#0068b5', '#f4b200', '#b0d129', '#000'],
				hoverBackgroundColor: ['#0068b5', '#f4b200', '#b0d129', '#000']
				}]
			};

			if( jQuery('#PbmDonutChart').length > 0 ){
				// Get the context of the canvas element
				var canvas = jQuery('#PbmDonutChart')
				
				// Create the donut chart
				new Chart( canvas, {
					type: 'doughnut',
					data: data,
				});
			}
		}
	}
	
	function pbmit_donut_chart_demo3() {
		
		if( typeof Chart !== 'undefined' ){
				
			var data = {
				labels: ['Solar Panel', 'Cost', 'System', 'Labor'],
				datasets: [{
				data: [25, 15, 80 ,50],
				backgroundColor: ['#0068b5', '#f4b200', '#b0d129', '#000'],
				hoverBackgroundColor: ['#0068b5', '#f4b200', '#b0d129', '#000']
				}]
			};

			if( jQuery('#PbmDonutChart_1').length > 0 ){
				// Get the context of the canvas element
				var canvas = jQuery('#PbmDonutChart_1')
				
				// Create the donut chart
				new Chart( canvas, {
					type: 'doughnut',
					data: data,
				});
			}
		}
	}
	
	jQuery(document).ready(function() {
		pbmit_donut_chart_demo1();
		pbmit_donut_chart_demo3();
	});



	// gallery gs start
	// Lightbox Gallery

// query selectors
const lightboxEnabled = document.querySelectorAll('.lightbox-enabled');
const lightboxArray = Array.from(lightboxEnabled);
const lastImage = lightboxArray.length-1;
const lightboxContainer = document.querySelector('.lightbox-container');
const lightboxImage = document.querySelector('.lightbox-image');
const lightboxBtns = document.querySelectorAll('.lightbox-btn');
const lightboxBtnRight = document.querySelector('#right');
const lightboxBtnLeft = document.querySelector('#left');
const close = document.querySelector('#close');
let activeImage;
// Functions
const showLightBox = () => {lightboxContainer.classList.add('active')}

const hideLightBox = () => {lightboxContainer.classList.remove('active')}

const setActiveImage = (image) => {
lightboxImage.src = image.dataset.imgsrc;
activeImage= lightboxArray.indexOf(image);
}

const transitionSlidesLeft = () => {
  lightboxBtnLeft.focus();
  $('.lightbox-image').addClass('slideright'); 
   setTimeout(function() {
  activeImage === 0 ? setActiveImage(lightboxArray[lastImage]) : setActiveImage(lightboxArray[activeImage-1]);
}, 250); 


  setTimeout(function() {
    $('.lightbox-image').removeClass('slideright');
}, 500);   
}

const transitionSlidesRight = () => {
 lightboxBtnRight.focus();
$('.lightbox-image').addClass('slideleft');  
  setTimeout(function() {
   activeImage === lastImage ? setActiveImage(lightboxArray[0]) : setActiveImage(lightboxArray[activeImage+1]);
}, 250); 
  setTimeout(function() {
    $('.lightbox-image').removeClass('slideleft');
}, 500);  
}

const transitionSlideHandler = (moveItem) => {
  moveItem.includes('left') ? transitionSlidesLeft() : transitionSlidesRight();
}

// Event Listeners
lightboxEnabled.forEach(image => {
   image.addEventListener('click', (e) => {
    showLightBox();
    setActiveImage(image);
    })                     
    })
lightboxContainer.addEventListener('click', () => {hideLightBox()})
close.addEventListener('click', () => {hideLightBox()})
lightboxBtns.forEach(btn => {
btn.addEventListener('click', (e) => {
e.stopPropagation();
  transitionSlideHandler(e.currentTarget.id);
})
})

lightboxImage.addEventListener('click', (e) => {
e.stopPropagation();

})
// gallery js end



// service detail js

// Show the first tab and hide the rest
$('#tabs-nav li:first-child').addClass('active');
$('.tab-content').hide();
$('.tab-content:first').show();

// Click function
$('#tabs-nav li').click(function(){
  $('#tabs-nav li').removeClass('active');
  $(this).addClass('active');
  $('.tab-content').hide();
  
  var activeTab = $(this).find('a').attr('href');
  $(activeTab).fadeIn();
  return false;
});