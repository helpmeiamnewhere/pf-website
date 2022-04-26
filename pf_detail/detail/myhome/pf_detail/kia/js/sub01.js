
// shrink navigation
var $window = $(window),
    $mainHeader = $('#main-header'),
    $defaultLogo = 'img/logo/symbol_w.png',
    $threshold = $mainHeader.outerHeight(),
    $Logo = $('#logo'),
    $smallLogo = 'img/logo/symbol_ori.png';

    $window.scroll(function(){
        if($(this).scrollTop() > $threshold){
            if(!$mainHeader.hasClass('shrink')){
                $mainHeader.addClass('shrink');
                switchImg($smallLogo);
                $Logo.css('width','37px');
            }
        }else{
            if($mainHeader.hasClass('shrink')){
                $mainHeader.removeClass('shrink');
                switchImg($defaultLogo);
                $Logo.css('width','37px');
            }
        }
    });

    function switchImg(newImgPath){
        $Logo.fadeOut(50, function(){
            $Logo.attr('src',newImgPath);
            $Logo.fadeIn(50);
           
        });
    }


//경로 lnb    

    $('div.depth_1st > a, div.depth_1st > ul').mouseenter(function(){
        $(this).siblings('ul').stop().slideDown();
        $(this).children('span').addClass('clickon');
});

    $('div.depth_2nd > a, div.depth_2nd > ul').mouseenter(function(){
        $(this).siblings('ul').stop().slideDown();
        $(this).children('span').addClass('clickon');
});

    $('div.depth_1st > ul').mouseleave(function(){
        $(this).stop().slideUp();
        $('div.depth_1st > a > span').removeClass('clickon');
});
    $('div.depth_2nd > ul').mouseleave(function(){
        $(this).stop().slideUp();
        $('div.depth_2nd > a > span').removeClass('clickon');
});

/* 
var $selected = $('div.content > div.menu > div.menu_inner > a');

    $selected.click(function(){
        $(this).css({'background-color': 'rgb(201, 201, 185)',
        'color': '#333'});
        $(this).siblings().css({'background-color': '#f5f5f1',
        'color': 'rgb(138, 138, 138)'});
    });
     */

// 푸터 배너 정리 

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

//
    

   


// gnb
    var $nav_btn = $('div.nav > a > label'),
        $depth2 = $('div.nav_full > div > div > ul');
        $depth1 = $('div.nav_full > div > div >a');
        winwWidth = $(window).width();

    $nav_btn.click(function(){
        $('div.nav_full').stop().slideToggle();
        $('div.nav_full_bg').stop().slideToggle();
    })
    $depth2.mouseenter(function(){
        $(this).siblings('a').css({'background-color':'#555', 'color':'#fff'});
    })
    $depth2.mouseleave(function(){
        $(this).siblings('a').css({'background-color':'transparent', 'color':'#333'});
    })
  
    if( winwWidth < 700){
        $('div.nav_full_bg').css({'height': '50'});
    } else if( 1200 < winwWidth ){
        $('div.nav_full_bg').css({'height': '650'});
    } else {
        $('div.nav_full_bg').css({'height': '450'});
    };


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
  /*   
    $(window).scroll(function(){
        if($(document).scrollTop() == 0){
            $('div.top_btn a').hide();
        }else{
            $('div.top_btn a').show();
        }
    });   
 */
    $(window).scroll(function() {
      if ($(document).scrollTop() > 100) {
        $('div.top_btn a').addClass('show');
      } else {
        $('div.top_btn a').removeClass('show');
      }
    });

  });