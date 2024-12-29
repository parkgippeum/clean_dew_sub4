/* aos */
AOS.init({
    duration: 1200
  })

/* nav */
$(document).ready(function(){
    
    $('.gnb>li').mouseenter(function(){
        $(this).find('.sub').stop().slideDown();
    });
    
    $('.gnb>li').mouseleave(function(){
        $(this).find('.sub').stop().slideUp();
    });
    
});

/* nav scroll */
$(window).on('scroll',function(){
    if($(window).scrollTop()){
        $('#header').addClass('active');
    }else{
        $('#header').removeClass('active');
    }
});


/* slide */
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelector('.con3_slides');
    const slideCount = document.querySelectorAll('.con3_slide').length;
    let currentIndex = 0;

    document.querySelector('.con3_next').addEventListener('click', () => {
        if (currentIndex < slideCount - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateSlidePosition();
    });

    document.querySelector('.con3_prev').addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = slideCount - 1;
        }
        updateSlidePosition();
    });

    function updateSlidePosition() {
        const offset = -currentIndex * 100;
        slides.style.transform = `translateX(${offset}%)`;
    }
});


/* border */
$(function(){
    $(".board>li").click(function(){
        $(this).addClass("on").siblings().removeClass("on");
    });
});

/* con2 */
$(".que").click(function() {
    $(this).next(".anw").stop().slideToggle(300);
   $(this).toggleClass('on').siblings().removeClass('on');
   $(this).next(".anw").siblings(".anw").slideUp(300); // 1개씩 펼치기
 });

 /* popup */
 $(function(){
    $("#box a").click(function(){
        $("#popup").fadeIn(); 
    });
    $("#popup a").click(function(){
        $("#popup").fadeOut();
    });
});

 $(function(){
    $("#box02 a").click(function(){
        $("#popup02").fadeIn(); 
    });
    $("#popup02 a").click(function(){
        $("#popup02").fadeOut();
    });
});
 $(function(){
    $("#box03 a").click(function(){
        $("#popup03").fadeIn(); 
    });
    $("#popup03 a").click(function(){
        $("#popup03").fadeOut();
    });
});

 $(function(){
    $("#box04 a").click(function(){
        $("#popup04").fadeIn(); 
    });
    $("#popup04 a").click(function(){
        $("#popup04").fadeOut();
    });
});
