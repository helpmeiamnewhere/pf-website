var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  $('a.sec_one').click(function(){
      $(this).addClass('active');
      $(this).siblings().removeClass('active');
      $('div.one').show();
      $('div.two, div.three').hide();
  });
  $('a.sec_two').click(function(){
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
    $('div.two').show();
    $('div.one, div.three').hide();
});
$('a.sec_three').click(function(){
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
    $('div.three').show();
    $('div.one, div.two').hide();
});