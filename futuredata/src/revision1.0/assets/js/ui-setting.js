$(function () {

    // main menu
    var animationEnd = (function (el) {
        var animations = {
            animation: 'animationend',
            OAnimation: 'oAnimationEnd',
            MozAnimation: 'mozAnimationEnd',
            WebkitAnimation: 'webkitAnimationEnd',
        };

        for (var t in animations) {
            if (el.style[t] !== undefined) {
                return animations[t];
            }
        }
    })(document.createElement('div'));
    $('#menu-toggle').click(function (event) {
        $('.wrapper').addClass('openmenu');
        $('#main-menu .menu-frame').addClass('fadeInLeft').one(animationEnd, function () {
            $(this).removeClass('fadeInLeft');
        });
    });
    $('#close-menu').click(function (event) {
        $('#main-menu .menu-frame').addClass('fadeOutLeft').one(animationEnd, function () {
            $(this).removeClass('fadeOutLeft');
        });
        $('.wrapper').addClass('closingmenu');
        $('.wrapper').removeClass('openmenu')
        setTimeout(function () {
            $('.wrapper').removeClass('closingmenu')
        }, 200);
    });
    if ($.fn.slimScroll) {
        $('#main-menu .menu-frame').slimScroll({
            height: '100%',
            width: 'auto',
            opacity: 0.2,
            // alwaysVisible: true,
            railVisible: true
        });
    };
    $('.main-menu .social-link a').hover(function () {
        /* Stuff to do when the mouse enters the element */
        $(this).addClass('animated bounce').one(animationEnd, function () {
            $(this).removeClass('animated bounce')
        });
    }, function () {
        /* Stuff to do when the mouse leaves the element */
    });
    // font-resize
    if ($.fn.textresizer) {
        $("#font-size button").textresizer({
            target: ".font-level-content",
            type: "fontSize",
            sizes: ["0.8em", "1em", "1.5em"]
        });
        $("#font-size button").click(function (event) {
            $(this).addClass('active');
            $(this).siblings().removeClass('active')
        });
    }

    // index
    // $('.index-brick.b02 .service-frame a').hover(function() {
    //     $(this).find('img').addClass('animated shake').one(animationEnd, function() {
    //         $(this).removeClass('animated shake')
    //     });
    // }, function() {
    //     /* Stuff to do when the mouse leaves the element */
    // });
    // popover
    $('[data-toggle="popover"]').popover({
        container: 'body',
        trigger: 'hover'
    })
    $('<span class="scroll"><a href="#" class="scrollToTop"><i class="icok-keyboard_arrow_up2-b"></i></a></span>').appendTo("body");
    $('.scrollToTop').hide();
    // Check to see if the window is top if not then display button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });
    $('.scrollToTop').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
        return false;
    });




});