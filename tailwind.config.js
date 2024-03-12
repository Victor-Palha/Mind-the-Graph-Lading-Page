/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.jsx",
  ],
  theme: {
    extend: {
      colors: {
        "mgGray": "#EEEEEE",
        "mgPink": "#DC1866",
        "mgOrange": "#FF9226",
        "mgPurpleLight": "#7833FF",
        "mgBlack": "#212121",
        "mgPurpleDark": "#5F29CC"
      }
    },
  },
  plugins: [],
}

