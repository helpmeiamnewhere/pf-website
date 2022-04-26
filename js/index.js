
/* 라이트박스 */

new SimpleLightbox('.gallery a', {
    widthRatio: 1,
    heightRatio: 1,
});


/* 네비게이션 메뉴 이동 */


$(window).scroll(function(){
    var honey = $('header').offset().top;
        maintop = $(document).scrollTop();

    if ( maintop >= 150 ) {
        $('header').addClass('honey');
    } else {
        $('header').removeClass('honey');
    };

});



$(window).scroll(function(){
    var pt = $('#portfolio').offset().top ;
        dg = $('#digital_artwork').offset().top;
        am = $('#about_me').offset().top;
        height = $(document).scrollTop();

    if ( 0 <= height && height < pt - 100 ){
        $('nav ul li:nth-of-type(1) span:nth-of-type(2)').css({
            'opacity': '0', 'visibility':'hidden'
        });
        $('nav ul li:nth-of-type(2) span:nth-of-type(2)').css({
            'opacity': '0', 'visibility':'hidden'
        });
        $('nav ul li:nth-of-type(3) span:nth-of-type(2)').css({
            'opacity': '0', 'visibility':'hidden'
        });
    } else if( dg -300 > height ){
        $('nav ul li:nth-of-type(1) span:nth-of-type(2)').css({
            'opacity': '1', 'visibility':'visible'
        });
        $('nav ul li:nth-of-type(2) span:nth-of-type(2)').css({
            'opacity': '0', 'visibility':'hidden'
        });
        $('nav ul li:nth-of-type(3) span:nth-of-type(2)').css({
            'opacity': '0', 'visibility':'hidden'
        });
    }else if( am - 400 > height && height >= dg -300 ){
        $('nav ul li:nth-of-type(2) span:nth-of-type(2)').css({
            'opacity': '1', 'visibility':'visible'
        });
        $('nav ul li:nth-of-type(1) span:nth-of-type(2)').css({
            'opacity': '0', 'visibility':'hidden'
        });
        $('nav ul li:nth-of-type(3) span:nth-of-type(2)').css({
            'opacity': '0', 'visibility':'hidden'
        });
    }else {
        $('nav ul li:nth-of-type(3) span:nth-of-type(2)').css({
            'opacity': '1', 'visibility':'visible'
        });
        $('nav ul li:nth-of-type(1) span:nth-of-type(2)').css({
            'opacity': '0', 'visibility':'hidden'
        });
        $('nav ul li:nth-of-type(2) span:nth-of-type(2)').css({
            'opacity': '0', 'visibility':'hidden'
        });
    }
})
 

$(document).ready(function(){
    $('.nav_menu').click(function(){
       $('html, body').animate({scrollTop: ($(this.hash).offset().top - 100) }, 500);
    });
  }); 

/* 인트로덕션 */

$('.moving').click(function(){
    $('#introduction').fadeIn();
});

$('.intro_modal').click(function(){
    $('#introduction').fadeOut();
});



/* top 버튼 */


$(function(){
    $('div.top a').on('click',function(e){
        e.preventDefault();
        $('html,body').animate({scrollTop:0},600);
    });
  
  $(window).scroll(function() {
      if ($(document).scrollTop() > 100) {
        $('div.top').addClass('show');
      } else {
        $('div.top').removeClass('show');
      }
    });
  
  });
  