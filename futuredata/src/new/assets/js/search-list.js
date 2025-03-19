document.addEventListener("DOMContentLoaded", function () {
  const params = new URLSearchParams(window.location.search);
  const keyword = params.get("keyword");
  if (keyword) {
    document.getElementById("navbar-search-input").value = keyword;
  }
});
