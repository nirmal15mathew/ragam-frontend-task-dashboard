/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: ["./src/**/*.{html,js}", "./*.{html, js}"],
  theme: {
    extend: {
      colors: {
        primary_blue: 'hsl(246, 80%, 60%)',
        primary_red: 'hsl(15, 100%, 70%)',
        primary_soft_blue: 'hsl(195, 74%, 62%)',
        primary_soft_red: 'hsl(348, 100%, 68%)',
        primary_green: 'hsl(145, 58%, 55%)',
        primary_violet: 'hsl(264, 64%, 52%)',
        primary_orange: 'hsl(43, 84%, 65%)',
        neutral_deep_blue: 'hsl(226, 43%, 10%)',
        neutral_dark_blue: 'hsl(235, 46%, 20%)',
        neutral_desat_blue: 'hsl(235, 45%, 61%)',
        neutral_pale_blue: 'hsl(236, 100%, 87%)'
      }
    },
    fontFamily: {
      'sans': ["Rubik", 'sans-serif']
    }
  },
  plugins: [],
}