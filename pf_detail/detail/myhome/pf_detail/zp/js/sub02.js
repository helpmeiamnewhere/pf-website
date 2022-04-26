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
  

  $('input[id="filter').change(function(){
    var value = $(this).val();
    var checked = $(this).prop('checked');
   
    if(checked)
      $('div.search_detail_ac').css('left', '0%');
    else
      $('div.search_detail_ac').css('left','-101%');  
  
  });
  








// 필터
$('div.sort_inner>div>a').click(function(){
    $(this).siblings('ul').stop().slideDown();
})
$('div.sort_inner>div>ul').mouseleave(function(){
    $(this).stop().slideUp();
})


var $window = $(window),
$filter = $('div.search_detail_ac div.detail_ac_wrap div.btn label'),
$threshold = $mainHeader.outerHeight();




$window.scroll(function(){
    if($(this).scrollTop() > $threshold){
        if(!$filter.hasClass('shrink')){
            $filter.addClass('shrink');
           
        }
    }else{
        if($filter.hasClass('shrink')){
            $filter.removeClass('shrink');
            
        }
    }
    });
    



//세부 검색 버튼
$(function(){
    var duration = 300;
    var aside = $('div.detail_wrap');
    var asideButton = aside.find('button')
        .click(function(){
            aside.toggleClass('open');
            if(aside.hasClass('open')){
                aside.stop(true).animate({'left': '0px'}, duration);
                asideButton.find('img').attr('src', 'img/sub02/btn_open_2.png');
            }else{
                aside.stop(true).animate({'left': '-1150px'}, duration);
                asideButton.find('img').attr('src', 'img/sub02/btn_close_2.png');
            };
        });
});


//세부 검색 내용
$('div.menu > div.a_btn > a:nth-child(1)').click(function(){
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
    $('div.menu01').show();
    $('div.menu02, div.menu03, div.menu04, div.menu05, div.menu06, div.menu07, div.menu08').hide();
})
$('div.menu > div.a_btn > a:nth-child(2)').click(function(){
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
    $('div.menu02').show();
    $('div.menu01, div.menu03, div.menu04, div.menu05, div.menu06, div.menu07, div.menu08').hide();
})
$('div.menu > div.a_btn > a:nth-child(3)').click(function(){
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
    $('div.menu03').show();
    $('div.menu01, div.menu02, div.menu04, div.menu05, div.menu06, div.menu07, div.menu08').hide();
})
$('div.menu > div.a_btn > a:nth-child(4)').click(function(){
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
    $('div.menu04').show();
    $('div.menu01, div.menu02, div.menu03, div.menu05, div.menu06, div.menu07, div.menu08').hide();
})
$('div.menu > div.a_btn > a:nth-child(5)').click(function(){
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
    $('div.menu05').show();
    $('div.menu01, div.menu02, div.menu03, div.menu04, div.menu06, div.menu07, div.menu08').hide();
})
$('div.menu > div.a_btn > a:nth-child(6)').click(function(){
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
    $('div.menu06').show();
    $('div.menu01, div.menu02, div.menu03, div.menu04, div.menu05, div.menu07, div.menu08').hide();
})
$('div.menu > div.a_btn > a:nth-child(7)').click(function(){
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
    $('div.menu07').show();
    $('div.menu01, div.menu02, div.menu03, div.menu04, div.menu05, div.menu06, div.menu08').hide();
})
$('div.menu > div.a_btn > a:nth-child(8)').click(function(){
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
    $('div.menu08').show();
    $('div.menu01, div.menu02, div.menu03, div.menu04, div.menu05, div.menu06, div.menu07').hide();
})


/* 세부메뉴 반응형 */
/* $('.menu_wrap').click(function(){
    $('.menu00').slideUp();
    if ($(this).children('.menu00').is(':hidden')){
       $(this).children('.menu00').slideDown();
    } else{
       $(this).children('.menu00').slideUp();
    }
 }); */

 $(".menu_wrap").click(function() {
    $(this).children(".menu00").stop().slideToggle(300);
   $(this).toggleClass('on').siblings().removeClass('on');
   $(this).children(".menu00").siblings(".menu00").slideUp(300); // 1개씩 펼치기
 });



//바둑판 보기 디테일 보기
$('div.layer>ul>li:nth-child(1)').click(function(){
    $('div.simple').fadeIn();
    $('div.detail').fadeOut();
})
$('div.layer>ul>li:nth-child(2)').click(function(){
    $('div.detail').fadeIn();
    $('div.simple').fadeOut();
})


//page
$('div.pages>span').click(function(){
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
})




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
  