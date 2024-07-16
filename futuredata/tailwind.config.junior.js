module.exports = {
  content: [
    "./node_modules/tw-elements/js/**/*.js",
    "./src/**/**/*.{html,js,scss}",
  ],
  plugins: [],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "100%",
        md: "100%",
        lg: "768px",
        xl: "1024px",
        "2xl": "1170px",
      },
    },
    extend: {
      fontFamily: {
        sans: [
          "Noto Sans TC",
          "微軟正黑體",
          "Inter",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
          "Apple Color Emoji",
        ],
        serif: ["Times New Roman"],
      },
      colors: {
        "primary-50": "var(--junior-primary-50)",
        "primary-100": "var(--junior-primary-100)",
        "primary-200": "var(--junior-primary-200)",
        "primary-300": "var(--junior-primary-300)",
        "primary-400": "var(--junior-primary-400)",
        "primary-500": "var(--junior-primary-500)",
        "primary-600": "var(--junior-primary-600)",
        "primary-700": "var(--junior-primary-700)",
        "primary-800": "var(--junior-primary-800)",
        "primary-900": "var(--junior-primary-900)",

        // 'secondary-100': 'var(--Secondary-100)',
        // 'secondary-300': 'var(--Secondary-300)',
        // 'secondary-500': 'var(--Secondary-500)',
        // 'secondary-600': 'var(--Secondary-600)',
        // 'secondary-700': 'var(--Secondary-700)',
        // 'secondary-900': 'var(--Secondary-900)',

        // 'success-100': 'var(--Success-100)',
        // 'success-200': 'var(--Success-300)',
        // 'success-400': 'var(--Success-400)',
        // 'success-500': 'var(--Success-500)',
        // 'success-600': 'var(--Success-600)',
        // 'success-700': 'var(--Success-700)',
        // 'success-900': 'var(--Success-900)',

        // 'worry-100': 'var(--Worry-100)',
        // 'worry-300': 'var(--Worry-300)',
        // 'worry-400': 'var(--Worry-400)',
        // 'worry-500': 'var(--Worry-500)',
        // 'worry-600': 'var(--Worry-600)',
        // 'worry-700': 'var(--Worry-700)',
        // 'worry-900': 'var(--Worry-900)',

        // 'info-100': 'var(--Info-100)',
        // 'info-300': 'var(--Info-300)',
        // 'info-400': 'var(--Info-400)',
        // 'info-500': 'var(--Info-500)',
        // 'info-600': 'var(--Info-600)',
        // 'info-700': 'var(--Info-700)',
        // 'info-900': 'var(--Info-900)',

        // 'gray2-100': 'var(--Gray-100)',
        // 'gray2-300': 'var(--Gray-300)',
        // 'gray2-400': 'var(--Gray-400)',
        // 'gray2-500': 'var(--Gray-500)',
        // 'gray2-600': 'var(--Gray-600)',
        // 'gray2-700': 'var(--Gray-700)',
        // 'gray2-900': 'var(--Gray-900)',

        // 'typography-100': 'var(--Typography-100)',
        // 'typography-200': 'var(--Typography-200)',
        // 'typography-300': 'var(--Typography-300)',
        // 'typography-400': 'var(--Typography-400)',
        // 'typography-500': 'var(--Typography-500)',
        // 'typography-link': 'var(--Typography-link)',
        // 'typography-money': 'var(--Typography-money)',

        // 'event-100': 'var(--Event-100)',
        // 'event-300': 'var(--Event-300)',
        // 'event-500': 'var(--Event-500)'
      },
      // backgroundColor: (theme) => ({
      //   ...theme("colors"),
      // }),
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/container-queries"),
  ],
};
