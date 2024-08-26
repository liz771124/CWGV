document.querySelector("body").style.display = "none";
document.addEventListener("DOMContentLoaded", function () {
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
setTimeout(() => {
  document.querySelector("body").style.display = "block";
}, 2000);
