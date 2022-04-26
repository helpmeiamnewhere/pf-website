// shrink 헤더 
var $window = $(window),
$mainHeader = $('#main-header'),
$threshold = $mainHeader.outerHeight(),
$Logo = $('#logo');


$window.scroll(function(){
if($(this).scrollTop() > $threshold){
    if(!$mainHeader.hasClass('shrink')){
        $mainHeader.addClass('shrink');
       
    }
}else{
    if($mainHeader.hasClass('shrink')){
        $mainHeader.removeClass('shrink');
        
    }
}
});

//WOW
wow = new WOW( 
    {
    boxClass:     'wow',      // default
    animateClass: 'animated', // default
    offset:       1,          // default
    mobile:       true,       // default
    live:         true        // default
  }
  )
  wow.init();

//네비게이션
$('nav ul li.depth_01').mouseenter(function(){
    $('nav ul.depth_02, div.nav_back').stop().slideDown();
})
$('nav ul li.depth_01').mouseleave(function(){
    $('nav ul.depth_02, div.nav_back').stop().slideUp();
})


$('div.nav_vertical ul li.depth_01').mouseenter(function(){
  $(this).children('ul.depth_02').stop().slideDown();
})

$('div.nav_vertical ul li.depth_01').mouseleave(function(){
  $(this).children('ul.depth_02').stop().slideUp();
})

/* $('li.ham>label').click(function(){
  $('header.shrink div.nav_vertical').toggle(function(){
    $(this).css('left','0%');
  })
  
})
 */

$('input[id="slide_nav').change(function(){
  var value = $(this).val();
  var checked = $(this).prop('checked');
 
  if(checked)
    $('div.nav_vertical, div.vertical_nav_back').css('left', '0%');
  else
    $('div.nav_vertical, div.vertical_nav_back').css('left','-101%');  

});

$('input#search').focusin(function(){
  $('header.shrink>nav>ul>li:last-child').css('display','none');
  $('nav>ul>li:last-child').css('display','none');
  
})

$('input#search').focusout(function(){
  $('header.shrink>nav>ul>li:last-child').css('display','inline-block');
  $('nav>ul>li:last-child').css('display','inline-block');
 
})

 
/* 
$('div.nav_vertical ul li.depth_01').mouseleave(function(){
  $('div.nav_vertical').stop().slideUp();
})

 */

//top 버튼

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


var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    
   /*  pagination: {
      el: ".swiper-pagination",
    }, */
  });

  var swiper2 = new Swiper(".mySwiper02", {
    slidesPerView: "auto",
    centeredSlides: true,
    slidesPerGroupSkip: 1,
    grabCursor: true,
    keyboard: {
      enabled: true,
    },
    breakpoints: {
      769: {
        slidesPerView: 3,
        slidesPerGroup: 1
      },
    },
    scrollbar: {
      el: ".swiper-scrollbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
  });


