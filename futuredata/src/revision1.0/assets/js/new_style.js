
//FFBanner(largeBanner)
if ($('.largeBanner .FFCarousel').length > 0) {
    $('.largeBanner .FFCarousel').owlCarousel({
        loop: true,
        nav: true,
        dots: true,
        items: 1,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplaySpeed: 800,
        responsive: {
            0: { items: 1 },
            600: { items: 1 },
            1000: { items: 1 }
        }
    });
}
// (new-impBtn)
if ($('.new-impBtn').length > 0) {
    $('.new-impBtn .impBtn').owlCarousel({
        rtl: false,         // 關閉 RTL
        loop: false,        // 不輪播
        margin: 0,
        nav: false,         // 關閉左右箭頭
        dots: false,        // 關閉圓點
        mouseDrag: false,   // 禁用滑鼠拖拉
        touchDrag: false,   // 禁用觸控滑動
        pullDrag: false,    // 禁用拉動
        freeDrag: false,    // 禁用自由拖動

        responsive: {
            0: {
                items: 5
            }
        }
    });
}
    if ($(window).outerWidth() > 767) {
        var _localitemcount = $('.nav-scroller').find('.dropdown').length;
        if (_localitemcount >= 9) {
            $('.containerPos').next().addClass('swiper-container');
            $('.nav-scroller-content').addClass('swiper-wrapper');
            $('.nav-scroller-content>.dropdown').addClass('swiper-slide');
            $('.swiper-container').parents('.navbar-collapse.nav-wrapper').addClass('nav-wrapper-rel');
        }
        // swpier

        var _localitemcount = $('.nav-scroller .swiper-container').find('.swiper-slide').length;
        if (_localitemcount >= 9) {
            _localitemcount = 9
        }

        if ($('.nav-scroller .swiper-container').parents('.mainmenu').hasClass('store')) {
            _localitemcount = 9
        }

        var location_swiper = new Swiper('.swiper-container', {
            slidesPerView: _localitemcount,
            slidesPerColumn: 1,
            spaceBetween: 0,
            freeMode: true,
            centerInsufficientSlides: true,
            allowTouchMove: true,
            initialSlide: 0,
            breakpoints: {
                1024: {
                    slidesPerView: 9,
                },
                768: {
                    slidesPerView: 9,
                }
            },
             navigation: {
                nextEl: "", // 下一頁按鈕物件
                prevEl: "", // 上一頁按鈕物件
            }
        });
    }
//未來Family 嚴選作家
$(function() {
    if ($('.authorSlick2').length) {
        $('.authorSlick2').slick({
            dots: false,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 2,
            autoplay: true,
               arrows: false,

            prevArrow: '<a href="" title="Previous" class="tabListBtn"><i class="icon-back"></i></a>',
            nextArrow: '<a href="" title="Next" class="tabListBtn "><i class="icon-next"></i></a>',
            responsive: [{
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 4,
                           arrows: false,
dots: false,

                    }
                },
                {
                    breakpoint: 1190,
                    settings: {
                        slidesToShow: 3,
                           arrows: false,
dots: false,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 4,
                           arrows: false,
dots: false,

                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3,
                           arrows: false,
dots: false,

                    }
                },
                {
                    breakpoint: 641,
                    settings: {
                        slidesToShow: 2,
                        arrows: false,
dots: false,
                    }
                }
            ]
        });
    }
});// JavaScript Document


//未來親子書籍

$(function() {
    if ($('.authorSchool').length) {
        $('.authorSchool').slick({
            dots: false,
            infinite: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: false,
            arrows: false,
            prevArrow: '<a href="" title="Previous" class="tabListBtn"><i class="icon-back"></i></a>',
            nextArrow: '<a href="" title="Next" class="tabListBtn "><i class="icon-next"></i></a>',
            responsive: [{
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,

                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
  arrows: false,
                    }
                },
                {
                    breakpoint: 641,
                    settings: {
                        slidesToShow: 1,
                     arrows: false,
dots: false,
                    }
                }
            ]
        });
    }
});// JavaScript Document



//未來學院
$(function() {
    if ($('.authorBook').length) {
        $('.authorBook').slick({
            dots: false,
            infinite: false,
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay: false,
            arrows: false,
            prevArrow: '<a href="" title="Previous" class="tabListBtn"><i class="icon-back"></i></a>',
            nextArrow: '<a href="" title="Next" class="tabListBtn "><i class="icon-next"></i></a>',
            responsive: [{
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 5,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,

                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3,
                         arrows: false,

                    }
                },
                {
                    breakpoint: 641,
                    settings: {
                        slidesToShow: 2,
                      arrows: false,
dots: false,

                    }
                }
            ]
        });
    }
});// JavaScript Document
