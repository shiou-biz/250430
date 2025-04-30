$(function(){
    $('.header-nav_section').find('ul').hide();

    $('.header-nav_section').hover(
        function() {
            $(this).children('.header-nav_section-itemlist').stop().slideDown(500);
            $(this).find('.plus-height').stop().fadeOut(300);; 
        },
        function() {
            $(this).children('.header-nav_section-itemlist').stop().slideUp(500);
            $(this).find('.plus-height').stop().fadeIn(300);; 
        }
    );

    $('.slider__main').slick({
        arrows: false,
        autoplay: true,
        slidesToShow: 2.5,
        slidesToScroll: 1,
        infinite: true,
        autoplaySpeed: 3000,
        cssEase: "linear",
    });
});