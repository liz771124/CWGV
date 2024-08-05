const setTracking = (element) => {
  const icon = element.querySelector(".tracking-icon");
  const currentSrc = icon.getAttribute("src");
  // 判斷網址為兒童或少年
  const isJunior = location.href.includes("junior"); 
  icon.setAttribute(
    "src",
    currentSrc.includes("heart-red.svg")
      ? `../../assets/img/icons/heart-${isJunior ? "blue" : "green"}.svg`
      : "../../assets/img/icons/heart-red.svg",
  );
};
