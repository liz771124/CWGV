$(function() {
    if ($(".navBtn i").length) {
        $(".navBtn i").click(function() {
            $("body").toggleClass("modal-openB")
        })
    }
});
if ($(".navCarousel").length) {
    $(".navCarousel").on("initialized.owl.carousel changed.owl.carousel", function(e) {
        if (!e.namespace) {
            return
        }
        var carousel = e.relatedTarget;
        $(".slider-counter").text(carousel.relative(carousel.current()) + 1 + "/" + carousel.items().length)
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
    $(".s-tab-content").addClass("l-block")
}
if ($(".new-impBtn").length > 0) {
    var _impBtnCount = $(".new-impBtn").find(".swiper-slide").length;

    if (_impBtnCount == 2) {
        _impBtnCount = 2
    } else {
        if (_impBtnCount >= 5) {
            _impBtnCount = 4
        } else {
            if (_impBtnCount < 5) {
                _impBtnCount = 3
            }
        }
    }
    $(".new-impBtn .impBtn").owlCarousel({
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
                items: 5,
                rtl: false
            }
        }
    });
    if ($(window).outerWidth() > 767) {
        var _localitemcount = $(".nav-scroller").find(".dropdown").length;

        if (_localitemcount >= 7) {
            $(".containerPos").next().addClass("swiper-container");
            $(".nav-scroller-content").addClass("swiper-wrapper");
            $(".nav-scroller-content>.dropdown").addClass("swiper-slide");
            $(".swiper-container").parents(".navbar-collapse.nav-wrapper").addClass("nav-wrapper-rel")
        }
        var _localitemcount = $(".nav-scroller .swiper-container").find(".swiper-slide").length;
        if (_localitemcount >= 7) {
            _localitemcount = 7
        }
        if ($(".nav-scroller .swiper-container").parents(".mainmenu").hasClass("store")) {
            _localitemcount = 11
        }
        var location_swiper = new Swiper(".swiper-container", {
            slidesPerView: _localitemcount,
            slidesPerColumn: 1,
            spaceBetween: 0,
            freeMode: true,
            centerInsufficientSlides: true,
            allowTouchMove: true,
            initialSlide: 0,
            breakpoints: {
                1024: {
                    slidesPerView: 6,
                },
                768: {
                    slidesPerView: 5,
                }
            },
            navigation: {
                nextEl: ".nav-scroller-btn--right",
                prevEl: ".nav-scroller-btn--left",
            }
        })

    }
}
var msieversion;
$(function() {
    msieversion = function() {
        var ua = window.navigator.userAgent;
        var msie = ua.indexOf("MSIE ");
        if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
            $(".itemthumb").each(function() {
                var $container = $(this),
                    imgUrl = $container.find("img").prop("src");
                if (imgUrl) {
                    $container.css("backgroundImage", "url(" + imgUrl + ")").addClass("compat-object-fit")
                }
            })
        } else {}
        return false
    };
    msieversion()
});
var msieversion;
$(function() {
    msieversion = function() {
        var ua = window.navigator.userAgent;
        var msie = ua.indexOf("MSIE ");
        if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
            $(".itemthumbB").each(function() {
                var $container = $(this),
                    imgUrl = $container.find("img").prop("src");
                if (imgUrl) {
                    $container.css("backgroundImage", "url(" + imgUrl + ")").addClass("compat-object-fit")
                }
            })
        } else {}
        return false
    };
    msieversion()
});

