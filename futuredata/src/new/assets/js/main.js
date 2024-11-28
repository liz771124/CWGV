document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.getElementById("menuIcon");
  const closeMenu = document.getElementById("closeMenu");
  const menuContainer = document.getElementById("menuContainer");
  const menuItems = document.querySelectorAll(".menu-item");

  menuIcon.addEventListener("click", () => {
    gsap.to(menuContainer, {
      x: 0,
      opacity: 1,
      duration: 0.5,
      ease: "power3.out",
    });

    gsap.fromTo(
      menuItems,
      { x: -50, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.5, ease: "power3.out", stagger: 0.1 },
    );
  });

  closeMenu.addEventListener("click", () => {
    gsap.to(menuContainer, {
      x: "100%",
      opacity: 0,
      duration: 0.5,
      ease: "power3.in",
    });
  });
});
