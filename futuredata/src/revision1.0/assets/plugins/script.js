// 共用nav >768 menu body overflow:hidden
$(function () {
    if ($('.navBtn i').length) {
        $(".navBtn i").click(function () {
            $("body").toggleClass("modal-openB");
        });
    }
});

// 共用nav silder
if ($('.navCarousel').length) {

    $('.navCarousel').on('initialized.owl.carousel changed.owl.carousel', function (e) {
        if (!e.namespace) {
            return;
        }
        var carousel = e.relatedTarget;
        $('.slider-counter').text(carousel.relative(carousel.current()) + 1 + '/' + carousel.items().length);
    }).owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        margin: 40,
        responsive: {
            0: {
                items: 1
            },
            414: {
                items: 1
            },
            992: {
                items: 2
            }
        }
    });
    $('.s-tab-content').addClass('l-block');
    $('a.dropdown-toggle:eq(0)').on('mousemove', function () {
        setTimeout(function () {
            $('[data-tabs="s-tab-1"]').mouseover();
        }, 500);
    });

}

// nav right icon panel
// swpier
if ($('.new-impBtn').length > 0) {
    var _impBtnCount = $('.new-impBtn').find('.swiper-slide').length;

    if (_impBtnCount == 2) {
        _impBtnCount = 2
    } else if (_impBtnCount >= 5) {
        _impBtnCount = 5
    } else if (_impBtnCount < 5) {
        _impBtnCount = 3
    }
    $('.new-impBtn .impBtn').owlCarousel({
        rtl: true,
        loop: false,
        margin: 0,
        nav: true,
        dots: false,
        navText: ['<i class="kyicon-keyboard_arrow_right"></i>', '<i class="kyicon-keyboard_arrow_left"></i>'],
        responsive: {
            320: {
                items: _impBtnCount,
                rtl: false
            },
            360: {
                items: _impBtnCount - 1,
                rtl: false
            },
            375: {
                items: _impBtnCount,
                rtl: false
            },
            414: {
                items: _impBtnCount,
                rtl: false
            },
            768: {
                items: _impBtnCount,
                rtl: false
            },
            1200: {
                items: 5
            }
        }
    })


    // swpier
    // var _localitemcount = $('.nav-scroller').find('.dropdown').length;
    // if (_localitemcount >= 12) {
    //     _localitemcount = 12.2
    // }
    // var location_swiper = new Swiper('.nav-scroller', {
       

    //     slidesPerView: _localitemcount,
    //     slidesPerColumn: 1,
    //     spaceBetween: 0,
    //     freeMode: true,
    //     centerInsufficientSlides: true,
    //     allowTouchMove: true,
    //     initialSlide: 0,
    //     breakpoints: {
    //         991: {
    //             slidesPerView: 6.2,
    //             allowTouchMove: true
    //         },
    //         767: {
    //             slidesPerView: 3.2,
    //             allowTouchMove: true
    //         }
    //     },
    //     navigation: {
    //         nextEl: ".nav-scroller-btn--left", // 上一頁按鈕物件
    //         prevEl: ".nav-scroller-btn--right", // 下一頁按鈕物件
    //     }
    // });



    
    // var hr_swiper = new Swiper('.new-impBtn', {
    //     slidesPerView: 5.5,
    //     slidesPerColumn: 1,
    //     spaceBetween: 0,
    //     freeMode: true,
    //     allowTouchMove: true,
    //     RTL:true,
    //     breakpoints: {
    //         1199: {
    //             slidesPerView: 4.5,
    //             slidesPerColumn: 1,
    //             allowTouchMove: true
    //         },
    //         767: {
    //             slidesPerView: 5.5,
    //             slidesPerColumn: 1,
    //             allowTouchMove: true
    //         }
    //         ,
    //         400: {
    //             slidesPerView: 4.5,
    //             slidesPerColumn: 1,
    //             allowTouchMove: true
    //         }
    //     },
    //     navigation: {
    //         nextEl: '.swiper-button-next',
    //         prevEl: '.swiper-button-prev',
    //     }
    // });
}
// for(var i = 0; i < $('[data-tabs]').length; i++) {
//     $($('[data-tabs]')[i]).parent().click();
//     console.log($('[data-tabs]')[i]);
// }

//共用ie-object-fit cover
var msieversion;

$(function () {
    msieversion = function () {
        var ua = window.navigator.userAgent;
        var msie = ua.indexOf("MSIE ");

        if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {

            $('.itemthumb').each(function () {
                var $container = $(this),
                    imgUrl = $container.find('img').prop('src');
                if (imgUrl) {
                    $container
                        .css('backgroundImage', 'url(' + imgUrl + ')')
                        .addClass('compat-object-fit');
                }
            });
        } else {

        }

        return false;
    }
    msieversion();
});

//共用ie-object-fit contain
var msieversion;

