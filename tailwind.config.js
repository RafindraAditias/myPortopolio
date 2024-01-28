/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        'cokelat': '#d3a27f',
      },
      fontFamily: {
        mons : ['Montserrat'],
      },
      screens: {
        '2xl' : '1320px',
      }
    },
  },
  plugins: [],
}