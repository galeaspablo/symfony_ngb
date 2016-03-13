//base breakpoints
breakpointXWide = 1600;
breakpointWide = 1023;
breakpointTablet = 768;
breakpointMobile = 479;
breakpointMini = 320;

//derived
breakpointXWideP1 = breakpointXWide + 1;
breakpointWideP1 = breakpointWide + 1;
breakpointTabletP1 = breakpointTablet + 1;
breakpointMobileP1 = breakpointMobile + 1;
breakpointMiniP1 = breakpointMini + 1;

(function($){
    /*****************************
     ** Helper Functions & Such **
     *****************************/
        // scroll viewto selector
        // example: $('#some-div').scrollView();
    $.fn.scrollView = function () {
        return this.each(function () {
            $('html, body').animate({
                scrollTop: $(this).offset().top
            }, 50);
        });
    }
    // don't use window.width to get window with - that doesn't match with media queries
    // instead use window.viewport().width
    window.viewport = function(){
        var e = window, a = 'inner';
        if (!('innerWidth' in window )) {
            a = 'client';
            e = document.documentElement || document.body;
        }
        return { width : e[ a+'Width' ] , height : e[ a+'Height' ] };
    }
})(jQuery);