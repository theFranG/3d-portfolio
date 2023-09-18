/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#060606",
        secondary: "#f5f5f5",
        tertiary: "#7f00b2",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 0px 120px -60px rgba(16, 13, 37, 0.7)", 
      },
      screens: {
        xs: "450px",
        sm: "768px",
        md: "1210px"
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};