//nav.js	
(function(j){
    var arrowup = $('.scrolltop');
    var navout = $('.navtoggle');
    var nav = $('.nav');


    navout.click(function(){
        navout.animate({right:'15%'});
        nav.delay(150).slideDown();
    });

    nav.hover(function(){
        nav.show(); }, function(){
        nav.hide('slow');
        navout.animate({right:'1%'});
    });

    $(window).scroll(function(){                         
        if ($(this).scrollTop() > 100) {
            arrowup.fadeIn(500);
        } else {
            arrowup.fadeOut(500);
        }
    });
           
    arrowup.click(function() {
        if ($(window).scrollTop() == 0) {
            $("html, body").animate({scrollTop:$(document).height()}, 500);
        } else {
            $("html, body").animate({scrollTop:0}, 500);
        }
    });

    $('a').click(function(){
    $('html, body').animate({
        scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top
    }, 700);
    return false;
    });

})(jQuery);