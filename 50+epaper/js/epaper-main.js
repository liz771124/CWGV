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

let currentSection = 1,
  currentSectionIndex = 1,
  sections = document.querySelectorAll("section"),
  navbar = document.querySelector(".header__navbar"),
  gotop = document.querySelector(".gotop"),
  headerHeight = document.querySelector(".header").offsetHeight / 2;

window.addEventListener("scroll", () => {
  let scrollTop = document.documentElement.scrollTop;
  scrollTop > 0
    ? navbar.classList.add("navbarFixed")
    : navbar.classList.remove("navbarFixed");
  scrollTop > headerHeight
    ? gotop.classList.add("gotopFixed")
    : gotop.classList.remove("gotopFixed");
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
      document.querySelector(".header__navbar").offsetHeight -
      document.querySelector(".chapter").offsetHeight;
    window.scrollTo({ top: targetOffset, behavior: "smooth" });
  });
});

const goTop = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

gotop.addEventListener("click", goTop, false);