$(function () {
    msieversion = function () {
        var ua = window.navigator.userAgent;
        var msie = ua.indexOf("MSIE ");

        if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {

            $('.itemthumbB').each(function () {
                var $container = $(this),
                    imgUrl = $container.find('img').prop('src');
                if (imgUrl) {
                    $container
                        .css('backgroundImage', 'url(' + imgUrl + ')')
                        .addClass('compat-object-fit');
                }
            });
        } else {

        }

        return false;
    }
    msieversion();
});

// 共用fixedHeader
function fixedHeader() {
    if ($(window).scrollTop() > 100) {
        if (!$(".mainmenu").hasClass("fixedHeader")) {
            $('.mainmenu').addClass("fixedHeader");
            $('.fixedHeader').animate({
                top: "-80"
            }, 500);
        }
    } else {
        $('.mainmenu').removeClass("fixedHeader");
        $('.mainmenu').removeAttr("style");
    }
}

$(window).scroll(function () {
    fixedHeader()
});


//親子學習平台banner
if ($('.hpCarousel').length) {
    $('.hpCarousel').owlCarousel({
        loop: true,
        nav: true,
        dots: true,
        items: 1,
        autoplay: true,
    });
}



// 親子學習平台最新出版
if ($('.newsCarousel').length) {
    var newsCarousel = $('.newsCarousel');
    newsCarousel.owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: true,
        margin: 30,
        autoplay: true,
        responsive: {
            0: {
                items: 2,
                margin: 20
            },
            414: {
                items: 2,
                margin: 20
            },
            641: {
                items: 3
            },
            1024: {
                items: 4
            },
            1200: {
                items: 5
            }
        }
    });
    newsCarousel.on('resize.owl.carousel', function () {
        setTimeout(function () {
            $('.newBox .owl-next').css({
                position: 'absolute',
                right: ($('.newBox .container').width() - $('.newBox .owl-dot').width() * $('.newBox .owl-dot').length) / 2 - $('.newBox .owl-dot').width() * 2 + 'px',
                top: $('.newBox .owl-stage').height() + 16 + 'px',
                'z-index': '99'
            });

            $('.newBox .owl-prev').css({
                position: 'absolute',
                left: ($('.newBox .container').width() - $('.newBox .owl-dot').width() * $('.newBox .owl-dot').length) / 2 - $('.newBox .owl-dot').width() * 2 + 'px',
                top: $('.newBox .owl-stage').height() + 16 + 'px',
                'z-index': '99'
            });
        }, 1);
    });

    $('.newBox .owl-next').css({
        position: 'absolute',
        right: ($('.newBox .container').width() - $('.newBox .owl-dot').width() * $('.newBox .owl-dot').length) / 2 - $('.newBox .owl-dot').width() * 2 + 'px',
        top: $('.newBox .owl-stage').height() + 16 + 'px',
        'z-index': '99'
    });

    $('.newBox .owl-prev').css({
        position: 'absolute',
        left: ($('.newBox .container').width() - $('.newBox .owl-dot').width() * $('.newBox .owl-dot').length) / 2 - $('.newBox .owl-dot').width() * 2 + 'px',
        top: $('.newBox .owl-stage').height() + 16 + 'px',
        'z-index': '99'
    });
}
if ($('.videoCarousel').length) {
    $('.videoCarousel').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        dots: true,
        responsive: [

            {
                breakpoint: 641,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    rows: 3,
                    slidesPerRow: 1,
                }
            }
        ]

    });

    $(window).on('resize', function () {
        setTimeout(function () {
            $('.videoBox .slick-next').css({
                position: 'absolute',
                right: ($('.videoBox .container').width() - 14 * $('.videoBox [role=tab]').length) / 2 - 14 + 'px',
                top: $('.slick-track').height() + 30 + 'px'
            });
            $('.videoBox .slick-prev').css({
                position: 'absolute',
                left: ($('.videoBox .container').width() - 14 * $('.videoBox [role=tab]').length) / 2 - 14 + 'px',
                top: $('.slick-track').height() + 30 + 'px'
            });
        });
    });

    $('.videoBox .slick-next').css({
        position: 'absolute',
        right: ($('.videoBox .container').width() - 14 * $('.videoBox [role=tab]').length) / 2 - 14 + 'px',
        top: $('.slick-track').height() + 30 + 'px'
    });
    $('.videoBox .slick-prev').css({
        position: 'absolute',
        left: ($('.videoBox .container').width() - 14 * $('.videoBox [role=tab]').length) / 2 - 14 + 'px',
        top: $('.slick-track').height() + 30 + 'px'
    });
}


// 共用按鈕置頂
$(function () {
    if ($('#gotop,#gotopB').length) {
        $("#gotop,#gotopB").click(function () {
            jQuery("html,body").animate({
                scrollTop: 0
            }, 1000);
        });
        $(window).scroll(function () {
            if ($(this).scrollTop() > 300) {
                $('#gotop').fadeIn("fast");
            } else {
                $('#gotop').stop().fadeOut("fast");
            }
        });
    }
});


//共用文章內文-文字大小
$(function () {
    if ($('.fontSize a').length) {
        $(".fontSize a").click(function () {
            $(".changeFonSizeBox").toggleClass("changeFont");
            $(".fontSize").toggleClass("changeIcon");
        });
    }
});


