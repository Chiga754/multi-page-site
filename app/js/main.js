$(function () {
    $(".header__btn").on('click', function () {
        $(".rightside-menu").removeClass("rightside-menu--close")
    })
    $(".rightside-menu__clouse").on('click', function () {
        $(".rightside-menu").addClass("rightside-menu--close")
    })

    $('.top__slider').slick({
        dots: true,
        arrows: false,
        fade: true,
        autoplay: true,
    });

    const mixer = mixitup('.gallery__inner', {
        load: {
            filter: '.living',
        }
    });
})