/*$(document).ready(function(){
$("#co").hover(function() {
    $("#co").css("background-color","blue");
});
});*/

/*$("#co")
    .fadeOut()
    .delay(1000)
    .queue(function() {
        $(this).css("background-color","blue").dequeue();
    }
    )
    .fadeIn();*/

 /* $(document).ready(function(){
  var colors = ["#CCCCCC","#333333","#990099"];                
  var rand = Math.floor(Math.random()*colors.length); 
  $("#co")
    .fadeOut()
    .delay(200)
    .queue(function() {
        $(this).css("background-color", colors[rand]).dequeue();
    }
    )
    .fadeIn();

     $("#co")
    .delay(200)
    .queue(function() {
        $(this).css("background-color", "blue").delay(400).dequeue();
    }
    )
    .fadeIn();
   
  //$('#co').css("background-color", colors[rand]);
});*/

/*var colors = ["#CCCCCC","#333333","#990099"]; 
var colors2 = ["#ed3", "#3de", "#8C001A"];              
var rand = Math.floor(Math.random()*colors.length); */

function fadeDivIn(){
    $("#co").animate({'background-color': "#CCCCCC" }, 4000, function(){fadeDiv2();});
}
function fadeDiv2(){
    $("#co").animate({'background-color': "#333333" }, 4000, function(){fadeDiv3();});
}

function fadeDiv3(){
    $("#co").animate({backgroundColor: "#f7f7f7" }, 4000, function(){fadeDiv4();});
}

function fadeDiv4(){
    $("#co").animate({backgroundColor: "#3de" }, 4000, function(){fadeDiv5();});
}

function fadeDiv5(){
    $("#co").animate({backgroundColor: "#8C001A" }, 4000, function(){fadeDivIn();});
}

$(document).ready(function(){
    fadeDivIn();
})