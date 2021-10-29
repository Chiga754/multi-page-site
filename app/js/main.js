$(function () {
    // Rightside menu
    $(".header__btn").on('click', function () {
        $(".rightside-menu").removeClass("rightside-menu--close")
    })
    $(".rightside-menu__clouse").on('click', function () {
        $(".rightside-menu").addClass("rightside-menu--close")
    })


    // Sliders
    $('.top__slider').slick({
        dots: true,
        arrows: false,
        fade: true,
        autoplay: true,
    });

    $('.contact__slider').slick({
        dots: true,
        arrows: false,
        slidesToShow: 10,
        slidesToScroll: 10,
    });


    // Mixit Up
    const mixer = mixitup('.gallery__inner', {
        load: {
            filter: '.living',
        }
    });
})