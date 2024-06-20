// import { Collapse, initTWE } from "tw-elements";
// initTWE({ Collapse });

// document.getElementById("test-id").className +=
//   "bg-indigo-700 text-white rounded";

document.getElementById("test-id").addEventListener("click", () => {
  console.log("123");
  document.getElementById("test").click();
});
