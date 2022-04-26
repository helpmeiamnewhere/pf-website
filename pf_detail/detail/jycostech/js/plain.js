$(function(){
    $(window).resize(function(){
        var width = window.innerWidth;
        if(width < 780){
            $('header h1 img').attr('src','img/logo/logo_noline.svg')
        }
        else{
            $('header h1 img').attr('src','img/logo/text_logo_blue.svg') 
        }
    }).resize();
});


$(function(){
    $(window).resize(function(){
        var width = window.innerWidth;
        if(width < 1219){
            $('section.portfolio div>img:nth-of-type(1)').attr('src','img/others/pd_onesis_mobile.jpg')
        }
        else{
            $('section.portfolio div>img:nth-of-type(1)').attr('src','img/others/pf_bg.png') 
        }
    }).resize();
});


$(function(){
    $(window).resize(function(){
        var width = window.innerWidth;
        if(width < 780){
            $('section.struc div>img').attr('src','img/others/struc_column.svg')
        }
        else{
            $('section.struc div>img').attr('src','img/others/struc.svg') 
        }
    }).resize();
});


$(function(){
    $(window).resize(function(){
        var width = window.innerWidth;
        if(width < 1219){
            $('section.product div>img:nth-of-type(1)').attr('src','img/others/onesis2_mobile.jpg')
        }
        else{
            $('section.product div>img:nth-of-type(1)').attr('src','img/others/pd_onesis_bg.jpg') 
        }
    }).resize();
});
