document.addEventListener("DOMContentLoaded", function () {
  let pages = document.querySelectorAll("[data-include]");
  pages.forEach(function (element) {
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
      })
      .catch(function (error) {});
  });
});
