$(function () {
    $(".header__menu-button ").on("click", function () {
        $(".modal-menu").addClass("active");
        $("body").addClass("lock");
    });
    $(".modal-menu").on("click", function () {
        $(".modal-menu").removeClass("active");
        $("body").removeClass("lock");


    });
    $(".popup-clicket__btn").on("click", function () {
        $(".popup-click").addClass("active");
        $("body").addClass("lock");
    });
    $(".popup-click").on("click", function () {
        $(".popup-click").removeClass("active");
        $("body").removeClass("lock");


    });







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



/* $(".nav__list").hover(
    function () {
        $(this).append($(".nav__hover"));
    }, function () {
        $(this).find("").last().remove();
    }
); */


/*
    $(".nav__list.active").hover(function () {
        $('.nav__hover').show();
    }, function () {
        $('.nav__hover').hide();
    }); */