//共用文章內文-右邊垂直silder
$(function () {
    if ($('.magazineCarousel').length) {
        $('.magazineCarousel').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            vertical: true,
            verticalSwiping: true,
            autoplay: true,
            arrows: true,
            prevArrow: '<a href="" title="Previous" class="verticalBtn "><i class="icon-uploadB"></i></a>',
            nextArrow: '<a href="" title="Next" class="verticalBtn "><i class="icon-down"></i></a>'

        });
    }
});



//共用文章內文-左邊小版silder-未來親子最新出版
$(function () {
    if ($('.newBookCarousel').length) {
        $('.newBookCarousel').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            accessibility: false,
            autoplay: true,
            arrows: false,
        });
    }
});


//共用文章內文-左邊小版silder-小天下精選學齡前閱讀好書
$(function () {
    if ($('.magazineCarouselB').length) {
        $('.magazineCarouselB').slick({
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            accessibility: false,
            autoplay: true,
            arrows: false,
        });
    }
});

// 取消右鍵鎖定
$(function () {
    window.oncontextmenu = null;
});


// tab over width dropdown 
$(function () {
    if ($('#mytabs').length) {
        $("#mytabs").bootstrapDynamicTabs();
    }
});

$(function () {
    if ($('#mytabsB').length) {
        $("#mytabsB").bootstrapDynamicTabs();
    }
});

$(function () {
    if ($('#mytabsC').length) {
        $("#mytabsC").bootstrapDynamicTabs();
    }
});



//未來兒童 親子共學月讀越愛讀
$(function () {
    if ($('.tabListChildSlick').length) {
        $('.tabListChildSlick').slick({
            dots: false,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            arrows: true,
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
                breakpoint: 641,
                settings: {
                    slidesToShow: 2,
                    arrows: false,

                }
            }
            ]
        });
    }
});


//未來Family 嚴選作家
$(function () {
    if ($('.authorSlick').length) {
        $('.authorSlick').slick({
            dots: false,
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay: true,
            arrows: true,
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
                    slidesToShow: 4,

                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,

                }
            },
            {
                breakpoint: 641,
                settings: {
                    slidesToShow: 2,
                    arrows: false,

                }
            }
            ]
        });
    }
});

// tab scrollbar
$(function () {
    if ($('.subjectTabsBox').length) {
        $('.subjectTabsBox').mCustomScrollbar({
            axis: "x",
            theme: "dark",
            advanced: { autoExpandHorizontalScroll: true }
        });
    }
});




// 立即訂閱 小版
$(function () {
    if ($('.rightNow').length) {
        $(".rightNow").click(function () {
            $(".rightNow").toggleClass("rightNowOpen");
        });
    }
});


//小天下/未來出版-最新出版
$(function () {
    if ($('.newBookSlick').length) {
        $('.newBookSlick').slick({
            dots: false,
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay: true,
            arrows: true,
            prevArrow: '<a href="" title="Previous" class="tabListBtn"><i class="icon-back"></i></a>',
            nextArrow: '<a href="" title="Next" class="tabListBtn "><i class="icon-next"></i></a>',
            responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,

                }
            },
            {
                breakpoint: 641,
                settings: {
                    slidesToShow: 2,
                    arrows: false,

                }
            }
            ]
        });
    }
});


$(function () {
    if ($('#mytabsC a').length) {
        $("#mytabsC a").on('shown.bs.tab', function () {
            $('.newBookSlick').show();
            $('.newBookSlick').slick('refresh')
        });
    }
});

//商城search
$(function () {
    if ($('.searchBtn a,.close-search,.storeSmallSearch').length) {
        $('.searchBtn a,.close-search,.storeSmallSearch').click(function () {
            $(".storeSearch").slideToggle(200);
            $("body").toggleClass('forTab');
        });
    }
});

// 商城首頁輪播
$(function () {
    if ($('.bookTopicSlick').length) {
        $('.bookTopicSlick').slick({
            infinite: true,
            slidesToShow: 6,
            slidesToScroll: 1,
            autoplay: true,
            arrows: true,
            prevArrow: '<a href="" title="Previous" class="tabListBtn"><i class="icon-back"></i></a>',
            nextArrow: '<a href="" title="Next" class="tabListBtn "><i class="icon-next"></i></a>',
            responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 641,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                }
            }
            ]
        });
    }
});

// 商城首頁名次輪播
$(function () {
    if ($('.rankListSlick').length) {
        $('.rankListSlick').slick({
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay: true,
            arrows: true,
            prevArrow: '<a href="" title="Previous" class="tabListBtn"><i class="icon-back"></i></a>',
            nextArrow: '<a href="" title="Next" class="tabListBtn "><i class="icon-next"></i></a>',
            responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 641,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                }
            }
            ]
        });
    }
});

//headercookie
$(function () {
    $('#CookieOK').click(function () {
        $('#CookieOK').parents('.headerCookie').slideToggle(500);
    });
});



