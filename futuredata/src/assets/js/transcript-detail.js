// const lessonThumbSwiper = new Swiper(".lessonThumbSwiper", {
//   loop: true,
//   spaceBetween: 10,
//   slidesPerView: 4
// });
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
  labels: ["一月", "二月", "三月", "四月"],
  datasets: [
    {
      label: "營收統計",
      data: [5000, 8000, 12000, 6500],
      backgroundColor: "rgb(116, 185, 255)",
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
  labels: ["語文", "數學", "自然科學"],
  datasets: [
    {
      // label: "My First Dataset",
      data: [300, 50, 100],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)",
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
    //   text: "Chart.js Pie Chart",
    // },
  },
};

const ctx = document.getElementById("myChart").getContext("2d");
const myChart = new Chart(ctx, {
  type: "bar",
  data: data,
  options: options,
});

const ctx2 = document.getElementById("myChart2").getContext("2d");
const myChart2 = new Chart(ctx2, {
  type: "doughnut",
  data: data2,
  options: options2,
});
