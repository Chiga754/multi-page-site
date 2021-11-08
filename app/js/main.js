$(function () {
    // Rightside menu
    $(".header__btn").on('click', function () {
        $(".rightside-menu").removeClass("rightside-menu--close")
    })
    $(".rightside-menu__clouse").on('click', function () {
        $(".rightside-menu").addClass("rightside-menu--close")
    })
    $(".header__btn-menu").on('click', function () {
        $(".menu").toggleClass('menu--open')
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
        responsive: [
            {
                breakpoint: 1700,
                settings: {
                    slidesToShow: 8,
                    slidesToScroll: 8,
                }
            },
            {
                breakpoint: 1511,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 6,
                }
            },
            {
                breakpoint: 1180,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                }
            }
        ]
    });

    $('.article-slider__box').slick({
        arrows: true,
        prevArrow: '<button type="button" class="article-slider-arrow article-slider-arrowleft"><img src="images/blog/blog-slider-icon-left.svg" alt="icon"></button>',
        nextArrow: '<button type="button" class="article-slider-arrow article-slider-arrowright"><img src="images/blog/blog-slider-icon-right.svg" alt="icon"></button>',
    });

    // Mixit Up
    if ($("div").is(".gallery__inner")) {
        const mixer = mixitup('.gallery__inner', {
            load: {
                filter: '.living',
            }
        });
    }

})