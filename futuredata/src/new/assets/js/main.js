document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.getElementById("menuIcon");
  const closeMenu = document.getElementById("closeMenu");
  const menuContainer = document.getElementById("menuContainer");
  const menuItems = document.querySelectorAll(".menu-item");
  const body = document.body;

  menuIcon.addEventListener("click", () => {
    body.classList.add("menu-open");
    gsap.set(menuItems, { x: -50, opacity: 0 });
    gsap.to(menuContainer, {
      x: 0,
      opacity: 1,
      duration: 0.5,
      ease: "power3.out",
      display: "block",
    });
    gsap.to(menuItems, {
      x: 0,
      opacity: 1,
      duration: 0.5,
      ease: "power3.out",
      stagger: 0.25, // 滑入間隔
    });
  });

  // 關閉選單
  closeMenu.addEventListener("click", () => {
    // 恢復滾動
    body.classList.remove("menu-open");

    // 選單收合
    gsap.to(menuContainer, {
      x: "-100%",
      opacity: 0,
      duration: 0.5,
      ease: "power3.in",
      onComplete: () => {
        menuContainer.style.display = "none"; // 隱藏選單
      },
    });
  });
});
