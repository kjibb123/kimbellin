


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
        
	


$(function(){
    $('#section02').mouseenter(function(){
        $('.p-text-1').delay(1000).fadeIn();
        $('.p-text-2').delay(1300).fadeIn();
        $('.p-text-3').delay(1600).fadeIn();
        $('.p-text-4').delay(1900).fadeIn();
        $('.p-text-5').delay(2200).fadeIn();
        $('.p-text-6').delay(2500).fadeIn();
        $('.p-text-7').delay(2800).fadeIn();
    });
    $('#section02').mouseleave(function(){
        $('.p-text-1').hide();
        $('.p-text-2').hide();
        $('.p-text-3').hide();
        $('.p-text-4').hide();
        $('.p-text-5').hide();
        $('.p-text-6').hide();
        $('.p-text-7').hide();
    });
});

