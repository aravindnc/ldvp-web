"use strict";

var ldvp_window = jQuery(window);
$(function(){


    /* Menu */

   	if (jQuery('.mobile_header').length > 0) {
        jQuery('.mobile_header').after('<div class="mobile_menu_wrapper"><ul class="mobile_menu"/></div>');
        jQuery('.mobile_menu').html(jQuery('.ldvp_menu_cont').find('ul.ldvp_menu').html());
        jQuery('.mobile_menu_wrapper').hide();
        jQuery('.btn_mobile_menu').on('click', function () {
            jQuery('.mobile_menu_wrapper').stop().slideToggle(300);
            jQuery('.ldvp_header').toggleClass('opened');
        });
    }

    jQuery('.mobile_menu .menu-item-has-children a').on('click', function(){
    jQuery(this).toggleClass('opened').next().slideToggle(300);
    });


	/* Swipebox */

    if (jQuery('a.swipebox-video').length) {
        jQuery('html').addClass('ldvp_swipe_box');
        jQuery('.swipebox-video').swipebox({
      selector: '.swipebox-video',
            afterOpen: function () {
                ldvp_setup_box();
            }
        });
    }
	if (jQuery('a.swipebox').length) {
        jQuery('html').addClass('ldvp_swipe_box');
        jQuery('.swipebox').swipebox({
     	selector: '.swipebox',
            afterOpen: function () {
                ldvp_setup_box();
            }
        });
    }
    function ldvp_setup_box() {
	    var swipe_slider = jQuery('#swipebox-slider'),
	        swipe_title = jQuery('#swipebox-top-bar'),
	        swipe_bottom = jQuery('#swipebox-bottom-bar'),
	        setHeight = 0;
	    setHeight = jQuery(window).height() - swipe_title.height() - swipe_bottom.height();
    swipe_slider.height(setHeight).css('top', swipe_title.height());
	}

	jQuery(document).on("click", "#swipebox-container .slide.current img", function (e) {
    	jQuery('#swipebox-next').trigger('click');
   	 e.stopPropagation();
	});

	jQuery(document).on("click", "#swipebox-container", function (e) {
    	jQuery('#swipebox-close').trigger('click');
	});

	/* Contact Form */
	
  jQuery('.ldvp_form input[type=submit]').on('click', function(){
    var this_contact = jQuery(this).parents('form');
    jQuery.post('mail.php', {
      send_mail: 'true',
      form_name: this_contact.find('input[name=name]').val(),
      form_email: this_contact.find('input[name=email]').val(),
      form_text: this_contact.find('textarea[name=message]').val(),
    }).done(function (data) {
      alert(data);
    });

    return false;
  });


  if (jQuery('.ldvp_js_bg_image').length > 0) {
        jQuery('.ldvp_js_bg_image').each(function () {
            jQuery(this).css('background-image', 'url(' + jQuery(this).attr('data-src') + ')');
        });
    }

  ldvp_countdown();
  ldvp_404_page_centered();
  // ldvp_cs_page_centered();
  if (jQuery('.ldvp_counts').length) {
   $('.ldvp_counts').viewportChecker({
    callbackFunction: function(elem, action){
      $(".spincrement").spincrement({
      thousandSeparator: "",
      duration: 2000
      }); 
    },
  });  
}


    if (jQuery('.ldvp_single_album_head').length > 0) {
        setup_ldvp_single_album();
        jQuery('html').addClass('ldvp_single_album');

        if (ldvp_window.scrollTop() > 10) {
            jQuery('html').addClass('header_scrolled');
        }
        ldvp_window.on('scroll', function () {
            if (ldvp_window.scrollTop() > 10) {
                jQuery('html').addClass('header_scrolled');
            } else {
                jQuery('html').removeClass('header_scrolled');
            }
        });
        jQuery('a.ldvp_album_down_arrow').on('click', function () {
            
             var ldvp_album_featured_height = ldvp_window.height();
           

            jQuery('html, body').stop().animate({scrollTop: ldvp_album_featured_height + 'px'}, 600);
        });
    }

    


  
    /* Back To Top */

    jQuery('.ldvp_back_to_top').attr('data-bottom', parseInt(jQuery('.ldvp_back_to_top').css('bottom'), 10));
    if (ldvp_window.scrollTop() > ldvp_window.height()) {
        jQuery('.ldvp_back_to_top').addClass('ldvp_show_me');
    } else {
        jQuery('.ldvp_back_to_top').removeClass('ldvp_show_me');
        if (jQuery('.ldvp_footer').length > 0) {
            var footer_offset = jQuery('.ldvp_footer').offset().top,
                check_footer_state = ldvp_window.scrollTop() + ldvp_window.height(),
                ldvp_footer_showed = 'no',
                ldvp_b2t_fixer = 0;
                
            if ( check_footer_state >= footer_offset) {
                ldvp_b2t_fixer = check_footer_state - footer_offset;
                ldvp_footer_showed = 'yes';
            } else {
                ldvp_footer_showed = 'no';
                ldvp_b2t_fixer = 0;
            }
            jQuery('.ldvp_back_to_top').css('bottom', parseInt(jQuery('.ldvp_back_to_top').attr('data-bottom'), 10) + ldvp_b2t_fixer + 'px');
        }
    }
    ldvp_window.on('scroll', function(){
        if (ldvp_window.scrollTop() > ldvp_window.height()/2) {
            jQuery('.ldvp_back_to_top').addClass('ldvp_show_me');
        } else {
            jQuery('.ldvp_back_to_top').removeClass('ldvp_show_me');
        }
        if (jQuery('.ldvp_footer').length > 0) {
            var footer_offset = jQuery('.ldvp_footer').offset().top,
                check_footer_state = ldvp_window.scrollTop() + ldvp_window.height(),
                ldvp_footer_showed = 'no',
                ldvp_b2t_fixer = 0;
                
            if ( check_footer_state >= footer_offset) {
                ldvp_b2t_fixer = check_footer_state - footer_offset;
                ldvp_footer_showed = 'yes';
            } else {
                ldvp_footer_showed = 'no';
                ldvp_b2t_fixer = 0;
            }
            jQuery('.ldvp_back_to_top').css('bottom', parseInt(jQuery('.ldvp_back_to_top').attr('data-bottom'), 10) + ldvp_b2t_fixer + 'px');
        }
    });
    jQuery('.ldvp_back_to_top').on('click', function(){
        jQuery('html, body').stop().animate({scrollTop: 0}, 400, function(){
            jQuery('.ldvp_back_to_top').removeClass('ldvp_show_me');
        });
    });
});


