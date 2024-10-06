const userAgent = navigator.userAgent;
const fontBase = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
  ? 13
  : 20;
console.log(fontBase);
const wordList = [
  {
    text: "英文",
    size: fontBase,
    fill: "#1848D9",
    link: "https://shopee.tw/",
  },
  {
    text: "電腦",
    size: fontBase,
    fill: "#1848D9",
    link: "https://shopee.tw/",
  },
  {
    text: "國文",
    size: fontBase,
    fill: "#1848D9",
    link: "https://shopee.tw/",
  },
  {
    text: "作文",
    size: fontBase,
    fill: "#1848D9",
    link: "https://shopee.tw/",
  },
  {
    text: "地理",
    size: fontBase,
    fill: "#1848D9",
    link: "https://shopee.tw/",
  },
  {
    text: "動力",
    size: fontBase,
    fill: "#1848D9",
    link: "https://shopee.tw/",
  },
  {
    text: "求職",
    size: fontBase,
    fill: "#1848D9",
    link: "https://shopee.tw/",
  },
  {
    text: "小字",
    size: fontBase,
    fill: "#1848D9",
    link: "https://shopee.tw/",
  },
  {
    text: "寓教",
    size: fontBase,
    fill: "#1848D9",
    link: "https://shopee.tw/",
  },
  {
    text: "運動",
    size: fontBase,
    fill: "#1848D9",
    link: "https://shopee.tw/",
  },
  {
    text: "體育",
    size: fontBase,
    fill: "#1848D9",
    link: "https://shopee.tw/",
  },
  {
    text: "四個文字",
    size: fontBase,
    fill: "#1848D9",
    link: "https://shopee.tw/",
  },
  {
    text: "科學知識",
    size: fontBase,
    fill: "#1848D9",
    link: "https://shopee.tw/",
  },
  {
    text: "社會人文",
    size: fontBase + 10,
    fill: "#1ABB27",
    link: "https://tw.yahoo.com/",
  },
  {
    text: "心靈",
    size: fontBase + 10,
    fill: "#1ABB27",
    link: "https://tw.yahoo.com/",
  },
  {
    text: "三個字",
    size: fontBase + 10,
    fill: "#1ABB27",
    link: "https://tw.yahoo.com/",
  },
  {
    text: "動物",
    size: fontBase + 10,
    fill: "#1ABB27",
    link: "https://tw.yahoo.com/",
  },
  {
    text: "植物",
    size: fontBase + 10,
    fill: "#1ABB27",
    link: "https://tw.yahoo.com/",
  },
  {
    text: "語文",
    size: fontBase + 10,
    fill: "#1ABB27",
    link: "https://tw.yahoo.com/",
  },
  {
    text: "數理",
    size: fontBase + 10,
    fill: "#1ABB27",
    link: "https://tw.yahoo.com/",
  },
  {
    text: "電腦",
    size: fontBase + 10,
    fill: "#1ABB27",
    link: "https://tw.yahoo.com/",
  },
  {
    text: "數學",
    size: fontBase + 10,
    fill: "#1ABB27",
    link: "https://tw.yahoo.com/",
  },
  {
    text: "生活居家",
    size: fontBase + 15,
    fill: "#EF5024",
    link: "https://24h.pchome.com.tw/",
  },
  {
    text: "地球",
    size: fontBase + 15,
    fill: "#EF5024",
    link: "https://24h.pchome.com.tw/",
  },
  {
    text: "海洋生物",
    size: fontBase + 15,
    fill: "#EF5024",
    link: "https://24h.pchome.com.tw/",
  },
  {
    text: "哲學",
    size: fontBase + 15,
    fill: "#EF5024",
    link: "https://24h.pchome.com.tw/",
  },
  {
    text: "自然科學",
    size: fontBase + 15,
    fill: "#EF5024",
    link: "https://24h.pchome.com.tw/",
  },
  {
    text: "天氣",
    size: fontBase + 15,
    fill: "#EF5024",
    link: "https://24h.pchome.com.tw/",
  },
  {
    text: "路權",
    size: fontBase + 15,
    fill: "#EF5024",
    link: "https://24h.pchome.com.tw/",
  },
  {
    text: "颱風",
    size: fontBase + 15,
    fill: "#EF5024",
    link: "https://24h.pchome.com.tw/",
  },
  {
    text: "安全宣導",
    size: fontBase + 15,
    fill: "#EF5024",
    link: "https://24h.pchome.com.tw/",
  },
  {
    text: "心靈成長",
    size: fontBase + 25,
    fill: "#A89127",
    link: "https://google.com.tw/",
  },
  {
    text: "很多文字標籤",
    size: fontBase + 25,
    fill: "#A89127",
    link: "https://google.com.tw/",
  },
  {
    text: "科技",
    size: fontBase + 25,
    fill: "#A89127",
    link: "https://google.com.tw/",
  },
  {
    text: "國文",
    size: fontBase + 25,
    fill: "#A89127",
    link: "https://google.com.tw/",
  },
  {
    text: "家庭教育",
    size: fontBase + 25,
    fill: "#A89127",
    link: "https://google.com.tw/",
  },
  {
    text: "台灣文學",
    size: fontBase + 25,
    fill: "#A89127",
    link: "https://google.com.tw/",
  },
  {
    text: "上下區塊二擇一",
    size: fontBase + 25,
    fill: "#A89127",
    link: "https://google.com.tw/",
  },
];

let currentWidth = null;

const getTagElementWidth = () => {
  const screenWidth = window.innerWidth;
  if (screenWidth <= 500) {
    return "340px";
  } else if (screenWidth <= 1000) {
    return "500px";
  } else {
    return "1000px";
  }
};

const generateCloud = () => {
  const cloudContainer = document.getElementById("cloud");
  if (!cloudContainer) return;

  const newWidth = getTagElementWidth();
  if (newWidth === currentWidth) return;

  currentWidth = newWidth;
  cloudContainer.style.width = newWidth;

  const w = cloudContainer.clientWidth;
  const h = cloudContainer.clientHeight;
  cloudContainer.innerHTML = "";

  d3.layout
    .cloud()
    .size([w, h])
    .words(wordList)
    .padding(10)
    .rotate(0)
    .fontSize((d) => d.size)
    .on("end", draw)
    .start();

  function draw(words) {
    d3.select("#cloud")
      .append("svg")
      .attr("width", w)
      .attr("height", h)
      .append("g")
      .attr("transform", "translate(" + w / 2 + "," + h / 2 + ")")
      .selectAll("text")
      .data(words)
      .enter()
      .append("text")
      .style("font-size", (d) => d.size + "px")
      .style("font-family", "Noto Sans TC")
      .style("margin", "auto")
      .style("font-weight", "600")
      .style("cursor", "pointer")
      .style("fill", (d) => d.fill)
      .attr("text-anchor", "middle")
      .attr(
        "transform",
        (d) => "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")",
      )
      .text((d) => d.text)
      .on("click", (d) => d.link && window.open(d.link, "_blank"));
  }
};

generateCloud();
window.addEventListener("resize", generateCloud);
window.addEventListener("orientationchange", generateCloud);