function fixedHeader() {
    if ($(window).scrollTop() > 100) {
        if (!$(".mainmenu").hasClass("fixedHeader")) {
            $(".mainmenu").addClass("fixedHeader");
            $(".fixedHeader").animate({
                top: "-80"
            }, 500)
        }
    } else {
        $(".mainmenu").removeClass("fixedHeader");
        $(".mainmenu").removeAttr("style")
    }
}
$(window).scroll(function() {
    fixedHeader()
});
if ($(".hpCarousel").length) {
    $(".hpCarousel").owlCarousel({
        loop: true,
        nav: true,
        dots: true,
        items: 1,
        autoplay: true,
    })
}
//FFBanner(largeBanner)
if ($('.largeBanner .FFCarousel').length) {
    $('.largeBanner .FFCarousel').owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        items: 1,
        autoplay: true,
        responsive: {
            0: {
                nav: false
            },
            1024: {
                nav: true
            },
        }
    });
}
//console.log($(".publishCarousel .item").length);
if ($(".publishCarousel").length && $(".publishCarousel .item").length > 1) {
    $(".publishCarousel").owlCarousel({
        loop: true,
        nav: true,
        dots: true,
        items: 1,
        autoplay: true,
    })
} else {
    //console.log("destroy");
    $(".publishCarousel").trigger("destroy.owl.carousel").removeClass("owl-carousel owl-loaded");
    $("publishCarousel").find(".owl-stage-outer").children().unwrap()
}
if ($(".newsCarousel").length) {
    var newsCarousel = $(".newsCarousel");
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
    newsCarousel.on("resize.owl.carousel", function() {
        setTimeout(function() {
            $(".newBox .owl-next").css({
                position: "absolute",
                right: ($(".newBox .container").width() - $(".newBox .owl-dot").width() * $(".newBox .owl-dot").length) / 2 - $(".newBox .owl-dot").width() * 2 + "px",
                top: $(".newBox .owl-stage").height() + 16 + "px",
                "z-index": "99"
            });
            $(".newBox .owl-prev").css({
                position: "absolute",
                left: ($(".newBox .container").width() - $(".newBox .owl-dot").width() * $(".newBox .owl-dot").length) / 2 - $(".newBox .owl-dot").width() * 2 + "px",
                top: $(".newBox .owl-stage").height() + 16 + "px",
                "z-index": "99"
            })
        }, 1)
    });
    $(".newBox .owl-next").css({
        position: "absolute",
        right: ($(".newBox .container").width() - $(".newBox .owl-dot").width() * $(".newBox .owl-dot").length) / 2 - $(".newBox .owl-dot").width() * 2 + "px",
        top: $(".newBox .owl-stage").height() + 16 + "px",
        "z-index": "99"
    });
    $(".newBox .owl-prev").css({
        position: "absolute",
        left: ($(".newBox .container").width() - $(".newBox .owl-dot").width() * $(".newBox .owl-dot").length) / 2 - $(".newBox .owl-dot").width() * 2 + "px",
        top: $(".newBox .owl-stage").height() + 16 + "px",
        "z-index": "99"
    })
}
if ($(".videoCarousel").length) {
    $(".videoCarousel").slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        dots: true,
        responsive: [{
            breakpoint: 641,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                rows: 3,
                slidesPerRow: 1,
            }
        }]
    });
    $(window).on("resize", function() {
        setTimeout(function() {
            $(".videoBox .slick-next").css({
                position: "absolute",
                right: ($(".videoBox .container").width() - 14 * $(".videoBox [role=tab]").length) / 2 - 14 + "px",
                top: $(".slick-track").height() + 30 + "px"
            });
            $(".videoBox .slick-prev").css({
                position: "absolute",
                left: ($(".videoBox .container").width() - 14 * $(".videoBox [role=tab]").length) / 2 - 14 + "px",
                top: $(".slick-track").height() + 30 + "px"
            })
        })
    });
    $(".videoBox .slick-next").css({
        position: "absolute",
        right: ($(".videoBox .container").width() - 14 * $(".videoBox [role=tab]").length) / 2 - 14 + "px",
        top: $(".slick-track").height() + 30 + "px"
    });
    $(".videoBox .slick-prev").css({
        position: "absolute",
        left: ($(".videoBox .container").width() - 14 * $(".videoBox [role=tab]").length) / 2 - 14 + "px",
        top: $(".slick-track").height() + 30 + "px"
    })
}
$(function() {
    if ($("#gotop,#gotopB").length) {
        $("#gotop,#gotopB").click(function() {
            jQuery("html,body").animate({
                scrollTop: 0
            }, 1000)
        });
        $(window).scroll(function() {
            if ($(this).scrollTop() > 300) {
                $("#gotop").fadeIn("fast")
            } else {
                $("#gotop").stop().fadeOut("fast")
            }
        })
    }
});
$(function() {
    if ($(".fontSize a").length) {
        $(".fontSize a").click(function() {
            $(".changeFonSizeBox").toggleClass("changeFont");
            $(".fontSize").toggleClass("changeIcon")
        })
    }
});
$(function() {
    var isIPhone = /iPhone/i.test(navigator.userAgent);

    if ($(window).outerWidth() < 991) {
        swiperTab();
    }

    function swiperTab() {
        var _activeSlide = $('.FFtab').find('.nav-item.active').index();
        var _tabCount = 0;

        if ($('.FFtab .nav-item').length >= 4) {
            _tabCount = 4;
        } else if ($('.FFtab .nav-item').length <= 3) {
            _tabCount = $('.FFtab .nav-item').length;
        }

        var hr_swiper = new Swiper('.FFtab', {
            slidesPerView: _tabCount,
            slidesPerColumn: 1,
            allowTouchMove: true,
            initialSlide: _activeSlide,
            breakpoints: {
                991: {
                    slidesPerView: 5.3,
                    allowTouchMove: true
                }
            }
        });

        $('.FFtab .nav-tabs').css('transform', 'translate3d(0px, 0px, 0px)');

        $('.FFtab .nav-item').on('show.bs.tab', function(e) {
            var _thisID = $(this).index();
            var _lastID = $(this).parents('.nav-tabs').find('.nav-item.active').index();

            if (_lastID == 0) {
                hr_swiper.slideTo(_thisID, 400, true);
            } else if (_thisID > _lastID) {
                if ($(window).outerWidth() <= 991) {
                    hr_swiper.slideTo(_thisID, 400, true);
                } else {
                    hr_swiper.slideTo(_thisID + 1, 400, true);
                }
            } else if (_thisID < _lastID) {
                hr_swiper.slideTo(_thisID - 1, 400, true);
            }
        });
    }
});
$(function() {
    if ($(".magazineCarousel").length) {
        $(".magazineCarousel").slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            vertical: true,
            verticalSwiping: true,
            autoplay: true,
            arrows: true,
            prevArrow: '<a href="" title="Previous" class="verticalBtn "><i class="icon-uploadB"></i></a>',
            nextArrow: '<a href="" title="Next" class="verticalBtn "><i class="icon-down"></i></a>'
        })
    }
});
$(function() {
    if ($(".newBookCarousel").length) {
        $(".newBookCarousel").slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            accessibility: false,
            autoplay: true,
            arrows: false,
        })
    }
});
$(function() {
    if ($(".magazineCarouselB").length) {
        $(".magazineCarouselB").slick({
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            accessibility: false,
            autoplay: true,
            arrows: false,
        })
    }
});
$(function() {
    window.oncontextmenu = null
});
$(function() {
    if ($("#mytabs").length) {
        $("#mytabs").bootstrapDynamicTabs()
    }
});
$(function() {
    if ($("#mytabsB").length) {
        $("#mytabsB").bootstrapDynamicTabs()
    }
});
$(function() {
    if ($("#mytabsC").length) {
        $("#mytabsC").bootstrapDynamicTabs()
    }
});
$(function() {
    if ($(".tabListChildSlick").length) {
        $(".tabListChildSlick").slick({
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
            }, {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            }, {
                breakpoint: 641,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                }
            }]
        })
    }
});
$(function() {
    if ($(".authorSlick").length) {
        $(".authorSlick").slick({
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
            }, {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                }
            }, {
                breakpoint: 641,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                }
            }]
        })
    }
});
$(function() {
    if ($(".subjectTabsBox").length) {
        $(".subjectTabsBox").mCustomScrollbar({
            axis: "x",
            theme: "dark",
            advanced: {
                autoExpandHorizontalScroll: true
            }
        })
    }
});
$(function() {
    if ($(".rightNow").length) {
        $(".rightNow").click(function() {
            $(".rightNow").toggleClass("rightNowOpen")
        })
    }
});
$(function() {
    if ($(".newBookSlick").length) {
        $(".newBookSlick").slick({
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
            }, {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            }, {
                breakpoint: 641,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                }
            }]
        })
    }
});
$(function() {
    if ($("#mytabsC a").length) {
        $("#mytabsC a").on("shown.bs.tab", function() {
            $(".newBookSlick").show();
            $(".newBookSlick").slick("refresh")
        })
    }
});
$(function() {
    if ($(".searchBtn a,.close-search,.storeSmallSearch").length) {
        $(".searchBtn a,.close-search,.storeSmallSearch").click(function() {
            $(".storeSearch").slideToggle(200);
            $("body").toggleClass("forTab")
        })
    }
});
$(function() {
    if ($(".bookTopicSlick").length) {
        $(".bookTopicSlick").slick({
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
            }, {
                breakpoint: 641,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                }
            }]
        })
    }
});
$(function() {
    if ($(".rankListSlick").length) {
        $(".rankListSlick").slick({
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
            }, {
                breakpoint: 641,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                }
            }]
        })
    }
});
$(function() {
    $("#CookieOK").click(function() {
        $("#CookieOK").parents(".headerCookie").slideToggle(500)
    })
});
$(function() {
    $("[data-mega=megadrop]").each(function(index, el) {
        $(this).hover(function() {
            var _MegaItemid = $(this).attr("data-id");
            $(".megamenu-container").find("#" + _MegaItemid).addClass("open");
            return true
        }, function() {
            var _MegaItemid = $(this).attr("data-id");
            $(".megamenu-container").find("#" + _MegaItemid).removeClass("open");
            return true
        })
    });
    $(".megamenu-container .m-tab-item").hover(function() {
        var _thisId = $(this).attr("id");
        $(".solid-menus").find("[data-id=" + _thisId + "]").parents(".dropdown-full-width-g").addClass("open-mega");
        return true
    }, function() {
        var _thisId = $(this).attr("id");
        $(".solid-menus").find("[data-id=" + _thisId + "]").parents(".dropdown-full-width-g").removeClass("open-mega");
        return true
    })
});