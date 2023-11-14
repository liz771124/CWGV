let currentSection = 1,
  currentSectionIndex = 1,
  sections = document.querySelectorAll("section[id^='section']"),
  header = document.querySelector(".header"),
  navbar = document.querySelector(".header__navbar"),
  chapter = document.querySelector(".chapter"),
  gotop = document.querySelector(".gotop"),
  shareBtn = document.querySelector("#share__btn");

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

window.addEventListener("scroll", () => {
  let scrollTop = document.documentElement.scrollTop;
  scrollTop > header.offsetHeight
    ? gotop.classList.add("gotopFixed")
    : gotop.classList.remove("gotopFixed");
  sections.forEach((section, index) => {
    const rect = section.getBoundingClientRect();
    if (
      rect.top <= window.innerHeight / 2 &&
      rect.bottom >= window.innerHeight / 2
    ) {
      currentSection = section;
      currentSectionIndex = index;
    }
  });
  swiper.slideToLoop(currentSectionIndex, 300, true);
});

const anchors = document.querySelectorAll("a[href^='#section']");
anchors.forEach((anchor) => {
  anchor.addEventListener("click", (e) => {
    e.preventDefault();
    let targetId = anchor.getAttribute("href").substring(1);
    scrollToElement(targetId);
  });
});

const scrollToElement = (elementId) => {
  let targetElement = document.getElementById(elementId);
  if (!targetElement) return;
  let headerHeight = header.offsetHeight;
  let navbarHeight = navbar.offsetHeight;
  let chapterHeight = chapter.offsetHeight;
  let targetOffset =
    targetElement.offsetTop + (headerHeight - navbarHeight - navbarHeight - 30);
  window.scrollTo({ top: targetOffset });
};

const goTop = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};
gotop.addEventListener("click", goTop);

let currentFontSize = 1;
const zoomText = (e) => {
  const element = e.target.closest("section");
  currentFontSize < 1.3 ? (currentFontSize += 0.1) : (currentFontSize = 1);
  element.style.fontSize = `${currentFontSize}rem`;
};

const shareData = {
  title: document.title,
  text: document.description,
  url: document.location.href,
};

shareBtn.addEventListener("click", async () => {
  try {
    await navigator.share(shareData);
  } catch (err) {
    console.log(err);
  }
});
