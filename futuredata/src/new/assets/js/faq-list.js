const answer = [];
const activeClass = ["bg-primary-500", "border-primary-500", "text-white"];
const normalClass = ["bg-white"];

document.querySelectorAll(".faq-item").forEach((item) => {
  item.addEventListener("click", function () {
    // 取得問題編號和選項
    const question = this.getAttribute("data-question");
    const option = this.getAttribute("data-option");

    // 取得相同問題的所有選項，並移除 "active" 狀態
    document
      .querySelectorAll(`.faq-item[data-question="${question}"]`)
      .forEach((button) => {
        button.classList.remove(...activeClass, ...normalClass);
        button.classList.add(...normalClass);
      });

    // 為點擊的選項設置 "active" 狀態
    this.classList.remove(...normalClass);
    this.classList.add(...activeClass);

    // 更新答案數據 (可選，根據需求修改)
    if (!window.answer) window.answer = [];
    window.answer[question - 1] = option;
  });
});
