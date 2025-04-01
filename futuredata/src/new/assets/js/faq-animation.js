document.addEventListener("DOMContentLoaded", () => {
  const isMobile = /iPhone|iPod|Android/i.test(navigator.userAgent);
  const finalScore = document.querySelector(".final-score").innerText;
  const timeline = gsap.timeline({
    defaults: { duration: 0.8, ease: "power3.out" },
  });

  timeline
    .fromTo(
      ".banner-container",
      { height: "0px", opacity: 0 },
      {
        height: isMobile ? "150px" : "300px",
        opacity: 1,
        duration: 0.35,
        ease: "power1.in",
      },
    )
    .from(".banner-bg-01", {
      x: "-100%",
      opacity: 0,
      duration: 0.5,
      ease: "power3.out",
    })
    .from(".banner-bg-02", {
      x: "100%",
      opacity: 0,
      duration: 0.5,
      ease: "power3.out",
    })
    .from(".banner-bg-03", {
      opacity: 0,
      y: "50%",
      duration: 0.5,
      ease: "power3.out",
    })

    .from(".banner-img-01", { scale: 0, opacity: 0, y: 50, ease: "back.inOut" })

    .from(".banner-string-01", {
      y: "50%",
      opacity: 0,
      duration: 0.3,
      ease: "sine.inOut",
    })

    .from(".banner-string-02", {
      x: "50%",
      opacity: 0,
      duration: 0.3,
      ease: "sine.inOut",
    })

    .to(".score-number", {
      duration: 0.5,
      ease: "elastic.out",
      onUpdate: function () {
        const randomValue = Math.ceil(
          gsap.utils.interpolate(0, finalScore, this.progress()) * 10,
        );
        document.querySelector(".score-number").textContent = randomValue
          .toString()
          .padStart(3, "0");
      },
      onComplete: () => {
        document.querySelector(".score-number").textContent = finalScore;
      },
    })

    .from(".banner-crown", {
      scale: 0,
      opacity: 0,
      y: -10,
      ease: "bounce.out",
      duration: 0.5,
    });

  gsap.to(".banner-crown", {
    y: "0",
    yoyo: true,
    repeat: -1,
    duration: 1,
    ease: "sine.out",
  });
});
