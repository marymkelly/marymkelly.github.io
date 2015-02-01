//nav.js	
$(document).ready(function(){
    $(".glyphicon-align-justify").addClass("clicked");
    });
    $(document).ready(function(){
    $(".glyphicon-align-justify").click(function(){
        if($(".glyphicon-align-justify").hasClass("clicked")){
        $(".nav").fadeIn()
        $(".navtoggle").animate({right:'20%'}, {duration: 600})
        $(".glyphicon-align-justify").removeClass("clicked");
    }else {
    	$(".nav").animate({right:'-20%'}, {duration: 600})
    	$(".navtoggle").animate({right:'1%'}, {duration: 600})
    	$(".glyphicon-align-justify").addClass("clicked");}
    });
	});

/*$(document).ready(function(){
    $(".glyphicon-align-justify").removeClass("clicked");
    });
    $(document).ready(function(){
    $( ".glyphicon-align-justify" ).mouseover(function(){
        $(".navtoggle").animate({right:'20%'}, {duration: 400});
        $(".nav").animate({right:'0%'}, {duration: 400}).hover(function(){
    }, function(){
        $(".nav").animate({right:'-20%'}, {duration: 400})
        $(".navtoggle").animate({right:'1%'}, {duration: 400})
    });
    });
    });*//