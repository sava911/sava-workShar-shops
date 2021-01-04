$(function () {

    $(".banner-section__slider").slick({
        dots: true,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        fade: true,
        prevArrow: '<button><img class="banner-arrow banner-arrow__prev" src="images/arrow-left.svg" alt=""></button>',
        nextArrow: '<button><img class="banner-arrow banner-arrow__nex" src="images/arrow-right.svg" alt=""></button>'
    })


    $(".tab").on("click", function (e) {
        e.preventDefault();
        $($(this).siblings()).removeClass("tab--active");
        $($(this).parent().siblings().find("div")).removeClass(
            "tabs-contant--active"
        );

        $(this).addClass("tab--active");
        $($(this).attr("href")).addClass("tabs-contant--active");
    });

});
