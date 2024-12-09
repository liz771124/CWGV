const answer = [];
document.querySelectorAll(".faq-item").forEach(function (item) {
  const normalClass = ["bg-white", "border-gray2-800"];
  // this.classList.add(...normalClass);
  item.addEventListener("click", function () {
    const question = this.getAttribute("data-question");
    const questionItems = document.querySelectorAll(
      `.faq-item[data-question="${question}"]`,
    );
    const option = this.getAttribute("data-option");
    const activeClass = ["bg-primary-500", "border-primary-500", "text-white"];
    questionItems.forEach(function (button) {
      button.classList.remove(...activeClass, ...normalClass);
    });
    answer[question - 1] = option;
    this.classList.add(...activeClass);
    // console.log(answer);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const finalScore = document.querySelector(".final-score").innerText;
  const timeline = gsap.timeline({
    defaults: { duration: 0.8, ease: "power3.out" },
  });

  timeline
    .fromTo(
      ".banner-container",
      { height: "0px", opacity: 0 },
      { height: "300px", opacity: 1, duration: 0.35, ease: "power1.in" },
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

    // 3. 中間吉祥物放大縮小滑入
    .from(".banner-img-01", { scale: 0, opacity: 0, y: 50, ease: "back.inOut" })

    // 2. 學習測驗文字由左側滑入
    .from(".banner-string-01", {
      x: "-50%",
      opacity: 0,
      duration: 0.5,
      ease: "sine.inOut",
    })

    // 4. 我的成績區塊由右側滑入
    .from(".banner-string-02", {
      x: "50%",
      opacity: 0,
      duration: 0.5,
      ease: "sine.inOut",
    })
    // 數字亂數動畫

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
        // 最終設定為目標分數
        document.querySelector(".score-number").textContent = finalScore;
      },
    });
});
