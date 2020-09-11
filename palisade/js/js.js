$(function(){
  $('#moonlight').click(function(){
      $('.moonlight').css("display","block").fadeIn();
      $('.burgundy').css("display","none").fadeOut();
      $('.white').css("display","none").fadeOut();
      $('.steal').css("display","none").fadeOut();
      $('.black').css("display","none").fadeOut();
      $('.forest').css("display","none").fadeOut();
  });

  $('#white').click(function(){
      $('.moonlight').css("display","none").fadeOut();
      $('.burgundy').css("display","none").fadeOut();
      $('.white').css("display","block").fadeIn();
      $('.steal').css("display","none").fadeOut();
      $('.black').css("display","none").fadeOut();
      $('.forest').css("display","none").fadeOut();
  });

  $('#burgundy').click(function(){
      $('.moonlight').css("display","none").fadeOut();
      $('.burgundy').css("display","block").fadeIn();
      $('.white').css("display","none").fadeOut();
      $('.steal').css("display","none").fadeOut();
      $('.black').css("display","none").fadeOut();
      $('.forest').css("display","none").fadeOut();
  });

  $('#steal').click(function(){
      $('.moonlight').css("display","none").fadeOut();
      $('.burgundy').css("display","none").fadeOut();
      $('.white').css("display","none").fadeOut();
      $('.steal').css("display","block").fadeIn();
      $('.black').css("display","none").fadeOut();
      $('.forest').css("display","none").fadeOut();
  });

  $('#black').click(function(){
      $('.moonlight').css("display","none").fadeOut();
      $('.burgundy').css("display","none").fadeOut();
      $('.white').css("display","none").fadeOut();
      $('.steal').css("display","none").fadeOut();
      $('.black').css("display","block").fadeIn();
      $('.forest').css("display","none").fadeOut();
  });

  $('#forest').click(function(){
      $('.moonlight').css("display","none").fadeOut();
      $('.burgundy').css("display","none").fadeOut();
      $('.white').css("display","none").fadeOut();
      $('.steal').css("display","none").fadeOut();
      $('.black').css("display","none").fadeOut();
      $('.forest').css("display","block").fadeIn();
  });
});

$(function(){
  $('.car-back-text').click(function(){
      $('.car-front').hide();
      $('.car-back').show();
      $('.point-1,.point-2,.point-3').hide();
      $('.point-4,.point-5,.point-6').show();

      $('.car-front-text').css({backgroundColor:"black", color:"white"});
      $('.car-back-text').css({backgroundColor:"white", color:"black", border:"1px solid gray"});
  });
  $('.car-front-text').click(function(){
      $('.car-back').hide();
      $('.car-front').show();
      $('.point-1,.point-2,.point-3').show();
      $('.point-4,.point-5,.point-6').hide();

      $('.car-back-text').css({backgroundColor:"black", color:"white"});
      $('.car-front-text').css({backgroundColor:"white", color:"black", border:"1px solid gray"});
  });
});

$(function(){
  $('.button-1,.button-4').click(function(){
      $('.ex01,.ex03').hide();
      $('.ex02,.ex04').show();
      $('.ex07').hide();
      $('.ex06').show();
  });
  $('.button-2,.button-3').click(function(){
      $('.ex01,.ex03').show();
      $('.ex02,.ex04').hide();
      $('.ex07').show();
      $('.ex06').hide();
  });
});

$(function(){
  $('.space-photo > .row > .col-sm-4').hover(function(){
      $(this).children('.space-photo p').stop().fadeToggle();
  });
  $('.space-photo-2 > .row > .space-1 > .col-sm-3').hover(function(){
      $(this).children('.space-photo-2 p').stop().fadeToggle();
  });
  $('.space-photo-2 > .row > .space-2 > .col-sm-3').hover(function(){
      $(this).children('.space-photo-2 p').stop().fadeToggle();
  });
});

$(function(){
  $('.space-back-text').click(function(){
      $('.space-photo-2').fadeIn();
      
      $('.space-photo').fadeOut();
      $('.space-front-text').css({backgroundColor:"black", color:"white"});
      $('.space-back-text').css({backgroundColor:"white", color:"black", border:"1px solid gray"});
  });
  $('.space-front-text').click(function(){
      $('.space-photo-2').fadeOut();
      $('.space-photo').fadeIn();
      

      $('.space-back-text').css({backgroundColor:"black", color:"white"});
      $('.space-front-text').css({backgroundColor:"white", color:"black", border:"1px solid gray"});
  });
});

$(function(){
  $('.sit-1').click(function(){
      $('.seat-1').show();
      $('.seat-img img:gt(0)').hide();
      $('.seat-text').css({marginTop:'0'});
  });
  $('.sit-2').click(function(){
      $('.seat-2').show();
      $('.seat-1,.seat-3,.seat-4,.seat-5').hide();
      $('.seat-text').css({marginTop:'0'});
  });
  $('.sit-3').click(function(){
      $('.seat-3').show();
      $('.seat-1,.seat-2,.seat-4,.seat-5').hide();
      $('.seat-text').css({marginTop:'0'});
  });
  $('.sit-4').click(function(){
      $('.seat-4').show();
      $('.seat-1,.seat-3,.seat-2,.seat-5').hide();
      $('.seat-text').css({marginTop:'0'});
  });
  $('.sit-5').click(function(){
      $('.seat-5').show();
      $('.seat-1,.seat-3,.seat-4,.seat-2').hide();
      $('.seat-text').css({marginTop:'0'});
  });
});


