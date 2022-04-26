//fullpage
$(document).ready(function(){
        $('#fullpage').fullpage({
            scrollHorizontally: true,
            navigation: true,
            navigationPosition: 'right',
            keyboardScrolling: true,
            controlArrows: true,
            scrollBar: true,
            autoScrolling : true,
           scrollOverflow: true,
            
           
        });
    });

     wow = new WOW(
                      {
                      boxClass:     'wow',      // default
                      animateClass: 'animated', // default
                      offset:       0,          // default
                      mobile:       true,       // default
                      live:         true        // default
                    }
                    )
                    wow.init();


    $(document).ready(function() {
        $('#fullpage').fullpage({
            scrollBar: true,
            afterRender: function(){
                  new WOW().init();
            }
        });
    });


/* 
    if($('#fullPage').length > 0){
        $('#fullPage').fullpage({
          loopBottom:false,
          scrollBar: true,
          afterRender: function(){
            wow = new WOW({
                animateClass: 'animated',
             });
            wow.init();
         },
         
      afterLoad: function(origin, destination, direction){
        $('div.doll').find('.to-animate').addClass('animated fadeInLeftBig');
    },

        });
      }
 */

$(document).ready(function(){
      $('.slider').slick({
          slidesToShow: 6,
          slidesToScroll: 1,
          autoplay: true,
           autoplaySpeed: 2000,
          arrows: false,
      });
    });



$('div.family span').click(function(){
    $('div.family ul').fadeIn();
})
$('div.family').mouseleave(function(){
    $('div.family ul').fadeOut();
})


/* $('a.lang').click(function(){
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

$('span.marker').click(function(){
    $(this).addClass('gl');
})
$('div.family ul').mouseleave(function(){
    $('span.marker').removeClass('gl');
})


/*
// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5; //동작의 구현이 시작되는 위치
var navbarHeight = $('header').outerHeight(); //영향을 받을 요소 선택

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function(){
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
    
    // If they scrolled down and are past the navbar, add class .nav-up. // This is necessary so you never see what is "behind" the navbar.
    
    if(st > lastScrollTop && st > navbarHeight){
        //Scroll Down
        $('header').removeClass('nav-down').addClass('nav-up');
    } else {
        //Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up').addClass('nav-down');
        }
    }
    
    lastScrollTop = st;
} //핵심은 스크롤 방향에 따른 클래스 추가와 제거이다 
*/

/* var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null,    // optional scroll container selector, otherwise use window,
    resetAnimation: true,     // reset animation on end (default is true)
  }
);
wow.init();*/



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