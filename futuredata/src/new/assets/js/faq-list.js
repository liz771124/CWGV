const answer = [];
const activeClass = ["bg-primary-500", "border-primary-500", "text-white"];
const normalClass = ["bg-white"];

document.querySelectorAll(".faq-item").forEach((item) => {
  item.addEventListener("click", function () {
    const question = this.getAttribute("data-question");
    const option = this.getAttribute("data-option");
    document
      .querySelectorAll(`.faq-item[data-question="${question}"]`)
      .forEach((button) => {
        button.classList.remove(...activeClass, ...normalClass);
        button.classList.add(...normalClass);
      });

    this.classList.remove(...normalClass);
    this.classList.add(...activeClass);
    if (!window.answer) window.answer = [];
    window.answer[question - 1] = option;
  });
});
