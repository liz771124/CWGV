const heartIcon = document.getElementById("heart-icon");
const noteIcon = document.getElementById("note-icon");
heartIcon.addEventListener("click", function (e) {
  if (e.target.src.includes("heart-red.svg")) {
    e.target.src = "../assets/images/icons/heart-gray.svg";
  } else {
    e.target.src = "../assets/images/icons/heart-red.svg";
  }
});

noteIcon.addEventListener("click", function (e) {
  if (e.target.src.includes("note-blue.svg")) {
    e.target.src = "../assets/images/icons/note-gray.svg";
  } else {
    e.target.src = "../assets/images/icons/note-blue.svg";
  }
});
