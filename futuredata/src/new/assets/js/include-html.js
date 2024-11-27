document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("html").style.display = "none";
  let pages = document.querySelectorAll("[data-include]");
  pages.forEach(function (element, index) {
    let file =
      "../components/" + element.getAttribute("data-include") + ".html";
    fetch(file)
      .then(function (response) {
        if (response.ok) {
          return response.text();
        } else {
          throw new Error("Network response was not ok");
        }
      })
      .then(function (data) {
        element.innerHTML = data;
      });
  });
});
window.addEventListener("load", () => {
  document.querySelector("html").style.display = "block";
});
