const isMobile = /iPhone|iPod|Android/i.test(navigator.userAgent);
const isPad = /iPad/i.test(navigator.userAgent);
document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.getElementById("menuIcon");
  const closeMenu = document.getElementById("closeMenu");
  const menuContainer = document.getElementById("menuContainer");
  const menuItems = document.querySelectorAll(".menu-item");
  const goTop = document.getElementById("goTop");
  const navContainer = document.querySelector("nav");
  const navbarSearchContainer = document.getElementById(
    "navbar-search-container",
  );
  // const navbarSearchIcon = document.getElementById("navbar-search-icon");
  const isHomePage = document.body.dataset.page === "home";
  const body = document.body;

  // const toggleButton = document.getElementById("searchToggleButton");
  // const searchContainer = document.getElementById("navbarSearchContainer");
  // let isExpanded = false;

  if (isHomePage) {
    navbarSearchContainer.style.display = "none";
  }

  if (menuIcon) {
    // gsap.set(searchContainer, { opacity: 0, y: -20 });

    // toggleButton.addEventListener("click", () => {
    //   if (!isExpanded) {
    //     // 展開動畫
    //     searchContainer.classList.remove("hidden");
    //     gsap.to(searchContainer, {
    //       duration: 0.25,
    //       opacity: 1,
    //       y: 0,
    //       ease: "power2.out",
    //       onComplete: () => {
    //         isExpanded = true;
    //       },
    //     });
    //   } else {
    //     // 收合動畫
    //     gsap.to(searchContainer, {
    //       duration: 0.25,
    //       opacity: 0,
    //       y: -20,
    //       ease: "power2.in",
    //       onComplete: () => {
    //         searchContainer.classList.add("hidden");
    //         isExpanded = false;
    //       },
    //     });
    //   }
    // });

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
  }

  if (navContainer) {
    const navHeight = navContainer.offsetHeight;
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
  }
});

const yearContainer = document.getElementById("year-container");
if (yearContainer) {
  const thisYear = new Date().getFullYear();
  const params = new URLSearchParams(document.location.search);
  const searchYear = Number(params.get("year"));
  const dataYear = document.getElementById(searchYear);
  const yearItems = yearContainer.querySelectorAll(".year-item");
  const moreYearItem = document.getElementById("toggle-more");
  let isYearContainerExpanded = false;
  let maxLength = isMobile ? 4 : isPad ? 8 : 14;
  if (dataYear && searchYear < thisYear - maxLength) {
    isYearContainerExpanded = true;
    moreYearItem.style.transform = "rotate(180deg)";
  } else {
    yearItems.forEach((item, index) => {
      item.style.display = index < maxLength ? "inline-block" : "none";
    });
  }
  if (dataYear) {
    if (dataYear.classList.contains("bg-gray2-200")) {
      dataYear.classList.remove("bg-gray2-200", "text-gray2-700");
      dataYear.classList.add("bg-primary-500", "text-white");
    } else {
      dataYear.classList.remove("bg-primary-500", "text-white");
      dataYear.classList.add("bg-gray2-200", "text-gray2-700");
    }
  }
  moreYearItem.addEventListener("click", () => {
    if (isYearContainerExpanded) {
      yearItems.forEach((item, index) => {
        item.style.display = index < maxLength ? "inline-block" : "none";
      });
      moreYearItem.style.transform = "rotate(0deg)";
    } else {
      yearItems.forEach((item) => (item.style.display = "inline-block"));
      moreYearItem.style.transform = "rotate(180deg)";
    }
    isYearContainerExpanded = !isYearContainerExpanded;
  });
}

