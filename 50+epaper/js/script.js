// let articleSwiper;
// let disable_scroll_detect = true;

//輪播滾動 並亮燈
// function slider_status_active(slider_href_num) {
//   // if (slider_href_num != -1) {
//   //   articleSwiper.slideToLoop(slider_href_num, 300, true);
//   // }

//   $(".article-slider .swiper-slide a").removeClass("active");
//   $(".article-slider .swiper-slide.swiper-slide-active a").addClass("active");
// }

//自訂網址
// function change_url(target) {
//   //文章順序
//   let url_name = target.attr("data-url");
//   //週刊報
//   let url_theme = target.attr("data-key");
//   //類別
//   let url_eid = target.attr("data-item");
//   //utm參數
//   let url_code = target.attr("data-code");

//   if (url_code == undefined) {
//     let url_code = "";
//   }
//   if (!url_eid) {
//     window.history.pushState(
//       null,
//       null,
//       "/family/weekly/index/" + url_theme + "/" + url_name + url_code
//     );
//   } else {
//     window.history.pushState(
//       null,
//       null,
//       "/family/weekly/index/" +
//         url_theme +
//         "/list/" +
//         url_eid +
//         "/" +
//         url_name +
//         url_code
//     );
//   }

//   // $(window).scroll(function () {
//   //   let datalayer_json = "";
//   //   datalayer_json = {
//   //     article_type: "周刊報-網路文章",
//   //     article_id: $("#article_id_\\*" + url_name).val(),
//   //     article_year_month: $("#article_year_month_\\*" + url_name).val(),
//   //     article_title: $("#article_title_\\*" + url_name).val(),
//   //     category_id: $("#category_id_\\*" + url_name).val(),
//   //     category_name: $("#category_name_\\*" + url_name).val(),
//   //     category2_id: $("#category2_id_\\*" + url_name).val(),
//   //     category2_name: $("#category2_name_\\*" + url_name).val(),
//   //     author_name: $("#author_name_\\*" + url_name).val(),
//   //     author_id: $("#author_id_\\*" + url_name).val(),
//   //     article_tag: $("#article_tag_\\*" + url_name).val(),
//   //     article_attribute: "",
//   //     waterfall_page: url_name,
//   //     timestamp: "",
//   //   };
//   //   let topscroll = $("#read-top_" + url_name).offset().top;
//   //   let endscroll = $("#read-fulfill_" + url_name).offset().top;
//   //   let scrollVal = $(this).scrollTop() + window.screen.height;
//   //   let total = endscroll - topscroll;
//   //   let read_val = scrollVal - topscroll;
//   //   let scroll_rate = read_val / total;
//   //   if ($("#read-article_" + url_name).attr("scroll_rate_start") == 0) {
//   //     $("#read-article_" + url_name).attr("scroll_rate_start", 1);
//   //     $("#read-article_" + url_name).attr("start_time", new Date());
//   //     articleReadR(
//   //       "gc_read_article_start",
//   //       "read_article_start",
//   //       datalayer_json
//   //     );
//   //   }

//   //   let read_s = new Date($("#read-article_" + url_name).attr("start_time"));
//   //   let read_e = new Date();
//   //   let read_time = parseInt(read_e - read_s) / 1000;

//   //   if (
//   //     scroll_rate >= 0.5 &&
//   //     $("#read-article_" + url_name).attr("scroll_rate_50") == 0 &&
//   //     read_time >= 3
//   //   ) {
//   //     $("#read-article_" + url_name).attr("scroll_rate_50", 1);
//   //     datalayer_json["read_time"] = read_time;
//   //     articleReadR("gc_read_article_half", "read_article_half", datalayer_json);
//   //   } else if (
//   //     scroll_rate >= 0.9 &&
//   //     $("#read-article_" + url_name).attr("scroll_rate_100") == 0 &&
//   //     read_time >= 3
//   //   ) {
//   //     $("#read-article_" + url_name).attr("scroll_rate_100", 1);
//   //     datalayer_json["read_time"] = read_time;
//   //     articleReadR(
//   //       "gc_read_article_complete",
//   //       "read_article_complete",
//   //       datalayer_json
//   //     );
//   //   }
//   // });
// }

const checkEmail = (remail) => {
  if (remail.search(/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/) = -1) {
    $("#footer-newsletter-form").submit();
  } else {
    alert("請輸入正確的Email！");
    return;
  }
};

