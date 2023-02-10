/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#d7e5ff",
          200: "#afcbff",
          300: "#87b1ff",
          400: "#5f97ff",
          500: "#377dff",
          600: "#2c64cc",
          700: "#214b99",
          800: "#163266",
          900: "#0b1933",
        },
        main: "#3b404b",
        whiteGray: "#F9FAFB",
        black: "#18191A",
        blackGray: "#242526",
      },
    },
  },
  plugins: [],
};
