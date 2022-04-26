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
  