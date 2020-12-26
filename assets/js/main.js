(function($){
    "use strict";
    	 // PRELOADER JS CODE
	 jQuery(window).on('load',function(){
		jQuery(".loader_box").fadeOut(500);
		});
	// END PRELOADER JS CODE

	// START MENU JS CODE
	$(window).on('scroll', function() {
		if ($(this).scrollTop() > 100) {
			$('.top_bar').addClass('menu-shrink animated slideInDown');
		} else {
			$('.top_bar').removeClass('menu-shrink animated slideInUp');
		}
	});

	// data-background
	$("[data-background]").each(function(){
		$(this).css("background-image", "url("+ $(this).attr("data-background") + ")")
	});
  
    //   END RESPONSIVE MAIN MENU JS
    
        $(".header_left").click(function(e) {
          e.preventDefault();
          $(this).toggleClass("menu_show");
	  });
	  
	//   $('.header_left').click(function(){
	// 	$('#nav_icon').toggleClass('open');
	// });


	  $('[data-toggle="tooltip"]').tooltip();

		//   TO-TOP
    $('.to-top').toTop({
      //options with default values
      autohide: true,  //boolean 'true' or 'false'
      offset: 420,     //numeric value (as pixels) for scrolling length from top to hide automatically
      speed: 400,      //numeric value (as mili-seconds) for duration
      position:true,   //boolean 'true' or 'false'. Set this 'false' if you want to add custom position with your own css
      left: 15,       //numeric value (as pixels) for position from right. It will work only if the 'position' is set 'true'
      bottom: 30       //numeric value (as pixels) for position from bottom. It will work only if the 'position' is set 'true'
  });


  // ROUND TEXT
//   $(".circel_text_1").lettering();

//   TOP STORES CATAGORY
$('.top_stores_ctn').slick({
	infinite: true,
	slidesToShow: 4,
	slidesToScroll: 4,
	autoplay: true,
	autoplaySpeed: 2000,
	dots:false,
	responsive: [
		{
		  breakpoint: 1024,
		  settings: {
			slidesToShow: 4,
			slidesToScroll: 2,
			infinite: true,
			dots: false,
		  }
		},
		{
		  breakpoint: 600,
		  settings: {
			slidesToShow: 3,
			slidesToScroll: 1
		  }
		},
		{
		  breakpoint: 480,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		  }
		}
	  ]
  });
	  
  
  //   TOP STORES CATAGORY
$('.sponsor_slider').slick({
	infinite: true,
	slidesToShow: 6,
	slidesToScroll: 4,
	autoplay: true,
	autoplaySpeed: 3000,
	dots:false,
	responsive: [
		{
		  breakpoint: 1024,
		  settings: {
			slidesToShow: 4,
			slidesToScroll: 2,
			infinite: true,
			dots: false,
		  }
		},
		{
		  breakpoint: 600,
		  settings: {
			slidesToShow: 3,
			slidesToScroll: 1
		  }
		},
		{
		  breakpoint: 480,
		  settings: {
			slidesToShow: 2,
			slidesToScroll: 2
		  }
		}
	  ]
  });

  // RELATED PRODUCT

  $('.related_pro_slider').slick({
	infinite: true,
	slidesToShow: 4,
	slidesToScroll: 4,
	autoplay: true,
	autoplaySpeed: 3000,
	dots:false,
	 // Enable Next/Prev arrows
	 arrows: true,
	 // prev arrow
	 prevArrow: '<button type="button" data-role="none" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
   
	 // next arrow
	 nextArrow: '<button type="button" data-role="none" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
	responsive: [
		{
		  breakpoint: 1024,
		  settings: {
			slidesToShow: 4,
			slidesToScroll: 2,
			infinite: true,
			dots: false,
		  }
		},
		{
		  breakpoint: 600,
		  settings: {
			slidesToShow: 3,
			slidesToScroll: 1
		  }
		},
		{
		  breakpoint: 480,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		  }
		}
	  ]
  });

//   SINGLE PAGE SLIDER

