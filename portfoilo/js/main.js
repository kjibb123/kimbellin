


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

$(function(){
	$(document).ready(function(){
		$(".typed-text").scroll(function(){
		  
		});
	  });
})

		var myVar;

		function mytype() {
			myVar = setInterval(type, 1000);
		  }


		const typedTextSpan = document.querySelector(".typed-text");

		const textArray = ["PROFILE"];
		const typingDelay = 200;

		let textArrayIndex = 0;
		let charIndex = 0;

	
		window.onscroll = function() {myFunction()};

			function myFunction() {
			  if (document.body.scrollTop > 1080 || document.documentElement.scrollTop > 1080) {

				function type(){
					if(charIndex < textArray[textArrayIndex].length){
						typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
						charIndex++;
					}
					else{
						//erase
					}
					setTimeout(type, typingDelay);
			
					}
				type();
	  }
	}

		
		
	
		

		
		
	


	



$(document).ready(function() {
	$('#fullpage').fullpage({
		//options here
		autoScrolling:true,
		scrollHorizontally: true,
		sectionSelector: '.section',
		anchors:['first', 'second','third', 'fourth'],
		navigation: true,
		navigationPosition: 'right',
		navigationTooltips: ['Main', 'Profile','Portfolio','Contact'],
		showActiveTooltip: true,
		scrollOverflow: true,
	});

	//methods
	$.fn.fullpage.setAllowScrolling(false);
});


