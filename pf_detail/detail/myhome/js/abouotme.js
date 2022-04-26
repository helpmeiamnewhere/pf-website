

// Hide Header on on scroll down 
var didScroll; 
var lastScrollTop = 0; 
var delta = 5; 
var navbarHeight = $('.fake-ui').outerHeight(); 

$(window).scroll(function(event){ 
    didScroll = true; 
}); 
setInterval(function() { 
    if (didScroll) { 
        hasScrolled(); 
        didScroll = false; 
    } 
}, 250); 
function hasScrolled() { 
    var st = $(this).scrollTop(); 
    
    // Make sure they scroll more than delta 
    if(Math.abs(lastScrollTop - st) <= delta) 
    return; 
    // If they scrolled down and are past the navbar, add class .nav-up. 
    // This is necessary so you never see what is "behind" the navbar. 
    if (st > lastScrollTop && st > navbarHeight){ 
        // Scroll Down 
        $('.fake-ui').removeClass('nav-down').addClass('nav-up');
     } else { 
            // Scroll Up 
            if(st + $(window).height() < $(document).height()) { 
                $('.fake-ui').removeClass('nav-up').addClass('nav-down');
             } 
            } lastScrollTop = st; 
        }

//출처: https://webdir.tistory.com/481 [WEBDIR]


$('div.trees_01').mouseenter(function(){
    $(this).css({"filter":"saturate(1.8)"});
    $(this).siblings().css({"filter":"grayscale(1)"});
})
$('div.trees_01').mouseleave(function(){
    $(this).css({"filter":"none"});
    $(this).siblings().css({"filter":"none"});
})
$('div.trees_02').mouseenter(function(){
    $(this).css({"filter":"saturate(1.8)"});
    $(this).siblings().css({"filter":"grayscale(1)"});
})
$('div.trees_02').mouseleave(function(){
    $(this).css({"filter":"none"});
    $(this).siblings().css({"filter":"none"});
})
$('div.trees_03').mouseenter(function(){
    $(this).css({"filter":"saturate(1.8)"});
    $(this).siblings().css({"filter":"grayscale(1)"});
})
$('div.trees_03').mouseleave(function(){
    $(this).css({"filter":"none"});
    $(this).siblings().css({"filter":"none"});
})
$('div.trees_04').mouseenter(function(){
    $(this).css({"filter":"saturate(1.8)"});
    $(this).siblings().css({"filter":"grayscale(1)"});
})
$('div.trees_04').mouseleave(function(){
    $(this).css({"filter":"none"});
    $(this).siblings().css({"filter":"none"});
})
$('div.trees_05').mouseenter(function(){
    $(this).css({"filter":"saturate(1.8)"});
    $(this).siblings().css({"filter":"grayscale(1)"});
})
$('div.trees_05').mouseleave(function(){
    $(this).css({"filter":"none"});
    $(this).siblings().css({"filter":"none"});
})
$('div.trees_06').mouseenter(function(){
    $(this).css({"filter":"saturate(1.8)"});
    $(this).siblings().css({"filter":"grayscale(1)"});
})
$('div.trees_06').mouseleave(function(){
    $(this).css({"filter":"none"});
    $(this).siblings().css({"filter":"none"});
})
$('div.trees_07').mouseenter(function(){
    $(this).css({"filter":"saturate(1.8)"});
    $(this).siblings().css({"filter":"grayscale(1)"});
})
$('div.trees_07').mouseleave(function(){
    $(this).css({"filter":"none"});
    $(this).siblings().css({"filter":"none"});
})
$('div.trees_08').mouseenter(function(){
    $(this).css({"filter":"saturate(1.8)"});
    $(this).siblings().css({"filter":"grayscale(1)"});
})
$('div.trees_08').mouseleave(function(){
    $(this).css({"filter":"none"});
    $(this).siblings().css({"filter":"none"});
})
$('div.trees_09').mouseenter(function(){
    $(this).css({"filter":"saturate(1.8)"});
    $(this).siblings().css({"filter":"grayscale(1)"});
})
$('div.trees_09').mouseleave(function(){
    $(this).css({"filter":"none"});
    $(this).siblings().css({"filter":"none"});
})
$('div.trees_10').mouseenter(function(){
    $(this).css({"filter":"saturate(1.8)"});
    $(this).siblings().css({"filter":"grayscale(1)"});
})
$('div.trees_10').mouseleave(function(){
    $(this).css({"filter":"none"});
    $(this).siblings().css({"filter":"none"});
})
$('div.trees_11').mouseenter(function(){
    $(this).css({"filter":"saturate(1.8)"});
    $(this).siblings().css({"filter":"grayscale(1)"});
})
$('div.trees_11').mouseleave(function(){
    $(this).css({"filter":"none"});
    $(this).siblings().css({"filter":"none"});
})
$('div.trees_12').mouseenter(function(){
    $(this).css({"filter":"saturate(1.8)"});
    $(this).siblings().css({"filter":"grayscale(1)"});
})
$('div.trees_12').mouseleave(function(){
    $(this).css({"filter":"none"});
    $(this).siblings().css({"filter":"none"});
})
$('div.trees_13').mouseenter(function(){
    $(this).css({"filter":"saturate(1.8)"});
    $(this).siblings().css({"filter":"grayscale(1)"});
})
$('div.trees_13').mouseleave(function(){
    $(this).css({"filter":"none"});
    $(this).siblings().css({"filter":"none"});
})
$('div.trees_14').mouseenter(function(){
    $(this).css({"filter":"saturate(1.8)"});
    $(this).siblings().css({"filter":"grayscale(1)"});
})
$('div.trees_14').mouseleave(function(){
    $(this).css({"filter":"none"});
    $(this).siblings().css({"filter":"none"});
})
$('div.trees_15').mouseenter(function(){
    $(this).css({"filter":"saturate(1.8)"});
    $(this).siblings().css({"filter":"grayscale(1)"});
})
$('div.trees_15').mouseleave(function(){
    $(this).css({"filter":"none"});
    $(this).siblings().css({"filter":"none"});
})
$('div.trees_16').mouseenter(function(){
    $(this).css({"filter":"saturate(1.8)"});
    $(this).siblings().css({"filter":"grayscale(1)"});
})
$('div.trees_16').mouseleave(function(){
    $(this).css({"filter":"none"});
    $(this).siblings().css({"filter":"none"});
})