jQuery(window).on('load', function(){
    if (jQuery('.ldvp_preloader_wrapper').length > 0) {
        jQuery('.ldvp_preloader_wrapper').addClass('remove_preloader');
        setTimeout("jQuery('.ldvp_preloader_wrapper').remove()", 600);
    }
    
    if (jQuery('.ldvp_slider1i_auto_height').length) {
    $('.ldvp_slider1i_auto_height').owlCarousel({
        slideSpeed:200, 
        items:1,
        // autoplay: true,
        autoplayTimeout:2000,
        smartSpeed:200,
        autoplayHoverPause:true,
        autoHeight:true,
        nav: true,
        loop:true
    });
    }

    $(function(){
    var tabContainers = $('div.container > div');
  
    $('div.container ul.tabs a').on('click', function(){
        tabContainers.fadeOut(400);
        tabContainers.filter(this.hash).fadeIn(600);
        $('div.container ul.tabs a').removeClass('active');
        $(this).addClass('active');
        return false;
  }).filter('.active').click();

    })
   
});
jQuery(window).resize(function(){
    ldvp_404_page_centered();
    if (jQuery('.ldvp_blog_grid_ratio').length > 0) {
        jQuery('.ldvp_blog_grid_ratio').each(function () {
            var setHeight = Math.floor(jQuery(this).width() * jQuery(this).attr('data-ratio'));
            jQuery(this).height(setHeight);
        });
    }
    
});



/* About slider */

	if (jQuery('.ldvp_slider1i').length) {
	$('.ldvp_slider1i').owlCarousel({
	    slideSpeed:200, 
	    items:1,
	    autoplay: true,
        navText: ["",""],
	    autoplayTimeout:2000,
	    smartSpeed:200,
	    autoplayHoverPause:true,
	    nav: true,
	    loop:true
	});
	}
    if (jQuery('.ldvp_slider1i_anim').length) {
    $('.ldvp_slider1i_anim').owlCarousel({
        slideSpeed:200, 
        items:1,
        // autoplay: true,
        navText: ["",""],
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplayTimeout:4000,
        smartSpeed:200,
        autoplayHoverPause:true,
        nav: true,
        loop:true
    });
    }
    
/* Isopope */

	if (jQuery('.grid').length) {
	var $grid = $('.grid').imagesLoaded().progress( function() {
	        $grid.isotope({
	            itemSelector: '.grid-item',
	            layoutMode: 'fitRows'
	        });
	    }); 

	    // bind filter button click
	    $('.filters-button-group').on( 'click', 'button', function() {
	        var filterValue = $( this ).attr('data-filter');
	        // use filterFn if matches value
	      
	    $grid.isotope({ filter: filterValue });
	    });
	    // change is-checked class on buttons
	    $('.button-group').each( function( i, buttonGroup ) {
	        var $buttonGroup = $( buttonGroup );
	        $buttonGroup.on( 'click', 'button', function() {
	        $buttonGroup.find('.is-checked').removeClass('is-checked');
	        $( this ).addClass('is-checked');
	        });
	    })
	}
 


	if (jQuery('.grid1').length) {
	var $grid1 = $('.grid1').imagesLoaded().progress( function() {
	        $grid1.isotope({
	            itemSelector: '.grid-item'
	            
	        });
	    });     
	}

     // Iframes in Blog Listings
    var ldvp_iframe = jQuery('.ldvp_post_formats iframe'),
        ldvp_iframe_width = jQuery(ldvp_iframe).width();

    jQuery(ldvp_iframe).height(ldvp_iframe_width);


	function ldvp_countdown() {
    jQuery('.ldvp_countdown').each(function(){
        var pm_year = jQuery(this).attr('data-year'),
            pm_month = jQuery(this).attr('data-month'),
            pm_day = jQuery(this).attr('data-day'),
            austDay = new Date(pm_year, pm_month - 1, pm_day);

        jQuery(this).countdown({
            until: austDay,
            padZeroes: true
        });
    });
	}

    function ldvp_404_page_centered(){
    var container_404_height = jQuery(window).height() - jQuery('header').height(),
        inner_container_404_height = jQuery('.ldvp_404_content_inner').height();

    if (inner_container_404_height < container_404_height) {
        var white_space = container_404_height - inner_container_404_height;

        jQuery('.ldvp_404_content_wrapper').css({'padding-top': white_space / 2, 'padding-bottom': white_space / 2});
    }
}


