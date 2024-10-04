const gradeSwiper = new Swiper(".gradeSwiper", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 3,

  navigation: {
    nextEl: ".swiper-button-next2",
    prevEl: ".swiper-button-prev2",
  },
  effect: "slide",
  loop: true,
  breakpoints: {
    480: {
      direction: "horizontal",
    },
    768: {
      direction: "vertical",
    },
    1024: {
      direction: "vertical",
    },
  },
  // autoplay: {
  //   delay: 2000,
  //   reverseDirection: true,
  //   disableOnInteraction: false,
  // },
});
// const lessonMainSwiper = new Swiper(".lessonMainSwiper", {
//   loop: true,
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   thumbs: {
//     swiper: lessonThumbSwiper,
//   },
// });

var data = {
  labels: [
    "1月",
    "2月",
    "3月",
    "4月",
    "5月",
    "6月",
    "7月",
    "8月",
    "9月",
    "10月",
    "11月",
    "12月",
  ],
  datasets: [
    {
      label: "全站閱讀",
      data: [50, 80, 25, 65, 10, 23, 74, 15, 25, 14, 6, 28],
      backgroundColor: "#00276880",
      borderColor: "rgb(116, 185, 255)",
    },
    {
      label: "個人閱讀",
      data: [10, 20, 40, 55, 16, 3, 42, 2, 5, 4, 36, 8],
      backgroundColor: "#FFD54F",
      borderColor: "#ffaabb",
    },
  ],
};

var options = {
  responsive: true,
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

var data2 = {
  labels: [
    "語文",
    "人文史地",
    "社會",
    "自然科學",
    "數理",
    "生活",
    "藝術",
    "國際",
  ],
  datasets: [
    {
      // label: "My First Dataset",
      data: [30, 50, 10, 30, 5, 1, 6, 22],
      backgroundColor: [
        "#FF6B6B",
        "#FFA726",
        "#FFD54F",
        "#81C784",
        "#64B5F6",
        "#4FC3F7",
        "#BA68C8",
        "#F8BBD0",
      ],
      hoverOffset: 4,
    },
  ],
};

var options2 = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    // title: {
    //   display: true,
    //   text: "Chart.js Line Chart",
    // },
  },
};

const ctx = document.getElementById("myChart").getContext("2d");
const myChart = new Chart(ctx, {
  type: "line",
  data: data,
  options: options,
});

const ctx2 = document.getElementById("myChart2").getContext("2d");
const myChart2 = new Chart(ctx2, {
  type: "doughnut",
  data: data2,
  options: options2,
});
