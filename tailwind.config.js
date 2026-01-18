const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  darkMode: "class", // ⬅️ WAJIB

  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: "#ff7a18",
        secondary: "#1f2937",
        muted: "#94a3b8",
        surface: "#f8fafc",
      },
    },
  },

  plugins: [],
});
