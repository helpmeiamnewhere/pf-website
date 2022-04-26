$(document).ready(function(){
    new WOW().init();
});

$(document).ready(function(){
      $('.slider').slick({
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
           autoplaySpeed: 4000,
          arrows: false,
      });
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


$("div.big").click(function(){
    $("ul.menu01").slideDown();
    $('div.big>a.first>span').addClass('active');
});
$("ul.menu01").mouseleave(function(){
    $("ul.menu01").stop().slideUp();
    $('div.big>a.first>span').removeClass('active');
})


$("div.middle").click(function(){
    $("ul.menu02").slideDown();
    $('div.middle>a.first>span').addClass('active');
});
$("ul.menu02").mouseleave(function(){
    $("ul.menu02").stop().slideUp();
    $('div.middle>a.first>span').removeClass('active');
})


$('span.marker').click(function(){
    $(this).addClass('gl');
})
$('div.family ul').mouseleave(function(){
    $('span.marker').removeClass('gl');
})


$('div.family span').click(function(){
    $('div.family ul').fadeIn();
});
$('div.family').mouseleave(function(){
    $('div.family ul').fadeOut();
});


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