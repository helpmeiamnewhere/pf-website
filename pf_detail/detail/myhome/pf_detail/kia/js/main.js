var swiper = new Swiper(".mySwiper", {
    spaceBetween: 0,
    slidesPerView: 1,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 9500,
      disableOnInteraction: false,
    }     
  });

  var swiper2 = new Swiper(".mySwiper02", {
    slidesPerView: 1,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loopFillGroupWithBlank: true,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",       
      },    
      breakpoint: {
        700: {
            slidesPerView: 2,
            slidesPerGroup: 2,          
        }, 
        1024: {
            slidesPerView: 3,
            slidesPerGroup: 3,         
        }, 
       
      },
  });
  

    var ww = $(window).width();
    var swiper3 = undefined;
    var swiper4 = undefined;   

    function initSwiper(){

        if(ww < 700 && swiper3 == undefined){
            swiper3 = new Swiper(".mySwiper03", {
                grabCursor: true,
                effect: "creative",
                creativeEffect: {
                  prev: {
                    shadow: true,
                    translate: [0, 0, -400],
                  },
                  next: {
                    translate: ["100%", 0, 0],
                  },
                },
                pagination: {
                    el: ".swiper-pagination",
                  },
            });
        } else if (ww >= 700 && swiper3 != undefined ){
            swiper3.destroy();
            swiper3 = undefined;
        }   

     
        if(ww < 700 && swiper4 == undefined){
            swiper4 = new Swiper(".mySwiper04", {
                slidesPerView: 1,
                grid: {
                rows: 2,
                },
                spaceBetween: 30,
                centeredSlides: true, 
                pagination: {
                    el: ".swiper-pagination",
                  },                          
            });
        } else if (ww >= 700 && swiper4 != undefined ){
            swiper4.destroy();
            swiper4 = undefined;
       }
    }

    initSwiper();
 $(window).on('resize', function(){
     ww = $(window).width();
     initSwiper();
 });

 var swiper5 = new Swiper(".mySwiper05", {
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    }    
 });


  /* 공지사항 부분 */

 
  $('div.title>a:nth-child(1)').click(function(){
      $(this).addClass('active');
      $(this).siblings().removeClass('active');
      $('ul.notice').show();
      $('ul.notice1, ul.notice2, ul.notice3, ul.notice4, ul.notice5, ul.notice6').hide();
  })
  $('div.title>a:nth-child(2)').click(function(){
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
    $('ul.notice1').show();
    $('ul.notice, ul.notice2, ul.notice3, ul.notice4, ul.notice5, ul.notice6').hide();
})
$('div.title>a:nth-child(3)').click(function(){
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
    $('ul.notice2').show();
    $('ul.notice, ul.notice1, ul.notice3, ul.notice4, ul.notice5, ul.notice6').hide();
})
$('div.title>a:nth-child(4)').click(function(){
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
    $('ul.notice3').show();
    $('ul.notice, ul.notice1, ul.notice2, ul.notice4, ul.notice5, ul.notice6').hide();
})
$('div.title>a:nth-child(5)').click(function(){
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
    $('ul.notice4').show();
    $('ul.notice, ul.notice1, ul.notice2, ul.notice3, ul.notice5, ul.notice6').hide();
})

$('div.title>a:nth-child(6)').click(function(){
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
    $('ul.notice5').show();
    $('ul.notice, ul.notice1, ul.notice2, ul.notice3, ul.notice4, ul.notice6').hide();
})

$('div.title>a:nth-child(7)').click(function(){
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
    $('ul.notice6').show();
    $('ul.notice, ul.notice1, ul.notice2, ul.notice3, ul.notice4, ul.notice5').hide();
})



$('ul li.depth_01').mouseenter(function(){
    $(this).children('ul.depth_02').stop().slideDown()
})

$('ul li.depth_01').mouseleave(function(){
    $(this).children(' ul.depth_02').stop().slideUp()
})




$('a.banner_btn').click(function(){
    $('div.footer_inner>div>div.banner').fadeIn();
    $('div.footer_inner>div>div.banner').css('display','grid');
})
$('div.footer_inner>div>div.banner>a.close').click(function(){
    $('div.footer_inner>div>div.banner').fadeOut();   
})


$('a.relative_btn').click(function(){
    $('div.footer_inner>div>div.relative').fadeIn();
    $('div.footer_inner>div>div.relative').css('display','grid');
})
$('div.footer_inner>div>div.relative>a.close').click(function(){
    $('div.footer_inner>div>div.relative').fadeOut();   
})


$('a.local_btn').click(function(){
    $('div.footer_inner>div>div.local').fadeIn();
    $('div.footer_inner>div>div.local').css('display','grid');
})
$('div.footer_inner>div>div.local>a.close').click(function(){
    $('div.footer_inner>div>div.local').fadeOut();   
})


// gnb
var $nav_btn = $('div.nav_1500 > a > label'),
$depth2 = $('nav.nav_full > div > div > ul');
$depth1 = $('nav.nav_full > div > div >a');
winwWidth = $(window).width();

$nav_btn.click(function(){
$('nav.nav_full').stop().slideToggle();
$('div.nav_full_bg').stop().slideToggle();
})
$depth2.mouseenter(function(){
$(this).siblings('a').css({'background-color':'#555', 'color':'#fff'});
})
$depth2.mouseleave(function(){
$(this).siblings('a').css({'background-color':'transparent', 'color':'#333'});
})

if( winwWidth < 700 ){
    $depth1.click(function(){
    $(this).siblings($depth2).slideToggle();
})
};




//top 버튼
$(function(){
    $('div.top_btn a').on('click',function(e){
        e.preventDefault();
        $('html,body').animate({scrollTop:0},600);
    });
 
    $(window).scroll(function() {
      if ($(document).scrollTop() > 100) {
        $('div.top_btn a').addClass('show');
      } else {
        $('div.top_btn a').removeClass('show');
      }
    });

  });