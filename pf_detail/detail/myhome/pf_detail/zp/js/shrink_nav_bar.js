/*
* ---------------------------------------------------------------------------
* jQuery Version
* ---------------------------------------------------------------------------
*/

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
/*
   // switchImg 함수
  function switchImg(newImgPath){
    $Logo.fadeOut(300,function(){
        $Logo.attr('src',newImgPath);
        $Logo.fadeIn(300);
    });
  }


/*
 ---------------------------------------------------------------------------
 Vanilla JavaScript Version
 ---------------------------------------------------------------------------

var $window = window,
    $mainHeader = document.getElementById('main-header'),
    $defaultLogo = 'images/logo.svg',
    $threshold = $mainHeader.offsetHeight,
    $Logo = document.getElementById('logo'),
    $smallLogo = 'images/logo-shrink.svg';

    console.log($threshold);

    $window.addEventListener('scroll',function(){
        if(this.pageYOffset > $threshold){
            if(!$mainHeader.classList.contains('shrink')){
                $mainHeader.classList.add('shrink');
                switchImg($smallLogo);
            }
        }else{
            if($mainHeader.classList.contains('shrink')){
                $mainHeader.classList.remove('shrink');
                switchImg($defaultLogo);
            }
        }
    });

   // switchImg 함수
   
   function switchImg(newImgPath){
    $Logo.fadeOut(300,function(){
        $Logo.attr('src',newImgPath);
        $Logo.fadeIn(300);
    });
  }
 
 function switchImg(newImgPath){
     //현재 이미지 안보이고, 0.3초 지나면 새로운주소 변경 보이도록
     $Logo.classList.add('hide');
     setTimeout(function(){
        $Logo.setAttribute('src',newImgPath);
        $Logo.classList.remove('hide');
     }, 300);
 }
  */