const favoriteItem = document.querySelectorAll(".icon-favorite");
const favoriteOffPath =
  "M16.59 30.73L3.62002 17.76C2.26002 16.4 1.28003 14.8 0.820031 13.05C0.370031 11.39 0.400024 9.59998 1.00002 7.78998C1.53002 6.20998 2.44002 4.77997 3.62002 3.62997C4.81002 2.46997 6.26003 1.56998 7.85003 1.06998C9.71003 0.479977 11.55 0.469975 13.27 0.919975C14.81 1.31998 16.25 2.08998 17.51 3.14998C18.79 2.08998 20.22 1.31998 21.76 0.919975C23.49 0.469975 25.32 0.479977 27.18 1.06998C28.77 1.56998 30.23 2.47998 31.41 3.63998C32.58 4.79998 33.51 6.21998 34.03 7.79998C34.63 9.59998 34.65 11.38 34.2 13.05C33.73 14.79 32.76 16.39 31.4 17.75L31.33 17.81L18.41 30.72C17.9 31.22 17.08 31.22 16.57 30.72L16.59 30.73ZM19.06 5.25998L17.49 6.81998L16.44 5.67998L16.39 5.62997C15.27 4.56997 13.99 3.79998 12.61 3.43998C11.35 3.10998 10 3.11998 8.64004 3.54998C7.45004 3.92998 6.35004 4.60997 5.45004 5.48997C4.55004 6.36997 3.86002 7.43998 3.47002 8.61998C3.04002 9.90998 3.02002 11.19 3.34002 12.38C3.68002 13.66 4.42002 14.87 5.46002 15.9L17.51 27.95L29.5 15.96L29.56 15.89C30.6 14.85 31.34 13.65 31.68 12.37C32 11.19 31.98 9.90998 31.54 8.60998C31.15 7.43998 30.46 6.35997 29.56 5.48997C28.66 4.60997 27.56 3.92998 26.37 3.54998C25.01 3.11998 23.67 3.10998 22.4 3.43998C21.19 3.75998 20.05 4.38998 19.04 5.24998L19.06 5.25998Z";
const favoriteOnPath =
  "M16.8799 30.1273L3.90994 17.1573C2.54994 15.7973 1.56995 14.1973 1.10995 12.4473C0.659948 10.7873 0.689941 8.99732 1.28994 7.18732C1.81994 5.60732 2.72994 4.17731 3.90994 3.02731C5.09994 1.86731 6.54995 0.967315 8.13995 0.467315C9.99995 -0.122685 11.84 -0.132686 13.56 0.317314C15.1 0.717314 16.5399 1.48732 17.7999 2.54732C19.08 1.48732 20.5099 0.717314 22.0499 0.317314C23.7799 -0.132686 25.6099 -0.122685 27.4699 0.467315C29.0599 0.967315 30.52 1.87732 31.7 3.03732C32.87 4.19732 33.8 5.61732 34.32 7.19732C34.92 8.99732 34.94 10.7773 34.49 12.4473C34.02 14.1873 33.05 15.7873 31.69 17.1473L31.62 17.2073L18.6999 30.1173C18.1899 30.6173 17.3699 30.6173 16.8599 30.1173L16.8799 30.1273Z";
favoriteItem.forEach((item) => {
  const path = item.querySelector("svg path");
  item.classList.contains("favorite-on")
    ? path.setAttribute("d", favoriteOnPath)
    : path.setAttribute("d", favoriteOffPath);

  item.addEventListener("click", (event) => {
    console.log("click");
    const favoriteIcon = event.target.closest(".icon-favorite");
    if (favoriteIcon) {
      const path = favoriteIcon.querySelector("svg path");
      favoriteIcon.classList.toggle("favorite-on");
      favoriteIcon.classList.toggle("favorite-off");
      favoriteIcon.classList.contains("favorite-on")
        ? path.setAttribute("d", favoriteOnPath)
        : path.setAttribute("d", favoriteOffPath);
    }
  });
});

const navbar = document.getElementById("navbar");
if (isMobile && navbar) {
  let lastScrollY = window.scrollY;
  let ticking = false;
  navbar.classList.add("nav-transition", "nav-visible");

  const throttle = (func, limit) => {
    let inThrottle;
    return function (...args) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  };

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    const scrollDistance = Math.abs(currentScrollY - lastScrollY);
    console.log(scrollDistance, lastScrollY);
    if (scrollDistance > 5) {
      if (currentScrollY > lastScrollY && currentScrollY > 300) {
        navbar.classList.remove("nav-visible");
        navbar.classList.add("nav-hidden");
      } else {
        navbar.classList.remove("nav-hidden");
        navbar.classList.add("nav-visible");
      }
      lastScrollY = currentScrollY;
    }
  };

  const throttledHandleScroll = throttle(handleScroll, 150);
  window.addEventListener("scroll", () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        throttledHandleScroll();
        ticking = false;
      });
      ticking = true;
    }
  });
}
