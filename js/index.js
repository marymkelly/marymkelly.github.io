//index.js

(function(j){

	var navout = $('.navtoggle');
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
    $('.col-md-4').animate({'width':'90%'}, 0)
    $('#test').css({'padding-left':'0%'})
    foliobox.css({'padding-top':'45%'})
}

    $(window).scroll(function(){                         
        if ($(this).scrollTop() > 500) {
            navout.fadeIn(500);
        } else {
            navout.fadeOut(500);
        }
    });

})(jQuery);

/* Code Below Borrowed from Gregory Schier for the typing function http://codepen.io/gschier/pen/jkivt */

var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};