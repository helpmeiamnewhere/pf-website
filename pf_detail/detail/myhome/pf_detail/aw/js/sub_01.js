

 $(document).ready(function(){
    new WOW().init();
 });

 $(function(){
    $('div.top a').on('click',function(e){
        e.preventDefault();
        $('html,body').animate({scrollTop:0},600);
    });

$(window).scroll(function() {
      if ($(document).scrollTop() > 100) {
        $('div.top a').addClass('show');
      } else {
        $('div.top a').removeClass('show');
      }
    });

  });

$("div.big").click(function(){
    $("ul.menu01").slideDown();
    $('div.big>a.first>span').addClass('active');
});
$("ul.menu01").mouseleave(function(){
    $("ul.menu01").stop().slideUp();
    $('div.big>a.first>span').removeClass('active');
})

$('span.marker').click(function(){
    $(this).addClass('gl');
})
$('div.family ul').mouseleave(function(){
    $('span.marker').removeClass('gl');
})


$("div.middle").click(function(){
    $("ul.menu02").slideDown();
    $('div.middle>a.first>span').addClass('active');
});
$("ul.menu02").mouseleave(function(){
    $("ul.menu02").stop().slideUp();
    $('div.middle>a.first>span').removeClass('active');
})
/* 
$('a.lang').click(function(){
    $('ul.lang').slideDown();
});
$('a.lang').mouseenter(function(){
    $('ul.lang').slideUp();
});

 */
$('li.depth_01').mouseenter(function(){
    $(this).children('a').addClass('special');
    $('ul.depth_02, div.nav_back').stop().slideDown();
});
$('li.depth_01').mouseleave(function(){
    $(this).children('a').removeClass('special');
    $('ul.depth_02, div.nav_back').stop().slideUp();
});


$('div.family span').click(function(){
    $('div.family ul').fadeIn();
})
$('div.family').mouseleave(function(){
    $('div.family ul').fadeOut();
})


$('li.orin_btn').click(function(){
    $('div.arrow').animate({
        left: 305,
        bottom:0
    });
});

$('li.li_btn').click(function(){
    $('div.arrow').animate({
        left: 550,
        bottom:0
    });
});

$('li.co_btn').click(function(){
    $('div.arrow').animate({
        left: 795,
        bottom:0
    });
});


$('ul.slide_btn>li').click(function(){
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
})


$('li.orin_btn').click(function(){
    $('div.brand_doll1').fadeIn();
    $('div.brand_doll2, div.brand_doll3').hide();
});

$('li.li_btn').click(function(){
    $('div.brand_doll2').fadeIn();
    $('div.brand_doll1, div.brand_doll3').hide();
});
$('li.co_btn').click(function(){
    $('div.brand_doll3').fadeIn();
    $('div.brand_doll1, div.brand_doll2').hide();
});


$('div.what>a, div.how>a, div.for_what>a, div.for_who>a').on('click', function(){
    $(this).addClass('selected');
});

$('div.goto_btn').click(function(){
    $('div.search_keyword>div>a').removeClass('selected');
});

$('div.fit_search>a').click(function(){
    $('div.modal').fadeIn();
});

$('div.modal>div>div.close').click(function(){
    $('div.modal').fadeOut();
});

/* 
var $window = $(window),
    $mainHeader = $('#main-header'),
    $defaultLogo = 'img/all/logo.png',
    $threshold = $mainHeader.outerHeight(),
    $Logo = $('#logo'),
    $smallLogo = 'img/all/sn_logo.png';

   $window.scroll(function(){
    if($(this).scrollTop() > $threshold){
        if(!$mainHeader.hasClass('shrink')){
            $mainHeader.addClass('shrink');
            switchImg($smallLogo);
        }
    }else{
        if($mainHeader.hasClass('shrink')){
            $mainHeader.removeClass('shrink');
            switchImg($defaultLogo);
        }
    }
   });

   // switchImg 함수
  function switchImg(newImgPath){
    $Logo.fadeOut(300,function(){
        $Logo.attr('src',newImgPath);
        $Logo.fadeIn(300);
    });
  }
 */

// Hide Header on on scroll down 
var didScroll; 
var lastScrollTop = 0; 
var delta = 5; 
var navbarHeight = $('header').outerHeight(); 

$(window).scroll(function(event){ 
    didScroll = true; 
}); 
setInterval(function() { 
    if (didScroll) { 
        hasScrolled(); 
        didScroll = false; 
    } 
}, 250); 
function hasScrolled() { 
    var st = $(this).scrollTop(); 
    
    // Make sure they scroll more than delta 
    if(Math.abs(lastScrollTop - st) <= delta) 
    return; 
    // If they scrolled down and are past the navbar, add class .nav-up. 
    // This is necessary so you never see what is "behind" the navbar. 
    if (st > lastScrollTop && st > navbarHeight){ 
        // Scroll Down 
        $('header').removeClass('nav-down').addClass('nav-up');
     } else { 
            // Scroll Up 
            if(st + $(window).height() < $(document).height()) { 
                $('header').removeClass('nav-up').addClass('nav-down');
             } 
            } lastScrollTop = st; 
        }

//출처: https://webdir.tistory.com/481 [WEBDIR]