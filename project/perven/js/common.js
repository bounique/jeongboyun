$(document).ready(function(){
   
    
    $('.dp2').hide(); //처음에 dp2를 하이드 시켜야 하기때문에 hide를 준다.
    
    $('.gnb>li').mouseenter(function(){ //해당 메뉴에 마우스오버했을때 dp2가 내려오게끔 한다.
       $(this).children('.dp2').stop().slideDown(); //stop - 마우스오버를 했을때 딱 오버한 순간에만 내려오게끔 한다. this - 마우스오버한 메뉴에만 dp2가 보이게끔 한다.
    });
    
    $('.gnb>li').mouseleave(function(){ //해당 메뉴에 마우스가 벗어났을때 dp2가 올라가게 한다.
       $(this).children('.dp2').stop().slideUp(); 
    });
    
    
    
    
    var slider = $(".best_list").bxSlider({
        auto: true,
        maxSlides: 4, 
        moveSlides: 2,
        touchEnabled: false,
        slideWidth: 229,
        slideMargin: 40
    });



    var slider = $(".mb").bxSlider({
        auto: true
    });
    
    
});