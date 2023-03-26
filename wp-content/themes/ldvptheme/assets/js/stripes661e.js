"use strict";
$(function () {
    ldvp_setup_stripes();
    if (jQuery('.stripes_fullscreen_on').length > 0) {
        jQuery('html').addClass('ldvp_stripes_fullscreen').addClass('ldvp_transparent_header');
        if (jQuery('.stripes_fullscreen_on').length > 1) {
            jQuery('.stripes_fullscreen_on:not(:first)').remove();
        }
        jQuery('footer.ldvp_footer').remove();
    }
});

jQuery(window).resize(function () {
    ldvp_setup_stripes();
});

jQuery(window).on('load', function () {
    ldvp_setup_stripes();
});

function ldvp_setup_stripes() {
    if (jQuery('#wpadminbar').length > 0) {
        var setTop = jQuery('#wpadminbar').height();

        if (jQuery('.stripes_fullscreen_on').length > 0) {
            var setHeight = jQuery(window).height() - jQuery('#wpadminbar').height();
        } else {
            setHeight = jQuery(window).height() - jQuery('#wpadminbar').height() - jQuery('header').height();
        }
    } else {
        setTop = 0;

        

        if (jQuery('.stripes_fullscreen_on').length > 0) {
            setHeight = jQuery(window).height();
        } else {
            setHeight = jQuery(window).height() - 223; //jQuery('header').height();
        }
    }

    if (jQuery('.stripes_fullscreen_on').length > 0) {
        jQuery('.stripes_fullscreen_on').height(setHeight).css('top', setTop + 'px');
    } else {
        jQuery('.ldvp_stripes').height(setHeight);
    }
    jQuery('.ldvp_stripes').each(function () {
        var set_width = Math.floor(jQuery(this).width() / jQuery(this).find('.ldvp_stripes_item').length);
        jQuery(this).find('.ldvp_stripes_item').width(set_width).height(setHeight);
    });
}