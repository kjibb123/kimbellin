


;(function () {
	
	'use strict';

	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
			BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
			iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
			Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
			Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
			any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};

	
	var fullHeight = function() {

		if ( !isMobile.any() ) {
			$('.js-fullheight').css('height', $(window).height());
			$(window).resize(function(){
				$('.js-fullheight').css('height', $(window).height());
			});
		}
	};

	// Parallax
	var parallax = function() {
		$(window).stellar();
	};

	var contentWayPoint = function() {
		var i = 0;
		$('.animate-box').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('animated-fast') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .animate-box.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn animated-fast');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft animated-fast');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight animated-fast');
							} else {
								el.addClass('fadeInUp animated-fast');
							}

							el.removeClass('item-animate');
						},  k * 100, 'easeInOutExpo' );
					});
					
				}, 50);
				
			}

		} , { offset: '85%' } );
	};



	var goToTop = function() {

		$('.js-gotop').on('click', function(event){
			
			event.preventDefault();

			$('html, body').animate({
				scrollTop: $('html').offset().top
			}, 500, 'easeInOutExpo');
			
			return false;
		});

		$(window).scroll(function(){

			var $win = $(window);
			if ($win.scrollTop() > 200) {
				$('.js-top').addClass('active');
			} else {
				$('.js-top').removeClass('active');
			}

		});
	
	};

	var pieChart = function() {
		$('.chart').easyPieChart({
			scaleColor: false,
			lineWidth: 4,
			lineCap: 'butt',
			barColor: '#FF9000',
			trackColor:	"#f5f5f5",
			size: 160,
			animate: 1000
		});
	};

	var skillsWayPoint = function() {
		if ($('#fh5co-skills').length > 0 ) {
			$('#fh5co-skills').waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {
					setTimeout( pieChart , 400);					
					$(this.element).addClass('animated');
				}
			} , { offset: '90%' } );
		}

	};


	// Loading page
	var loaderPage = function() {
		$(".fh5co-loader").fadeOut("slow");
	};

	
	$(function(){
		contentWayPoint();
		goToTop();
		loaderPage();
		fullHeight();
		parallax();
		// pieChart();
		skillsWayPoint();
	});


}());

$(function() {

	$('.hamburger-menu').click(function(){
		$(this).toggleClass('open');
		$('#overlaying').toggleClass('open')
	  });
	  
	  $('.overlay-content a').click(function(){
		$('.hamburger-menu').toggleClass('open');
		$('#overlaying').toggleClass('open')
	  });
});


		// const typedTextSpan = document.querySelector(".typed-text");

		// const textArray = ["PROFILE"];
		// const typingDelay = 300;

		// let textArrayIndex = 0;
		// let charIndex = 0;

		// function type(){
		// 	if(charIndex < textArray[textArrayIndex].length){
		// 		typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        //         charIndex++;
        //         setTimeout(type,typingDelay);
		// 	}
		// 	else{
		// 		//erase
		// 	}
        // }
        
	


// $(function(){
//     $('#section02').mouseenter(function(){
//         $('.p-text-1').delay(500).fadeIn();
//         $('.p-text-2').delay(700).fadeIn();
//         $('.p-text-3').delay(900).fadeIn();
//         $('.p-text-4').delay(1100).fadeIn();
//         $('.p-text-5').delay(1300).fadeIn();
//         $('.p-text-6').delay(1500).fadeIn();
//         $('.p-text-7').delay(1700).fadeIn();
//     });
//     $('#section02').mouseleave(function(){
//         $('.p-text-1').hide();
//         $('.p-text-2').hide();
//         $('.p-text-3').hide();
//         $('.p-text-4').hide();
//         $('.p-text-5').hide();
//         $('.p-text-6').hide();
//         $('.p-text-7').hide();
//     });
// });


$(function(){
	$('.profile-text').mouseenter(function(){
		$('.profile-page-1').css('backgroundColor','#2a2a2a');
		$('.k-p').css('background','#111')
		$('canvas').css('display','block');
		$('#fp-nav ul li a span').css('background','#fff');
		$('.fp-tooltip').attr('style', 'color: #fff !important');

	});
	$('.profile-text').mouseleave(function(){
		$('.profile-page-1').css('backgroundColor','#fff');
		$('canvas').css('display','none');
		$('#fp-nav ul li a span').css('background','#333');
		$('.fp-tooltip').attr('style', 'color: #333 !important');
		
	});
});




