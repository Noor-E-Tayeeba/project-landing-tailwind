/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      backgroundImage:{
        'home-bg':'url("../img/home-bg.png")',
        'section6-bg':'url("../img/section6-bg.png")',
      },
      fontFamily:{
        'roboto':"Roboto",
      },
      colors:{
        primary: "#505F98",
        secondary: "#111B47",
      }
    },
  },
  plugins: [],
}

