const setTracking = (element) => {
  const icon = element.querySelector(".tracking-icon");
  const currentSrc = icon.getAttribute("src");
  icon.setAttribute(
    "src",
    currentSrc.includes("heart-red.svg")
      ? "../../assets/img/icons/heart-blue.svg"
      : "../../assets/img/icons/heart-red.svg",
  );
};