var	w = c.width = window.innerWidth,
    h = c.height = window.innerHeight,
    ctx = c.getContext( '2d' ),
	
	w = d.width = window.innerWidth,
    h = d.height = window.innerHeight,
    ctr = d.getContext( '2d' ),

    minDist = 10,
    maxDist = 30,
    initialWidth = 5,
    maxLines = 100,
    initialLines = 4,
    speed = 15,
    
    lines = [],
    frame = 0,
    timeSinceLast = 0,
    
    dirs = [
   // straight x, y velocity
      [ 0, 1 ],
      [ 1, 0 ],
      [ 0, -1 ],
    	[ -1, 0 ],
   // diagonals, 0.7 = sin(PI/4) = cos(PI/4)
      [ .7, .7 ],
      [ .7, -.7 ],
      [ -.7, .7 ],
      [ -.7, -.7]
    ],
    starter = { // starting parent line, just a pseudo line
      
      x: w / 2,
      y: h / 2,
      vx: 0,
      vy: 0,
      width: initialWidth
    };

function init() {
  
  lines.length = 0;
  
  for( var i = 0; i < initialLines; ++i )
    lines.push( new Line( starter ) );
  
  ctx.fillStyle = '#222';
  ctx.fillRect( 0, 0, w, h );
  ctr.fillStyle = '#222';
  ctr.fillRect( 0, 0, w, h );
  // if you want a cookie ;)
  // ctx.lineCap = 'round';
}
function getColor( x ) {
  
  return 'hsl( hue, 0%, 50% )'.replace(
  	'hue', x / w * 360 + frame
  );
}
function anim() {
  
  window.requestAnimationFrame( anim );
  
  ++frame;
  
  ctx.shadowBlur = 0;
  ctx.fillStyle = 'rgba(0,0,0,.02)';
  ctx.fillRect( 0, 0, w, h );
  ctx.shadowBlur = .5;
  
  ctr.shadowBlur = 0;
  ctr.fillStyle = 'rgba(0,0,0,.02)';
  ctr.fillRect( 0, 0, w, h );
  ctr.shadowBlur = .5;
  
  for( var i = 0; i < lines.length; ++i ) 
    
    if( lines[ i ].step() ) { // if true it's dead
      
      lines.splice( i, 1 );
      --i;
      
    }
  
  // spawn new
  
  ++timeSinceLast
  
  if( lines.length < maxLines && timeSinceLast > 10 && Math.random() < .5 ) {
    
    timeSinceLast = 0;
    
    lines.push( new Line( starter ) );
    
    // cover the middle;
    ctx.fillStyle = ctx.shadowColor = getColor( starter.x );
    ctx.beginPath();
    ctx.arc( starter.x, starter.y, initialWidth, 0, Math.PI * 2 );
	ctx.fill();
	ctr.fillStyle = ctx.shadowColor = getColor( starter.x );
    ctr.beginPath();
    ctr.arc( starter.x, starter.y, initialWidth, 0, Math.PI * 2 );
    ctr.fill();
  }
}

function Line( parent ) {
  
  this.x = parent.x | 0;
  this.y = parent.y | 0;
  this.width = parent.width / 1.25;
  
  do {
    
    var dir = dirs[ ( Math.random() * dirs.length ) |0 ];
    this.vx = dir[ 0 ];
    this.vy = dir[ 1 ];
    
  } while ( 
    ( this.vx === -parent.vx && this.vy === -parent.vy ) || ( this.vx === parent.vx && this.vy === parent.vy) );
  
  this.vx *= speed;
  this.vy *= speed;
  
  this.dist = ( Math.random() * ( maxDist - minDist ) + minDist );
  
}
Line.prototype.step = function() {
  
  var dead = false;
  
  var prevX = this.x,
      prevY = this.y;
  
  this.x += this.vx;
  this.y += this.vy;
  
  --this.dist;
  
  // kill if out of screen
  if( this.x < 0 || this.x > w || this.y < 0 || this.y > h )
    dead = true;
  
  // make children :D
  if( this.dist <= 0 && this.width > 1 ) {
    
    // keep yo self, sometimes
    this.dist = Math.random() * ( maxDist - minDist ) + minDist;
    
    // add 2 children
    if( lines.length < maxLines ) lines.push( new Line( this ) );
    if( lines.length < maxLines && Math.random() < .5 ) lines.push( new Line( this ) );
    
    // kill the poor thing
    if( Math.random() < .2 ) dead = true;
  }
  
  ctx.strokeStyle = ctx.shadowColor = getColor( this.x );
  ctx.beginPath();
  ctx.lineWidth = this.width;
  ctx.moveTo( this.x, this.y );
  ctx.lineTo( prevX, prevY );
  ctx.stroke();

  ctr.strokeStyle = ctx.shadowColor = getColor( this.x );
  ctr.beginPath();
  ctr.lineWidth = this.width;
  ctr.moveTo( this.x, this.y );
  ctr.lineTo( prevX, prevY );
  ctr.stroke();
  
  if( dead ) return true
}

init();
anim();

window.addEventListener( 'resize', function() {
  
  w = c.width = window.innerWidth;
  h = c.height = window.innerHeight;
  starter.x = w / 2;
  starter.y = h / 2;
  
  init();
} )