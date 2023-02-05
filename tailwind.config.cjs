/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        main: "#3b404b",
        primary: "#377DFF",
        whiteGray: "#F9FAFB",
        black: "#18191A",
        blackGray: "#242526",
      },
    },
  },
  plugins: [],
};
