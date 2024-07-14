const swiper = new Swiper(".lessonThumbSwiper", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 5.5,
  freeMode: true,
  watchSlidesProgress: true,
});
const swiper2 = new Swiper(".lessonMainSwiper", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});
