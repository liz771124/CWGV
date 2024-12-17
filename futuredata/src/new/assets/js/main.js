document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.getElementById("menuIcon");
  const closeMenu = document.getElementById("closeMenu");
  const menuContainer = document.getElementById("menuContainer");
  const menuItems = document.querySelectorAll(".menu-item");
  menuIcon.addEventListener("click", () => {
    body.classList.add("menu-open");
    gsap.set(menuItems, { x: -50, opacity: 0 });
    gsap.to(menuContainer, {
      x: 0,
      opacity: 1,
      duration: 0.3,
      ease: "power2.out",
      display: "block",
    });
    gsap.to(menuItems, {
      x: 0,
      opacity: 1,
      duration: 0.3,
      ease: "power2.out",
      stagger: 0.25,
    });
    // gsap.to(closeMenu, {
    //   rotation: -90,
    //   x: "100%",
    //   opacity: 0,
    //   duration: 0.8,
    //   ease: "back.out(1.7)",
    // });
  });

  closeMenu.addEventListener("click", () => {
    body.classList.remove("menu-open");
    gsap.to(menuContainer, {
      x: "-100%",
      opacity: 0,
      duration: 0.25,
      ease: "power4.in",
      onComplete: () => {
        menuContainer.style.display = "none";
      },
    });
  });

  const goTop = document.getElementById("goTop");
  const navHeight = document.querySelector("nav").offsetHeight;
  const body = document.body;
  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    scrollY > navHeight
      ? (goTop.style.display = "block")
      : (goTop.style.display = "none");
  });
  goTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});

const yearContainer = document.getElementById("year-container");
if (yearContainer) {
  const yearItems = yearContainer.querySelectorAll(".year-item");
  const moreYearItem = document.getElementById("toggle-more");
  let isYearContainerExpanded = false;
  const toggleYearItems = () => {
    if (isYearContainerExpanded) {
      yearItems.forEach((item, index) => {
        item.style.display = index < 10 ? "inline-block" : "none";
      });
      moreYearItem.style.transform = "rotate(0deg)";
    } else {
      yearItems.forEach((item) => (item.style.display = "inline-block"));
      moreYearItem.style.transform = "rotate(180deg)";
    }
    isYearContainerExpanded = !isYearContainerExpanded;
  };
  yearItems.forEach((item, index) => {
    item.style.display = index < 10 ? "inline-block" : "none";
  });
  moreYearItem.addEventListener("click", toggleYearItems);
}

const favoriteItem = document.querySelectorAll(".icon-favorite");
favoriteItem.forEach((item, index) => {
  item.addEventListener("click", (event) => {
    // 檢查是否點擊到 .icon-favorite
    const favoriteIcon = event.target.closest(".icon-favorite");
    if (favoriteIcon) {
      // 切換 .favorite-on 和 .favorite-off 的顯示狀態
      const favoriteOn = favoriteIcon.querySelector(".favorite-on");
      const favoriteOff = favoriteIcon.querySelector(".favorite-off");
      favoriteOn.classList.toggle("hidden");
      favoriteOff.classList.toggle("hidden");
    }
  });
});
