
function main() {

(function () {
   'use strict';
   
  	$('a.page-scroll').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top - 50
            }, 900);
            return false;
          }
        }
      });


    $('body').scrollspy({ 
        target: '.navbar-default',
        offset: 80
    });

	// Hide nav on click
  $(".navbar-nav li a").click(function (event) {
    // check if window is small enough so dropdown is created
    var toggle = $(".navbar-toggle").is(":visible");
    if (toggle) {
      $(".navbar-collapse").collapse('hide');
    }
  });
	
	
    // Nivo Lightbox 
    $('.portfolio-item a').nivoLightbox({
            effect: 'slideDown',  
            keyboardNav: true,                            
        });
		
}());


}
main();

$(function(){
  $('.company-photo > img:gt(0)').hide();
      setInterval(function(){
  $('.company-photo > img:first')
      .fadeOut(1000)
      .next()
      .fadeIn(1000)
      .end()
      .appendTo('.company-photo');
},2000);
});


$(function(){
  $('#blue').click(function(){
    $('.color_1').hide();
    $('.color_3').hide();
    $('.color_4').hide();
    $('.color_2').fadeIn();
    $('#green-1').hide();
    $('#red-1').hide();
    $('#black-1').hide();
    $('#blue-1').fadeIn();

  });
  $('#green').click(function(){
    $('.color_2').hide();
    $('.color_3').hide();
    $('.color_4').hide();
    $('.color_1').fadeIn();
    $('#green-1').fadeIn();
    $('#red-1').hide();
    $('#black-1').hide();
    $('#blue-1').hide();
  });
  $('#red').click(function(){
    $('.color_1').hide();
    $('.color_2').hide();
    $('.color_4').hide();
    $('.color_3').fadeIn();
    $('#green-1').hide();
    $('#red-1').fadeIn();
    $('#black-1').hide();
    $('#blue-1').hide();
  });
  $('#black').click(function(){
    $('.color_1').hide();
    $('.color_2').hide();
    $('.color_3').hide();
    $('.color_4').fadeIn();
    $('#green-1').hide();
    $('#red-1').hide();
    $('#black-1').fadeIn();
    $('#blue-1').hide();
  });
});

$(function(){
  $('.buynow').click(function(){
    $(location).attr("href", "buying.html");
  });
  $('.cart').click(function(){
    $(location).attr("href", "cart.html");
  });
});

