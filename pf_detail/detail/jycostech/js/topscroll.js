
//top 버튼
$(function(){
    $('a.top_btn').on('click',function(e){
        e.preventDefault();
        $('html,body').animate({scrollTop:0},600);
    });

    $(window).scroll(function() {
      if ($(document).scrollTop() > 100) {
        $('a.top_btn').addClass('show');
      } else {
        $('a.top_btn').removeClass('show');
      }
    });

  });