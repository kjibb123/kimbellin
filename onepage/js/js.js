$(function(){
    $(".menuBtn").click(function(){
            // slideToggle은 요소의 height 값을 조작해서 움직임을 만들어낸다. 보이면 안보이게, 안보이면 보이게 처리한다.
        $(".menuNav").slideToggle();
        });
    $('.box1').mouseenter(function(){
        $('.box1').animate({opacity:"1"},1000);
    });
    $('.box1').mouseleave(function(){
        $('.box1').animate({opacity:"0"},1000);
    });
    // section02 글씨 나타내기 이벤트
    $('.box4').click(function(){
        $('.box4').css("font-weight", "700");
        $('.box5').css("font-weight", "400");
        $('.box6').css("font-weight", "400");
        $('.box8').css("opacity", "0");
        $('.box9').css("opacity", "0");
        $('.box7').animate({opacity:"1"}, 300);
    // 지혜의숲 클릭시 bold효과와 슬라이드 변화

    });
    $('.box5').click(function(){
        $('.box5').css("font-weight", "700");
        $('.box4').css("font-weight", "400");
        $('.box6').css("font-weight", "400");
        $('.box7').css("opacity", "0");
        $('.box9').css("opacity", "0");
        $('.box8').animate({opacity:"1"}, 300);
    // 지지향 클릭시 bold효과와 슬라이드 변화
 
    });
    $('.box6').click(function(){
        $('.box6').css("font-weight", "700");
        $('.box4').css("font-weight", "400");
        $('.box5').css("font-weight", "400");
        $('.box8').css("opacity", "0");
        $('.box7').css("opacity", "0");
        $('.box9').animate({opacity:"1"}, 300);
    });
    // 나인블럭 클릭시 bold효과와 슬라이드 변화

    $('.box4').mouseenter(function(){
        $('.box4').css("background","#fed100");
        $('#box4').css("color","white");
    });
    $('.box4').mouseleave(function(){
        $('.box4').css("background","#fff");
        $('#box4').css("color","black");
    });
    // 지혜의숲 hover 색 변화 효과
    $('.box5').mouseenter(function(){
        $('.box5').css("background","#fed100");
        $('#box5').css("color","white");
    });
    $('.box5').mouseleave(function(){
        $('.box5').css("background","#fff");
        $('#box5').css("color","black");
    });
    // 지지향 hover 색 변화 효과
    $('.box6').mouseenter(function(){
        $('.box6').css("background","#fed100");
        $('#box6').css("color","white");
    });
    $('.box6').mouseleave(function(){
        $('.box6').css("background","#fff");
        $('#box6').css("color","black");
    });
    // 나인블럭 hover 색 변화 효과
    $('.slide1').mouseenter(function(){
        ('slide2').css("display","none");
    });

    $('.main_logo2').click(function(){
        $('.menuNav').slideUp();
    });
    $('.bottombutton').click(function(){
        $('.page4_opacity').fadeOut();
        $('.page4_photobox').fadeIn();    
    });
    $('.photo_cancel').click(function(){
        $('.page4_opacity').fadeIn();
        $('.page4_photobox').fadeOut();
    });
});
