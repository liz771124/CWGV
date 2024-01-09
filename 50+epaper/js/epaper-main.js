let currentSection = 1,
  currentSectionIndex = 1,
  sections = document.querySelectorAll("section[id^='section']"),
  header = document.querySelector(".header"),
  navbar = document.querySelector(".header__navbar"),
  chapter = document.querySelector(".chapter"),
  sidebar = document.querySelector(".sidebar"),
  gotop = document.querySelector(".gotop"),
  shareBtn = document.querySelector("#share__btn"),
  lineBtn = document.querySelector("#line__btn"),
  subscribe = document.querySelector(".subscribe"),
  subscribeClose = document.querySelector(".subscribe-close"),
  headerHeight = header.offsetHeight,
  navbarHeight = navbar.offsetHeight,
  chapterHeight = chapter.offsetHeight,
  isAndroid = navigator.userAgent.indexOf("Android") > -1;

sidebar.style.top = `${navbar.offsetHeight + chapter.offsetHeight + 40}px`;

if (isAndroid) {
  lineBtn.style.display = "flex";
  shareBtn.style.display = "none";
}

const swiper = new Swiper(".chapter__slider", {
  loop: true,
  autoplay: {
    delay: 6500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    480: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
  },
});

window.addEventListener("scroll", () => {
  let scrollTop = document.documentElement.scrollTop;
  if (scrollTop > header.offsetHeight) {
    gotop.classList.add("gotopFixed");
    subscribe.style.bottom = "-2px";
    chapter.classList.add("show");
  } else {
    gotop.classList.remove("gotopFixed");
    chapter.classList.remove("show");
    subscribe.style.bottom = "-100%";
  }
  // sections.forEach((section, index) => {
  //   const rect = section.getBoundingClientRect();
  //   if (
  //     rect.top <= window.innerHeight / 2 &&
  //     rect.bottom >= window.innerHeight / 2
  //   ) {
  //     currentSection = section;
  //     currentSectionIndex = index;
  //   }
  // });
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
  let targetOffset =
    targetElement.offsetTop +
    (headerHeight - navbarHeight - chapterHeight - 30);
  window.scrollTo({ top: targetOffset });
};

const goTop = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};
gotop.addEventListener("click", goTop);

let currentFontSize = 1.4;
const zoomText = (e) => {
  const element = e.target
    .closest("section")
    .querySelector(".article__content");
  currentFontSize < 1.7 ? (currentFontSize += 0.1) : (currentFontSize = 1.4);
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

subscribeClose.addEventListener("click", () => {
  // subscribe.style.opacity = 0;
  subscribe.style.removeProperty("bottom");
  subscribe.style.zIndex = "-1";
});
