// import { Collapse, initTWE } from "tw-elements";
// initTWE({ Collapse });

// document.getElementById("test-id").addEventListener("click", () => {
//   console.log("123");
//   document.getElementById("test").click();
// });


// 題庫
const answer = [];
document.querySelectorAll(".faq-item").forEach(function (item) {
  item.addEventListener("click", function () {
    const question = this.getAttribute("data-question");
    const questionItems = document.querySelectorAll(
      `.faq-item[data-question="${question}"]`,
    );
    const option = this.getAttribute("data-option");
    const activeClass = [
      "bg-primary-50",
      "text-primary-500",
      "border-primary-500",
    ];
    questionItems.forEach(function (button) {
      button.classList.remove(...activeClass);
    });
    answer[question - 1] = option;
    this.classList.add(...activeClass);
    console.log(answer);
  });
});