function initComparisons() {
var x, i;
/*find all elements with an "overlay" class:*/
x = document.getElementsByClassName("img-comp-overlay");
for (i = 0; i < x.length; i++) {
  /*once for each "overlay" element:
  pass the "overlay" element as a parameter when executing the compareImages function:*/
  compareImages(x[i]);
}
function compareImages(img) {
  var slider, img, clicked = 0, w, h;
  /*get the width and height of the img element*/
  w = img.offsetWidth;
  h = img.offsetHeight;
  /*set the width of the img element to 50%:*/
  img.style.width = (w / 2) + "px";
  /*create slider:*/
  slider = document.createElement("DIV");
  slider.setAttribute("class", "img-comp-slider");
  /*insert slider*/
  img.parentElement.insertBefore(slider, img);
  /*position the slider in the middle:*/
  slider.style.top = (h / 2) - (slider.offsetHeight / 2) + "px";
  slider.style.left = (w / 2) - (slider.offsetWidth / 2) + "px";
  /*execute a function when the mouse button is pressed:*/
  slider.addEventListener("mousedown", slideReady);
  /*and another function when the mouse button is released:*/
  window.addEventListener("mouseup", slideFinish);
  /*or touched (for touch screens:*/
  slider.addEventListener("touchstart", slideReady);
  /*and released (for touch screens:*/
  window.addEventListener("touchend", slideFinish);
  function slideReady(e) {
    /*prevent any other actions that may occur when moving over the image:*/
    e.preventDefault();
    /*the slider is now clicked and ready to move:*/
    clicked = 1;
    /*execute a function when the slider is moved:*/
    window.addEventListener("mousemove", slideMove);
    window.addEventListener("touchmove", slideMove);
  }
  function slideFinish() {
    /*the slider is no longer clicked:*/
    clicked = 0;
  }
  function slideMove(e) {
    var pos;
    /*if the slider is no longer clicked, exit this function:*/
    if (clicked == 0) return false;
    /*get the cursor's x position:*/
    pos = getCursorPos(e)
    /*prevent the slider from being positioned outside the image:*/
    if (pos < 0) pos = 0;
    if (pos > w) pos = w;
    /*execute a function that will resize the overlay image according to the cursor:*/
    slide(pos);
  }
  function getCursorPos(e) {
    var a, x = 0;
    e = e || window.event;
    /*get the x positions of the image:*/
    a = img.getBoundingClientRect();
    /*calculate the cursor's x coordinate, relative to the image:*/
    x = e.pageX - a.left;
    /*consider any page scrolling:*/
    x = x - window.pageXOffset;
    return x;
  }
  function slide(x) {
    /*resize the image:*/
    img.style.width = x + "px";
    /*position the slider:*/
    slider.style.left = img.offsetWidth - (slider.offsetWidth / 2) + "px";
  }
}
}



$(function(){
  $('.vip-2-1').click(function(){
      $('.ex10').fadeIn();
  });
});

var memberCountConTxt= 295;

$({ val : 0 }).animate({ val : memberCountConTxt }, {
duration: 2000,
step: function() {
var num = numberWithCommas(Math.floor(this.val));
$(".memberCountCon").text(num);
},
complete: function() {
var num = numberWithCommas(Math.floor(this.val));
$(".memberCountCon").text(num);
}
});

function numberWithCommas(x) {
return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

var memberCountConTxt1= 36;

$({ val : 0 }).animate({ val : memberCountConTxt1 }, {
duration: 2000,
step: function() {
var num = numberWithCommas(Math.floor(this.val));
$(".memberCountCon2").text(num);
},
complete: function() {
var num = numberWithCommas(Math.floor(this.val));
$(".memberCountCon2").text(num);
}
});

function numberWithCommas(x) {
return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

var memberCountConTxt2= 202;

$({ val : 0 }).animate({ val : memberCountConTxt2 }, {
duration: 2000,
step: function() {
var num = numberWithCommas(Math.floor(this.val));
$(".memberCountCon3").text(num);
},
complete: function() {
var num = numberWithCommas(Math.floor(this.val));
$(".memberCountCon3").text(num);
}
});

function numberWithCommas(x) {
return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

var memberCountConTxt3= 45;

$({ val : 0 }).animate({ val : memberCountConTxt3 }, {
duration: 2000,
step: function() {
var num = numberWithCommas(Math.floor(this.val));
$(".memberCountCon4").text(num);
},
complete: function() {
var num = numberWithCommas(Math.floor(this.val));
$(".memberCountCon4").text(num);
}
});

function numberWithCommas(x) {
return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}