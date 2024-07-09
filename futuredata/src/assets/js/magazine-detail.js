const heartIcon = document.getElementById("heart-icon");
const noteIcon = document.getElementById("note-icon");
const offcanvasNote = document.getElementById("offcanvasNote");

heartIcon.addEventListener("click", function (e) {
  if (e.target.src.includes("heart-red.svg")) {
    e.target.src = "../../assets/img/icons/heart-gray.svg";
  } else {
    e.target.src = "../../assets/img/icons/heart-red.svg";
  }
});

noteIcon.addEventListener("click", function (e) {
  if (e.target.src.includes("note-blue.svg")) {
    e.target.src = "../../assets/img/icons/note-gray.svg";
  } else {
    e.target.src = "../../assets/img/icons/note-blue.svg";
  }
});

offcanvasNote.addEventListener("shown.twe.offcanvas", (e) => {
  const backdrop = document.querySelector("div[data-twe-backdrop-show]");
  const noteBackdrop = document.querySelector("#note-backdrop");
  console.log(noteBackdrop);
  backdrop.classList.add("pointer-events-none");
  noteBackdrop.classList.remove("hidden");
});

offcanvasNote.addEventListener("hidden.twe.offcanvas", (e) => {
  const noteBackdrop = document.querySelector("#note-backdrop");
  noteBackdrop.classList.add("hidden");
});
