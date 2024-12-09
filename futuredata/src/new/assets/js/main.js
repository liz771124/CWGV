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
      ease: "power3.out",
      display: "block",
    });
    gsap.to(menuItems, {
      x: 0,
      opacity: 1,
      duration: 0.3,
      ease: "power3.out",
      stagger: 0.25, 
    });
  });

  closeMenu.addEventListener("click", () => {
    body.classList.remove("menu-open");
    gsap.to(menuContainer, {
      x: "-100%",
      opacity: 0,
      duration: 0.3,
      ease: "power3.in",
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