// 

    var graphic = $("img.field, img.trees_01, img.trees_02, img.trees_03, img.trees_04, img.trees_07, img.trees_09, img.trees_10, img.trees_11, img.trees_12, img.trees_13, img.trees_14, img.trees_15, img.trees_16, img.trees_17");
        corp = $("img.field, img.trees_01, img.trees_02, img.trees_03, img.trees_04, img.trees_05, img.trees_06, img.trees_08, img.trees_09, img.trees_10, img.trees_11, img.trees_12, img.trees_13, img.trees_14, img.trees_15, img.trees_16");
        code = $("img.field, img.trees_01, img.trees_02, img.trees_03, img.trees_04, img.trees_05, img.trees_06, img.trees_07, img.trees_08, img.trees_11, img.trees_12, img.trees_13, img.trees_14, img.trees_15, img.trees_16, img.trees_17");
        lang = $("img.field, img.trees_05, img.trees_06, img.trees_07, img.trees_08, img.trees_09, img.trees_10, img.trees_11, img.trees_12, img.trees_13, img.trees_14, img.trees_15, img.trees_16, img.trees_17");
        start = $("img.field, img.trees_01, img.trees_02, img.trees_03, img.trees_04, img.trees_05, img.trees_06, img.trees_07, img.trees_08, img.trees_09, img.trees_10, img.trees_17");

$(function(){


$('#graphic').mouseenter(function(){
    graphic.css({
        "filter":"grayscale(1)"
    });
    $("img.graphic").siblings().addClass('hover');
});
$('#graphic').mouseleave(function(){
    graphic.css({
        "filter":"none"
    });
    $("img.graphic").siblings().removeClass('hover');
});


$('#corp').mouseenter(function(){
    corp.css({
        "filter":"grayscale(1)"
    });
    $("img.corp").siblings().addClass('hover');
});
$('#corp').mouseleave(function(){
    corp.css({
        "filter":"none"
    });
    $("img.corp").siblings().removeClass('hover');
});

$('#code').mouseenter(function(){
    code.css({
        "filter":"grayscale(1)"
    });
    $("img.code").siblings().addClass('hover');
});
$('#code').mouseleave(function(){
    code.css({
        "filter":"none"
    });
    $("img.code").siblings().removeClass('hover');
});

$('#lang').mouseenter(function(){
    lang.css({
        "filter":"grayscale(1)"
    });
    $("img.lang").siblings().addClass('hover');
});
$('#lang').mouseleave(function(){
    lang.css({
        "filter":"none"
    });
    $("img.lang").siblings().removeClass('hover');
});


$('#start').mouseenter(function(){
    start.css({
        "filter":"grayscale(1)"
    });
    $("img.start").siblings().addClass('hover');
});
$('#start').mouseleave(function(){
    start.css({
        "filter":"none"
    });
    $("img.start").siblings().removeClass('hover');
});




});