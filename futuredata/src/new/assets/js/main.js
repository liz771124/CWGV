const menuIcon = document.getElementById("menuIcon");
const closeMenu = document.getElementById("closeMenu");
const menuContainer = document.getElementById("menuContainer");
const menuItems = document.querySelectorAll(".menu-item");

// 點擊展開 Menu
menuIcon.addEventListener("click", () => {
  // Menu Container 左滑入動畫
  gsap.to(menuContainer, {
    x: 0,
    duration: 0.5,
    ease: "power3.out",
  });

  // 每個選單按鈕依序淡入
  gsap.fromTo(
    menuItems,
    { x: -50, opacity: 0 },
    {
      x: 0,
      opacity: 1,
      duration: 0.5,
      ease: "power3.out",
      stagger: 0.1, // 依序時間差
    },
  );

  console.log("menuIcon");
});

// 點擊關閉 Menu
closeMenu.addEventListener("click", () => {
  // Menu Container 左滑出動畫
  gsap.to(menuContainer, {
    x: "-100%",
    duration: 0.5,
    ease: "power3.in",
  });
});

console.log("123main");
