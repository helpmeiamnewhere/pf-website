/* 
//top 버튼
$(document).ready(function(){
    var floatPosition = parseInt($('.top_btn').css('top'));
    $(window).scroll(function(){
        var scrollTop = $(window).scrollTop();
        var newPosition = scrollTop + floatPosition + 'px';
        $('.top_btn').stop().animate({
            'top' : newPosition
        },1500);
    }).scroll();
});


$(".top_btn").click(function(){
    $('html,body').animate({
        scrollTop : 0
    },500);
    return false;
});

 */

//top 버튼
$(function(){
    $('a.top_btn').on('click',function(e){
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
        $('a.top_btn').addClass('show');
      } else {
        $('a.top_btn').removeClass('show');
      }
    });

  });