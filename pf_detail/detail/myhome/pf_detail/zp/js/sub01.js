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
    $('nav ul ul.depth_02, div.nav_back').stop().slideDown();
})
$('nav ul li.depth_01').mouseleave(function(){
    $('nav ul ul.depth_02, div.nav_back').stop().slideUp();
})


$('div.nav_vertical ul li.depth_01').mouseenter(function(){
    $(this).children('ul.depth_02').stop().slideDown();
  })
  
  $('div.nav_vertical ul li.depth_01').mouseleave(function(){
    $(this).children('ul.depth_02').stop().slideUp();
  })


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
  




// 라이터 종류 메뉴 호버시 효과
$('div.classic, a.classic').mouseenter(function(){
    $('div.width, div.thick, div.height, div.weight, div.pack').find('span.cl').css({
        'background-color': '#fff',
        'color':"#333",
        'font-weight':'500',
        'width' : '190px',
        'margin-left': '10px'
    });
    $('div.img_1').children('.classic').css({
        'border-radius' : '50% 50% 0 0'
    });
})
$('div.classic, a.classic').mouseleave(function(){
    $('div.width, div.thick, div.height, div.weight, div.pack').find('span.cl').css({
        'background-color': 'transparent',
        'color':"#eee",
        'font-weight':'300'
    });
    $('div.img_1').children('.classic').css({
        'border-radius' : '50%'
    });
})
$('div.slim, a.slim').mouseenter(function(){
    $('div.width, div.thick, div.height, div.weight, div.pack').find('span.sl').css({
        'background-color': '#fff',
        'color':"#333",
        'font-weight':'500',
        'width' : '190px',
        'margin-left': '10px'
    });
    $('div.img_1').children('.slim').css({
        'border-radius' : '50% 50% 0 0'
    });
})
$('div.slim, a.slim').mouseleave(function(){
    $('div.width, div.thick, div.height, div.weight, div.pack').find('span.sl').css({
        'background-color': 'transparent',
        'color':"#eee",
        'font-weight':'300'
    });
    $('div.img_1').children('.slim').css({
        'border-radius' : '50%'
    });
})
$('div.Armor, a.Armor').mouseenter(function(){
    $('div.width, div.thick, div.height, div.weight, div.pack').find('span.am').css({
        'background-color': '#fff',
        'color':"#333",
        'font-weight':'500',
        'width' : '190px',
        'margin-left': '10px'
    });
    $('div.img_1').children('.Armor').css({
        'border-radius' : '50% 50% 0 0'
    });
})
$('div.Armor, a.Armor').mouseleave(function(){
    $('div.width, div.thick, div.height, div.weight, div.pack').find('span.am').css({
        'background-color': 'transparent',
        'color':"#eee",
        'font-weight':'300'
    });
    $('div.img_1').children('.Armor').css({
        'border-radius' : '50%'
    });
})
$('div.re_1935, a.re_1935').mouseenter(function(){
    $('div.width, div.thick, div.height, div.weight, div.pack').find('span.re35').css({
        'background-color': '#fff',
        'color':"#333",
        'font-weight':'500',
        'width' : '190px',
        'margin-left': '10px'
    });
    $('div.img_1').children('.re_1935').css({
        'border-radius' : '50% 50% 0 0'
    });
})
$('div.re_1935, a.re_1935').mouseleave(function(){
    $('div.width, div.thick, div.height, div.weight, div.pack').find('span.re35').css({
        'background-color': 'transparent',
        'color':"#eee",
        'font-weight':'300'
    });
    $('div.img_1').children('.re_1935').css({
        'border-radius' : '50%'
    });
})
$('div.vintage, a.vintage').mouseenter(function(){
    $('div.width, div.thick, div.height, div.weight, div.pack').find('span.vtg').css({
        'background-color': '#fff',
        'color':"#333",
        'font-weight':'500',
        'width' : '190px',
        'margin-left': '10px'
    });
    $('div.img_1').children('.vintage').css({
        'border-radius' : '50% 50% 0 0'
    });
})
$('div.vintage, a.vintage').mouseleave(function(){
    $('div.width, div.thick, div.height, div.weight, div.pack').find('span.vtg').css({
        'background-color': 'transparent',
        'color':"#eee",
        'font-weight':'300'
    });
    $('div.img_1').children('.vintage').css({
        'border-radius' : '50%'
    });
})
$('div.re_1941, a.re_1941').mouseenter(function(){
    $('div.width, div.thick, div.height, div.weight, div.pack').find('span.re41').css({
        'background-color': '#fff',
        'color':"#333",
        'font-weight':'500',
        'width' : '190px',
        'margin-left': '10px'
    });
    $('div.img_1').children('.re_1941').css({
        'border-radius' : '50% 50% 0 0'
    });
})
$('div.re_1941, a.re_1941').mouseleave(function(){
    $('div.width, div.thick, div.height, div.weight, div.pack').find('span.re41').css({
        'background-color': 'transparent',
        'color':"#eee",
        'font-weight':'300'
    });
    $('div.img_1').children('.re_1941').css({
        'border-radius' : '50%'
        
    });
})

//스와이퍼
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: false,
      },
      breakpoints: {
        700: {
            slidesPerView: 2,            
            centeredSlides: true
        }, 
        1200: {
            slidesPerView: 3           
        }
    }
  });
  

  var ww = $(window).width();
  var swiper2 = undefined;
  var swiper3 = undefined;
  var swiper4 = undefined;   

  function initSwiper(){

    if(ww < 1280 && swiper2 == undefined){
        swiper2 = new Swiper(".mySwiper02", {
            slidesPerView: 1,            
            spaceBetween: 0,
            centeredSlides: true,            
            scrollbar: {
                el: ".swiper-scrollbar",
                hide: false,
              },
              breakpoints: {
                700: {
                    slidesPerView: 1,
                },
                1280: {
                    slidesPerView: 1,                   
                    centeredSlides: true,
                }
            },
        });
    } else if (ww >= 1280 && swiper2 != undefined ){
        swiper2.destroy();
        swiper2 = undefined;
    }  

    if(ww < 1280 && swiper3 == undefined){
        swiper3 = new Swiper(".mySwiper03", {
            slidesPerView: 1,
            spaceBetween: 0,  
            centeredSlides: true,          
            scrollbar: {
                el: ".swiper-scrollbar",
                hide: false,
              },
              breakpoints: {
                700: {
                    slidesPerView: 1,
                },
                1280: {
                    slidesPerView: 1,                   
                    centeredSlides: true,
                }       
            },
        });
    } else if (ww >= 1280 && swiper3 != undefined ){
        swiper3.destroy();
        swiper3 = undefined;
    }  



      if(ww < 1280 && swiper4 == undefined){
          swiper4 = new Swiper(".mySwiper04", {
            slidesPerView: 1,              
            spaceBetween: 30,      
            centeredSlides: true,
            scrollbar: {
                el: ".swiper-scrollbar",
                hide: false,
              },      
              breakpoints: {
                700: {
                    slidesPerView: 3                         
                },
                1280: {
                    slidesPerView: 5        
                },                
            },
          });
      } else if (ww >= 1280 && swiper4 != undefined ){
          swiper4.destroy();
          swiper4 = undefined;
      } 
    };

      initSwiper();
      $(window).on('resize', function(){
          ww = $(window).width();
          initSwiper();
      });
       


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
  