$('.banner_img').owlCarousel({
	rtl:true,
	loop:true,
	margin:10,
	nav:false,
	autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
	dots:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

// SMART CITY  SINGLE PAGE SLIDER
$('.banner_2_img').owlCarousel({
	loop:true,
	margin:10,
	nav:false,
	autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
	dots:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
// Video Play Button Js
$('#play-video').on('click', function(e){
	e.preventDefault();
	$('#video-overlay').addClass('open');
	$("#video-overlay").append('<iframe width="700" height="400" src="https://www.youtube.com/embed/ngElkyQ6Rhs" frameborder="0" allowfullscreen></iframe>');
  });
  
  $('.video-overlay, .video-overlay-close').on('click', function(e){
	e.preventDefault();
	close_video();
  });
  
  $(document).keyup(function(e){
	if(e.keyCode === 27) { close_video(); }
  });
  
  function close_video() {
	$('.video-overlay.open').removeClass('open').find('iframe').remove();
  };
// WOW JS
new WOW().init();

// USER DASHBOARD BREADCRUMB

$('.items a').on('click', function() {
	var $this = $(this),
		$bc = $('<div class="item"></div>');
  
	$this.parents('li').each(function(n, li) {
		var $a = $(li).children('a').clone();
		$bc.prepend(' / ', $a);
	});
	  $('.breadcrumb').html( $bc.prepend('<a href="index.html"><i class="fas fa-store-alt"></i>/ </a>account') );
	  return false;
  }) 

$('.user_13').click(function(){
	$('#address_book').hide();
	$('#address_book_2').show();
});


		$('.user_1').click(function(){
			$('#breadcrumb_nav_ctn, #pass_word, #address_book, #my_wish_list, #order_history, #account_downloads, #reward_points, #product_returns, #your_transactions, #recurring_payments, #affiliate_account, #newsletter_subscription, #logout').hide();
			$('#edit_account').show();
		});

		$('.user_2').click(function(){
			$('#breadcrumb_nav_ctn, #edit_account, #address_book, #my_wish_list, #order_history, #account_downloads, #reward_points, #product_returns, #your_transactions, #recurring_payments, #affiliate_account, #newsletter_subscription, #logout').hide();
			$('#pass_word').show();
		});

		$('.user_3').click(function(){
			$('#breadcrumb_nav_ctn, #edit_account, #pass_word, #my_wish_list, #order_history, #account_downloads, #reward_points, #product_returns, #your_transactions, #recurring_payments, #affiliate_account, #newsletter_subscription, #logout').hide();
			$('#address_book').show();
		});

		$('.user_4').click(function(){
			$('#breadcrumb_nav_ctn, #edit_account, #pass_word, #address_book, #order_history, #account_downloads, #reward_points, #product_returns, #your_transactions, #recurring_payments, #affiliate_account, #newsletter_subscription, #logout').hide();
			$('#my_wish_list').show();
		});

		$('.user_5').click(function(){
			$('#breadcrumb_nav_ctn, #edit_account, #pass_word, #address_book, #my_wish_list, #account_downloads, #reward_points, #product_returns, #your_transactions, #recurring_payments, #affiliate_account, #newsletter_subscription, #logout').hide();
			$('#order_history').show();
		});

		$('.user_6').click(function(){
			$('#breadcrumb_nav_ctn, #edit_account, #pass_word, #address_book, #my_wish_list, #order_history, #reward_points, #product_returns, #your_transactions, #recurring_payments, #affiliate_account, #newsletter_subscription, #logout').hide();
			$('#account_downloads').show();
		});

		$('.user_7').click(function(){
			$('#breadcrumb_nav_ctn, #edit_account, #pass_word, #address_book, #my_wish_list, #order_history, #account_downloads, #product_returns, #your_transactions, #recurring_payments, #affiliate_account, #newsletter_subscription, #logout').hide();
			$('#reward_points').show();
		});

		$('.user_8').click(function(){
			$('#breadcrumb_nav_ctn, #edit_account, #pass_word, #address_book, #my_wish_list, #order_history, #account_downloads, #reward_points, #your_transactions, #recurring_payments, #affiliate_account, #newsletter_subscription, #logout').hide();
			$('#product_returns').show();
		});

		$('.user_9').click(function(){
			$('#breadcrumb_nav_ctn, #edit_account, #pass_word, #address_book, #my_wish_list, #order_history, #account_downloads, #reward_points, #product_returns, #recurring_payments, #affiliate_account, #newsletter_subscription, #logout').hide();
			$('#your_transactions').show();
		});

		$('.user_10').click(function(){
			$('#breadcrumb_nav_ctn, #edit_account, #pass_word, #address_book, #my_wish_list, #order_history, #account_downloads, #reward_points, #product_returns, #your_transactions, #affiliate_account, #newsletter_subscription, #logout').hide();
			$('#recurring_payments').show();
		});

		$('.user_11').click(function(){
			$('#breadcrumb_nav_ctn, #edit_account, #pass_word, #address_book, #my_wish_list, #order_history, #account_downloads, #reward_points, #product_returns, #your_transactions, #recurring_payments, #newsletter_subscription, #logout').hide();
			$('#affiliate_account').show();
		});

		$('.user_12').click(function(){
			$('#breadcrumb_nav_ctn, #edit_account, #pass_word, #address_book, #my_wish_list, #order_history, #account_downloads, #reward_points, #product_returns, #your_transactions, #recurring_payments, #affiliate_account, #logout').hide();
			$('#newsletter_subscription').show();
		});

		// RIGHT SIDE MENUBAR
		$('.right_bar_1').click(function(){
			$('#breadcrumb_nav_ctn, #pass_word, #address_book, #my_wish_list, #order_history, #account_downloads, #reward_points, #product_returns, #your_transactions, #recurring_payments, #affiliate_account, #newsletter_subscription, #logout').hide();
			$('#edit_account').show();
		});
		$('.right_bar_2').click(function(){
			$('#breadcrumb_nav_ctn, #edit_account, #address_book, #my_wish_list, #order_history, #account_downloads, #reward_points, #product_returns, #your_transactions, #recurring_payments, #affiliate_account, #newsletter_subscription, #logout').hide();
			$('#pass_word').show();
		});
		$('.right_bar_3').click(function(){
			$('#breadcrumb_nav_ctn, #edit_account, #pass_word, #my_wish_list, #order_history, #account_downloads, #reward_points, #product_returns, #your_transactions, #recurring_payments, #affiliate_account, #newsletter_subscription, #logout').hide();
			$('#address_book').show();
		});
		$('.right_bar_4').click(function(){
			$('#breadcrumb_nav_ctn, #edit_account, #pass_word, #address_book, #order_history, #account_downloads, #reward_points, #product_returns, #your_transactions, #recurring_payments, #affiliate_account, #newsletter_subscription, #logout').hide();
			$('#my_wish_list').show();
		});
		$('.right_bar_5').click(function(){
			$('#breadcrumb_nav_ctn, #edit_account, #pass_word, #address_book, #my_wish_list, #account_downloads, #reward_points, #product_returns, #your_transactions, #recurring_payments, #affiliate_account, #newsletter_subscription, #logout').hide();
			$('#order_history').show();
		});
		$('.right_bar_6').click(function(){
			$('#breadcrumb_nav_ctn, #edit_account, #pass_word, #address_book, #my_wish_list, #order_history, #reward_points, #product_returns, #your_transactions, #recurring_payments, #affiliate_account, #newsletter_subscription, #logout').hide();
			$('#account_downloads').show();
		});
		$('.right_bar_7').click(function(){
			$('#breadcrumb_nav_ctn, #edit_account, #pass_word, #address_book, #my_wish_list, #order_history, #account_downloads, #product_returns, #your_transactions, #reward_points, #affiliate_account, #newsletter_subscription, #logout').hide();
			$('#recurring_payments').show();
		});
		$('.right_bar_8').click(function(){
			$('#breadcrumb_nav_ctn, #edit_account, #pass_word, #address_book, #my_wish_list, #order_history, #account_downloads, #product_returns, #your_transactions, #recurring_payments, #affiliate_account, #newsletter_subscription, #logout').hide();
			$('#reward_points').show();
		});
		$('.right_bar_9').click(function(){
			$('#breadcrumb_nav_ctn, #edit_account, #pass_word, #address_book, #my_wish_list, #order_history, #account_downloads, #reward_points, #your_transactions, #recurring_payments, #affiliate_account, #newsletter_subscription, #logout').hide();
			$('#product_returns').show();
		});
		$('.right_bar_10').click(function(){
			$('#breadcrumb_nav_ctn, #edit_account, #pass_word, #address_book, #my_wish_list, #order_history, #account_downloads, #reward_points, #product_returns, #recurring_payments, #affiliate_account, #newsletter_subscription, #logout').hide();
			$('#your_transactions').show();
		});
		$('.right_bar_11').click(function(){
			$('#breadcrumb_nav_ctn, #edit_account, #pass_word, #address_book, #my_wish_list, #order_history, #account_downloads, #reward_points, #product_returns, #recurring_payments, #affiliate_account, #your_transactions, #newsletter_subscription, #logout').hide();
			$('#newsletter_subscription').show();
		});
		$('.right_bar_12').click(function(){
			$('#breadcrumb_nav_ctn, #edit_account, #pass_word, #address_book, #my_wish_list, #order_history, #account_downloads, #reward_points, #product_returns, #your_transactions, #recurring_payments, #affiliate_account').hide();
			$('#logout').show();
		});

		$('.form_vendore_input').click(function(){
			$('#vendore').show();
		});
		$('.form_coustomer_input').click(function(){
			$('#vendore').hide();
		});

		$('#sort_btn').click(function(){
			$('.sort_by_option').toggle();
		});

		// HOUSE FILTER AREA ACTIVE CLASS ADD & REMOVE
		$('.box_ctn a').click(function(){
			$('.box_ctn a').removeClass("active");
			$(this).addClass("active");
		});
		  
		// HOTEL FILTER PAGE JS
		$('.hotel_sub_cntrol').click(function(){
			$('.sub_cat_htel').toggle();
		});
		$('.edu_sub_cntrol_1').click(function(){
			$('.sub_cat_htel_1').toggle();
		});
		$('.edu_sub_cntrol_2').click(function(){
			$('.sub_cat_htel_2').toggle();
		});
		$('.edu_sub_cntrol_3').click(function(){
			$('.sub_cat_htel_3').toggle();
		});
		$('.edu_sub_cntrol_4').click(function(){
			$('.sub_cat_htel_4').toggle();
		});
		$('.edu_sub_cntrol_5').click(function(){
			$('.sub_cat_htel_5').toggle();
		});

		// INNERBG Animation
		var multi_shap = "";
		for (var i = 1; i <= 50; i++) {
			multi_shap +=
			'<div class="shape-container--' +
			i +
			' shape-animation"><div class="random-shape"></div></div>';
		}
	  
		document.querySelector(".shape").innerHTML += multi_shap;
		
		// ACCRODION
		$('.ziehharmonika').ziehharmonika({

			// To use a headline tag other than h3, adjust or overwrite ziehharmonika.css as well
			headline: 'h3',
		  
			// Give headlines a certain prefix, e.g. "♫ My headline"
			prefix: false,
		  
			// Only 1 accordion can be open at any given time
			highlander: true,
		  
			// Allow or disallow last open accordion to be closed
			collapsible: false,
		  
			// Arrow down under headline
			arrow: true,
		  
			// Opened/closed icon on the right hand side of the headline (either false or JSON containing symbols or image paths)
			collapseIcons: {
			  opened: '&ndash;',
			  closed: '+'
			},
		  
			// alignment of collapse icon
			collapseIconsAlign: 'right',
		  
			// <a href="https://www.jqueryscript.net/tags.php?/Scroll/">Scroll</a> to opened accordion element
			scroll: true
			
		  });

})(jQuery);
