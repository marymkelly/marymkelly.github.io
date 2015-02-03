//index.js

(function(j){

    var foliobox = $('.folio-caption');
    var web = $('.web');
    var design = $('.design');
    var colors = ["#990000", "#000b42", "#ffce00", "#fb7200", "#008000",
    "#470000", "#00bfff", "#772ed6", "#ff0000", "#12cf3c"];

    j(foliobox).hover(function(){
    j(this).animate({'opacity':'.8', 'background-color':colors[Math.floor(Math.random() * colors.length)]})}, function(){
    j(this).animate({'opacity':'.6', 'background-color':'black'})
    });

    $(".cweb").click(function(){
    web.show('slide')
    design.hide('slide')
    $('.cweb').css({'color':'black'})
    $('.c-all, .cdesign').css({'color':'gray'})
    });

    $(".c-all").click(function(){
    web.show('slide')
    design.show('slide')
    $('.c-all').css({'color':'black'})
    $('.cweb, .cdesign').css({'color':'gray'})
    });

    $(".cdesign").click(function(){
    web.hide('slide')
    design.delay(200).show('slide')
    $('.cdesign').css({'color':'black'})
    $('.c-all, .cweb').css({'color':'gray'})
    });


    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    navout.hide();
    arrowup.hide();
    $('.col-md-4').css({'width':'90%'})
    $('#test').css({'padding-left':'0%'})
    foliobox.css({'padding-top':'45%'})
}

})(jQuery);