const swiper = new Swiper(".chapter__slider", {
  loop: true,
  allowTouchMove: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    1024: {
      slidesPerView: 2.99,
      spaceBetween: 10,
    },
  },
});
// articleSwiper = new Swiper(".article-slider ", {
//   slidesPerView: 3,
//   speed: 600,
//   loop: true,
//   allowTouchMove: false,
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   breakpoints: {
//     767: {
//       allowTouchMove: true,
//       slidesPerView: 1,
//     },
//   },
// });

let currentSection = 1,
  currentSectionIndex = 1,
  sections = document.querySelectorAll("section"),
  navbar = document.querySelector(".header__navbar"),
  headerHeight = document.querySelector(".header").offsetHeight / 2;
window.addEventListener("scroll", () => {
  let scrollTop = document.documentElement.scrollTop;
  scrollTop > headerHeight
    ? navbar.classList.add("navbarFixed")
    : navbar.classList.remove("navbarFixed");
  sections.forEach((section, index) => {
    let rect = section.getBoundingClientRect();
    if (
      rect.top <= window.innerHeight / 2 &&
      rect.bottom >= window.innerHeight / 2
    ) {
      currentSection = section;
      currentSectionIndex = index;
    }
  });

  swiper.slideToLoop(currentSectionIndex, 300, true);

  // const swiperSlide = document.querySelectorAll(".swiper-slide");
  // swiperSlide.forEach((slide, index) => {
  //   index === currentSectionIndex
  //     ? slide.classList.add("swiper-slide-active")
  //     : slide.classList.remove("swiper-slide-active");
  // });
});

const anchors = document.querySelectorAll('.header__menu a[href^="#"]');
anchors.forEach((anchor) => {
  anchor.addEventListener("click", (e) => {
    e.preventDefault();
    let targetId = anchor.getAttribute("href").substring(1);
    let targetElement = document.getElementById(targetId);
    if (!targetElement) return;
    let targetOffset =
      targetElement.offsetTop -
      document.querySelector(".header_navbar").offsetHeight -
      document.querySelector(".chapter__slider").offsetHeight;
    window.scrollTo({ top: targetOffset, behavior: "smooth" });
  });
});

//gotop
// scrollVal > 300
//   ? $("#gotop").fadeIn("fast")
//   : $("#gotop").stop().fadeOut("fast");
// $("#gotop").click(() => $("html,body").animate({ scrollTop: 0 }, 1000));

// //header fixed
// function header_fixed_status(scrollVal) {
//   if (scrollVal > 0) {
//     $(".header").addClass("fixed");
//     $("body").addClass("fixed-pt");
//   } else {
//     $(".header").removeClass("fixed");
//     $("body").removeClass("fixed-pt");
//   }
// }

// function silder_fixed_status(scrollVal) {
//   if (scrollVal > slider_top) {
//     $(".sliderBox").addClass("fixed");
//     $("body").addClass("fixed-slider");
//     $(".newsletter").addClass("fixed");
//   } else {
//     $(".sliderBox").removeClass("fixed");
//     $("body").removeClass("fixed-slider");
//     $(".newsletter").removeClass("fixed");
//   }
// }

// /*subscribe 訂閱*/
// function fixedsub(scrollVal) {
//   if (scrollVal > 300) {
//     if (!$("body").hasClass("fixedSub")) {
//       $("body").addClass("fixedSub");
//     }
//   } else {
//     $("body").removeClass("fixedSub");
//   }
// }

// /*關閉訂閱*/
// $(function () {
//   if ($(".subClose,.sendBtn").length > 0) {
//     $(".subClose").click(function () {
//       $(".subBox").animate({ height: "0px", bottom: "-500px" }, 300);
//       $(".newsletter").addClass("down");
//     });
//   }
// });

// $("#xs-menu-toggle").click(function (event) {
//   $(this).parents("body").toggleClass("open-menu");
// });
// $(".header .main-menu .main-menu-frame .menu-lv1>li a").on(
//   "click",
//   function () {
//     if ($(window).outerWidth() < 767) {
//       $(this).parents("body").removeClass("open-menu");
//     }
//   }
// );

// articleSwiper.on("slideChange", function () {
//   $(".article-slider .swiper-slide a").removeClass("active");
// });

//   let header_height, slider_height;

//   //scroll滾動時 slider依據文章區域亮燈
//   function aricle_area_silder_active(scrollVal) {
//     let item_head, item_end, article_idx, article_num, n_scrollVal;
//     header_height = $(".header").outerHeight();
//     slider_height = $(".sliderBox").outerHeight();

//     $(".articleBox").each(function (index, element) {
//       item_head = $(element).offset().top - 150;
//       item_end = $(element).offset().top + $(element).outerHeight() - 150;
//       article_idx = $(element).attr("id").split("_");
//       article_num = Number(article_idx[1]) - 1;

//       n_scrollVal = scrollVal + header_height + slider_height;

//       if (n_scrollVal > item_head && n_scrollVal <= item_end) {
//         if (disable_scroll_detect) {
//           //用點擊的時候false

//           slider_status_active(article_num);
//           change_url($(element));
//         }
//       }
//     });
//   }

//   /*文字放大縮小*/
//   let changeFont = $(".changeFonSizeBox"),
//     changeIcon = $(".fontSize");
//   if ($(".fontSize a").length) {
//     $(".fontSize a").click(function () {
//       if (!changeFont.hasClass("changeFont")) {
//         changeFont.addClass("changeFont");
//         changeFont.addClass("changeFont1");
//       } else if (
//         changeFont.hasClass("changeFont") &&
//         changeFont.hasClass("changeFont1")
//       ) {
//         changeFont.removeClass("changeFont1");
//         changeFont.addClass("changeFont2");
//       } else if (
//         changeFont.hasClass("changeFont") &&
//         changeFont.hasClass("changeFont2")
//       ) {
//         changeFont.removeClass("changeFont2");
//         changeFont.addClass("changeFont3");
//         changeIcon.toggleClass("changeIcon");
//       } else if (
//         changeFont.hasClass("changeFont") &&
//         changeFont.hasClass("changeFont3")
//       ) {
//         changeFont.removeClass("changeFont3");
//         changeFont.removeClass("changeFont");
//         changeIcon.toggleClass("changeIcon");
//       }
//     });
//   }
// });
