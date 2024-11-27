const lessonThumbSwiper = new Swiper(".lessonThumbSwiper", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 4
});
const lessonMainSwiper = new Swiper(".lessonMainSwiper", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: lessonThumbSwiper,
  },
});
