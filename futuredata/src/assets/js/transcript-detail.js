const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
const fontBase = isMobile ? 12 : 15;

// 標籤雲資料格式
// level 1 < 2 < 3 < 4
// fill #0F3BBF < #2E8C03 < #D9A404 < #EF5024
const wordList = [
  {
    text: "天文",
    level: 1,
    fill: "#0F3BBF",
    link: "https://shopee.tw/",
  },
  {
    text: "宇宙",
    level: 1,
    fill: "#0F3BBF",
    link: "https://shopee.tw/",
  },
  {
    text: "星球",
    level: 1,
    fill: "#0F3BBF",
    link: "https://shopee.tw/",
  },
  {
    text: "英文",
    level: 1,
    fill: "#0F3BBF",
    link: "https://shopee.tw/",
  },
  {
    text: "電腦",
    level: 1,
    fill: "#0F3BBF",
    link: "https://shopee.tw/",
  },
  {
    text: "國文",
    level: 1,
    fill: "#0F3BBF",
    link: "https://shopee.tw/",
  },
  {
    text: "作文",
    level: 1,
    fill: "#0F3BBF",
    link: "https://shopee.tw/",
  },
  {
    text: "地理",
    level: 1,
    fill: "#0F3BBF",
    link: "https://shopee.tw/",
  },
  {
    text: "動力",
    level: 1,
    fill: "#0F3BBF",
    link: "https://shopee.tw/",
  },
  {
    text: "求職",
    level: 1,
    fill: "#0F3BBF",
    link: "https://shopee.tw/",
  },
  {
    text: "小字",
    level: 1,
    fill: "#0F3BBF",
    link: "https://shopee.tw/",
  },
  {
    text: "寓教",
    level: 1,
    fill: "#0F3BBF",
    link: "https://shopee.tw/",
  },
  {
    text: "運動",
    level: 1,
    fill: "#0F3BBF",
    link: "https://shopee.tw/",
  },
  {
    text: "體育",
    level: 1,
    fill: "#0F3BBF",
    link: "https://shopee.tw/",
  },
  {
    text: "四個文字",
    level: 1,
    fill: "#0F3BBF",
    link: "https://shopee.tw/",
  },
  {
    text: "科學知識",
    level: 1,
    fill: "#0F3BBF",
    link: "https://shopee.tw/",
  },
  {
    text: "自然",
    level: 1,
    fill: "#0F3BBF",
    link: "https://shopee.tw/",
  },
  {
    text: "外國",
    level: 2,
    fill: "#2E8C03",
    link: "https://tw.yahoo.com/",
  },
  {
    text: "社會人文",
    level: 2,
    fill: "#2E8C03",
    link: "https://tw.yahoo.com/",
  },
  {
    text: "心靈",
    level: 2,
    fill: "#2E8C03",
    link: "https://tw.yahoo.com/",
  },
  {
    text: "清心",
    level: 2,
    fill: "#2E8C03",
    link: "https://tw.yahoo.com/",
  },
  {
    text: "可不可",
    level: 2,
    fill: "#2E8C03",
    link: "https://tw.yahoo.com/",
  },
  {
    text: "其他",
    level: 2,
    fill: "#2E8C03",
    link: "https://tw.yahoo.com/",
  },
  {
    text: "小小字",
    level: 2,
    fill: "#2E8C03",
    link: "https://tw.yahoo.com/",
  },
  {
    text: "三個字",
    level: 2,
    fill: "#2E8C03",
    link: "https://tw.yahoo.com/",
  },
  {
    text: "動物",
    level: 2,
    fill: "#2E8C03",
    link: "https://tw.yahoo.com/",
  },
  {
    text: "植物",
    level: 2,
    fill: "#2E8C03",
    link: "https://tw.yahoo.com/",
  },
  {
    text: "語文",
    level: 2,
    fill: "#2E8C03",
    link: "https://tw.yahoo.com/",
  },
  {
    text: "小字22",
    level: 2,
    fill: "#2E8C03",
    link: "https://tw.yahoo.com/",
  },
  {
    text: "日常",
    level: 2,
    fill: "#2E8C03",
    link: "https://tw.yahoo.com/",
  },
  {
    text: "數理",
    level: 2,
    fill: "#2E8C03",
    link: "https://tw.yahoo.com/",
  },
  {
    text: "電腦",
    level: 2,
    fill: "#2E8C03",
    link: "https://tw.yahoo.com/",
  },
  {
    text: "螢幕",
    level: 2,
    fill: "#2E8C03",
    link: "https://tw.yahoo.com/",
  },
  {
    text: "耳機",
    level: 2,
    fill: "#2E8C03",
    link: "https://tw.yahoo.com/",
  },
  {
    text: "運動鍛鍊",
    level: 2,
    fill: "#2E8C03",
    link: "https://tw.yahoo.com/",
  },
  {
    text: "筆記",
    level: 2,
    fill: "#2E8C03",
    link: "https://tw.yahoo.com/",
  },
  {
    text: "數學",
    level: 2,
    fill: "#2E8C03",
    link: "https://tw.yahoo.com/",
  },
  {
    text: "生活居家",
    level: 3,
    fill: "#D9A404",
    link: "https://24h.pchome.com.tw/",
  },
  {
    text: "地球",
    level: 3,
    fill: "#D9A404",
    link: "https://24h.pchome.com.tw/",
  },
  {
    text: "安全",
    level: 3,
    fill: "#D9A404",
    link: "https://24h.pchome.com.tw/",
  },
  {
    text: "海洋生物",
    level: 3,
    fill: "#D9A404",
    link: "https://24h.pchome.com.tw/",
  },
  {
    text: "哲學",
    level: 3,
    fill: "#D9A404",
    link: "https://24h.pchome.com.tw/",
  },
  {
    text: "自然科學",
    level: 3,
    fill: "#D9A404",
    link: "https://24h.pchome.com.tw/",
  },
  {
    text: "天氣",
    level: 3,
    fill: "#D9A404",
    link: "https://24h.pchome.com.tw/",
  },
  {
    text: "思維訓練",
    level: 3,
    fill: "#D9A404",
    link: "https://24h.pchome.com.tw/",
  },
  {
    text: "邏輯",
    level: 3,
    fill: "#D9A404",
    link: "https://24h.pchome.com.tw/",
  },
  {
    text: "路權",
    level: 3,
    fill: "#D9A404",
    link: "https://24h.pchome.com.tw/",
  },
  {
    text: "颱風",
    level: 3,
    fill: "#D9A404",
    link: "https://24h.pchome.com.tw/",
  },
  {
    text: "安全宣導",
    level: 3,
    fill: "#D9A404",
    link: "https://24h.pchome.com.tw/",
  },
  {
    text: "心靈成長",
    level: 4,
    fill: "#EF5024",
    link: "https://google.com.tw/",
  },
  {
    text: "很多文字標籤",
    level: 4,
    fill: "#EF5024",
    link: "https://google.com.tw/",
  },
  {
    text: "科技",
    level: 4,
    fill: "#EF5024",
    link: "https://google.com.tw/",
  },
  {
    text: "國文",
    level: 4,
    fill: "#EF5024",
    link: "https://google.com.tw/",
  },
  {
    text: "家庭教育",
    level: 4,
    fill: "#EF5024",
    link: "https://google.com.tw/",
  },
  {
    text: "台灣文學",
    level: 4,
    fill: "#EF5024",
    link: "https://google.com.tw/",
  },
  {
    text: "上下區塊二擇一",
    level: 4,
    fill: "#EF5024",
    link: "https://google.com.tw/",
  },
];

const sizeLevels = {
  1: fontBase,
  2: fontBase + 10,
  3: fontBase + 15,
  4: fontBase + 20,
};

const updatedWordList = wordList.map((word) => ({
  ...word,
  size: sizeLevels[word.level] || fontBase,
}));

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
    .words(updatedWordList)
    .padding(isMobile ? 5 : 10)
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
