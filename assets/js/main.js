
(function($){
	"use strict";
	
    	 // PRELOADER JS CODE
	 jQuery(window).on('load',function(){
		jQuery(".loader_box").fadeOut(500);
		});
	// END PRELOADER JS CODE
	// START MEANMENU JS CODE
    jQuery(document).ready(function () {
        jQuery('.top_mid_menu').meanmenu();
	});
	// END MEANMENU JS CODE
	// START MENU JS CODE
	// $(window).on('scroll', function() {
	// 	if ($(this).scrollTop() > 100) {
	// 		$('.top_bar').addClass('menu-shrink animated slideInDown');
	// 	} else {
	// 		$('.top_bar').removeClass('menu-shrink animated slideInUp');
	// 	}
	// });

	$(window).on('scroll', function() {
		if ($(this).scrollTop() > 100) {
			$('header.sm_header_area').addClass('menu-shrink animated slideInDown');
		} else {
			$('header.sm_header_area').removeClass('menu-shrink animated slideInUp');
		}
	});
	// // SMART CITY
	// 	// START MENU JS CODE
	// 	$(window).on('scroll', function() {
	// 		if ($(this).scrollTop() > 100) {
	// 			$('.sm_header_area').addClass('sm_menu-shrink animated slideInDown');
	// 		} else {
	// 			$('.sm_header_area').removeClass('sm_menu-shrink animated slideInUp');
	// 		}
	// 	});
  	//   END RESPONSIVE MAIN MENU JS
	// data-background
	$("[data-background]").each(function(){
		$(this).css("background-image", "url("+ $(this).attr("data-background") + ")")
	});
  
	//   SHOPPING HEADER AREA LEFT MENU JS START
    
        $(".header_left").click(function(e) {
          e.preventDefault();
          $(this).toggleClass("menu_show");
	  });
	  
	//   $('.header_left').click(function(){
	// 	$('#nav_icon').toggleClass('open');
	// });

	//   SHOPPING HEADER AREA LEFT MENU JS END
	// TOOLTIP JS START
		$('[data-toggle="tooltip"]').tooltip();
	// TOOLTIP JS END
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

	//   TOP STORES CATAGORY SLICK SLIDER JS START
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
		
	//   TOP STORES CATAGORY SLICK SLIDER JS END
	//   SPONSOR SLICK SLIDER JS START
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
	//   SPONSOR SLICK SLIDER JS END
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
				slidesToShow: 3,
				slidesToScroll: 2,
				infinite: true,
				dots: false,
			}
			},
			{
			breakpoint: 993,
			settings: {
				slidesToShow: 2,
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
		// Start Play Video JS Start
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
 	// End Play Video JS 
	// WOW JS
	new WOW().init();
	// SINGLE EDUCATION & RESTURENT PAGE JS START
	document.addEventListener('DOMContentLoaded', function(){
		const tabs = document.getElementsByClassName('tab');
		for(let i = 0; i < tabs.length; i++) {
		  tabs[i].addEventListener('click', tabSwitch);
		}
	  
		function tabSwitch(){
		  document.getElementsByClassName('is-active')[0].classList.remove('is-active');
		  this.classList.add('is-active');
		  document.getElementsByClassName('is-show')[0].classList.remove('is-show');
		  const arrayTabs = Array.prototype.slice.call(tabs);
		  const index = arrayTabs.indexOf(this);
		  document.getElementsByClassName('panel')[index].classList.add('is-show');
		};
	  });

	  const tabs = document.querySelectorAll('[data-tab-target]');
	  const tabContents = document.querySelectorAll('[data-tab-content]');
	  
	  tabs.forEach(tab => {
		tab.addEventListener('click', () => {
		  const target = document.querySelector(tab.dataset.tabTarget);
		  tabContents.forEach(tabContent => {
			tabContent.style.display="none";
			tabContent.style.transform = "translateY(30px)";
			tabContent.style.opacity = "0";
		  })
		  target.style.display="block";
		  setTimeout(() => {
			target.style.opacity = "1";
			target.style.transform = "translateY(20px)";
		  }, 100)
		})
	  })

		var popup = document.getElementById('popup-wrapper');
		var btn = document.getElementById("popup-btn");
		var span = document.getElementById("close");
		btn.onclick = function() {
			popup.classList.add('show');
		}
		span.onclick = function() {
			popup.classList.remove('show');
		}

		window.onclick = function(event) {
			if (event.target == popup) {
				popup.classList.remove('show');
			}
		}

	const btns = document.querySelectorAll(".tabs__button");
	const tabContent = document.querySelectorAll(".tab-content");

	for (let i = 0; i < btns.length; i++) {
	btns[i].addEventListener("click", () => {
		addClassFunc(btns[i], "tabs__button--active");
		clearClassFunc(i, btns, "tabs__button--active");

		addClassFunc(tabContent[i], "tab-content--active");
		clearClassFunc(i, tabContent, "tab-content--active");
	});
	}

	function addClassFunc(elem, elemClass) {
	elem.classList.add(elemClass);
	}

	function clearClassFunc(indx, elems, elemClass) {
	for (let i = 0; i < elems.length; i++) {
		if (i === indx) {
		continue;
		}
		elems[i].classList.remove(elemClass);
	}
	}

		// POPPUP GALLERY JS CODE
		$('.popup-gallery').magnificPopup({
			delegate: 'a', // child items selector, by clicking on it popup will open
			type: 'image'
			// other options
		  });
		// END POPPUP GALLERY JS CODE
	
		
		// MIXITUP JS CODE
		var mixer = mixitup('#shorting');
		// SINGLE EDUCATION & RESTURENT PAGE JS START
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
	$('.hotel_sub_cntrol_11').click(function(){
		$('.sub_cat_htel_11').toggle();
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
	// SMART HOUSE LISTING FILTER BTTON PAGE JS
	$('#search_btn_1').click(function(){
		$('.sort_by_option_1').toggle();
	});
	$('#search_btn_2').click(function(){
		$('.sort_by_option_2').toggle();
	});
	$('#search_btn_3').click(function(){
		$('.sort_by_option_3').toggle();
	});
	$('#search_btn_5').click(function(){
		$('.sort_by_option_5').toggle();
	});
	$('#search_btn_6').click(function(){
		$('.sort_by_option_6').toggle();
	});
// SMART HOUSE LISTING PAGE ISOTOP FILTER START
	var $grid3 = $('.house_iso_list').isotope({
		itemSelector: '.grid-item',
		percentPosition: true,
		masonry: {
		  // use outer width of grid-sizer for columnWidth
		  columnWidth: 1,
		  columnHeight:1665
		}
	  });
	  // filter items on button click
	$('.property_type').on( 'click', 'li a', function() {
		var filterValue = $(this).attr('data-filter');
		$grid3.isotope({ filter: filterValue });
	});
	$('.filter_btn').on( 'click', '.brand_item', function() {
		var filterValue = $(this).attr('data-filter');
		$grid3.isotope({ filter: filterValue });
	});

// SMART HOUSE LISTING PAGE ISOTOP FILTER END

		// SINGLE DIVISION PAGE JS START
		$(".house_cntl_btn").click(function(e) {
			e.preventDefault();
			$('.division_service_list').toggleClass("house_show");
		});
		$(".education_cntl_btn").click(function(e) {
			e.preventDefault();
			$('.division_service_list').toggleClass("institution_show");
		});
		$(".hotel_cntl_btn").click(function(e) {
			e.preventDefault();
			$('.division_service_list').toggleClass("hotel_show");
		});
		$(".restaurant_cntl_btn").click(function(e) {
			e.preventDefault();
			$('.division_service_list').toggleClass("restaurant_show");
		});
		$(".hospital_cntl_btn").click(function(e) {
			e.preventDefault();
			$('.division_service_list').toggleClass("hospital_show");
		});
		// SINGLE DIVISION PAGE JS END
		// HOTEL BOOKING PROCESS STEP JS START
		$('.btn-next').on('click', function() {
	
			var currentStepNum = $('#checkout-progress').data('current-step');
			var nextStepNum = (currentStepNum + 1);
			var currentStep = $('.step.step-' + currentStepNum);
			var nextStep = $('.step.step-' + nextStepNum);
			var progressBar = $('#checkout-progress');
			$('.btn-prev').removeClass('disabled');
			if(currentStepNum == 4) {
				return false;
			}
			if(nextStepNum == 4){
				$(this).addClass('disabled');
			}
			$('.checkout-progress').removeClass('.step-' + currentStepNum).addClass('.step-' + (currentStepNum + 1));
			
			currentStep.removeClass('active').addClass('valid');
			currentStep.find('span').addClass('opaque');
			currentStep.find('.fa.fa-check').removeClass('opaque');
			
			nextStep.addClass('active');
			progressBar.removeAttr('class').addClass('step-' + nextStepNum).data('current-step', nextStepNum);
		});
		
		
		$('.btn-prev').on('click', function() {
			
			var currentStepNum = $('#checkout-progress').data('current-step');
			var prevStepNum = (currentStepNum - 1);
			var currentStep = $('.step.step-' + currentStepNum);
			var prevStep = $('.step.step-' + prevStepNum);
			var progressBar = $('#checkout-progress');
			$('.btn-next').removeClass('disabled');
			if(currentStepNum == 1) {
				return false;
			}
			if(prevStepNum == 1){
				$(this).addClass('disabled');
			}
			$('.checkout-progress').removeClass('.step-' + currentStepNum).addClass('.step-' + (prevStepNum));
			
			currentStep.removeClass('active');
			prevStep.find('span').removeClass('opaque');
			prevStep.find('.fa.fa-check').addClass('opaque');
			
			prevStep.addClass('active').removeClass('valid');
			progressBar.removeAttr('class').addClass('step-' + prevStepNum).data('current-step', prevStepNum);
		});
		// $('.go_next_1').click(function(){
		// 	$('#boking_step_2, #boking_step_3').hide();
		// 	$('#boking_step_1').show();
		// });
		$('.go_next_1').click(function(){
			$('#boking_step_1, #boking_step_3, #boking_step_4').hide();
			$('#boking_step_2').show();
		});
		$('.go_next_2').click(function(){
			$('#boking_step_1, #boking_step_2, #boking_step_4').hide();
			$('#boking_step_3').show();
		});
		$('.go_next_3').click(function(){
			$('#boking_step_1,#boking_step_2, #boking_step_3').hide();
			$('#boking_step_4').show();
		});
		$('.go_back_2').click(function(){
			$('#boking_step_2, #boking_step_3, #boking_step_4').hide();
			$('#boking_step_1').show();
		});
		$('.go_back_3').click(function(){
			$('#boking_step_1, #boking_step_3, #boking_step_4').hide();
			$('#boking_step_2').show();
		});
		$('#condition').click(function(){
			$('#guest_information').toggle();
		});
		// $('.redo').click(function() {
		// 	$('.success').toggle();
		// });
// HOTEL BOOKING PROCESS STEP JS END

	// INNERBG Animation START
	var multi_shap = "";
	for (var i = 1; i <= 50; i++) {
		multi_shap +=
		'<div class="shape-container--' +
		i +
		' shape-animation"><div class="random-shape"></div></div>';
	}
	
	document.querySelector(".shape").innerHTML += multi_shap;
// INNERBG Animation END
	// Isotop masonary layout for subcat area start
$('.subcat_iso_area').isotope({
	itemSelector: '.grid-item',
	percentPosition: true,
	masonry: {
	  // use outer width of grid-sizer for columnWidth
	  columnWidth: 1
	}
  });
	  // Isotop masonary layout for subcat area end
	//   Isotop for smart house latest listing area start
	var $grid1 = $('.listing_iso_area').isotope({
		itemSelector: '.grid-item',
		percentPosition: true,
		masonry: {
		  // use outer width of grid-sizer for columnWidth
		  columnWidth: 1
		}
	  });
	  // filter items on button click
	$('.latest_listing_menu').on( 'click', 'button', function() {
		var filterValue = $(this).attr('data-filter');
		$grid1.isotope({ filter: filterValue });
	});
	// Active class add & remove js start
	$('.latest_listing_menu button').on('click', function(event){
		$(this).siblings('.active').removeClass('active');
		$(this).addClass('active');
		event.preventDefault();
	});
	// Active class add & remove js end

	var $grid2 = $('.listing_iso_area').isotope({
		itemSelector: '.grid-item',
		percentPosition: true,
		masonry: {
		  // use outer width of grid-sizer for columnWidth
		  columnWidth: 2
		}
	  });
	  // filter items on button click
	$('.latest_listing_menu').on( 'click', 'button', function() {
		var filterValue = $(this).attr('data-filter');
		$grid2.isotope({ filter: filterValue });
	});
	//   Isotop for smart house latest listing area end



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


// Custom map
