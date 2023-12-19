/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      backgroundColor: {
        'rgb-orange': 'rgb(255, 114, 92)',
        'rgb-green': 'rgb(55, 90, 100)',
      },
      colors:{
        primary:{
          DEFAULT: '#ff725c',
        },
        secondary:{
          DEFAULT: '#375a64',
          50: '#4f8695',
        },
        muted:{
          DEFAULT: '#7d7d87'
        }
      }
    },
  },
  plugins: [
    require('tailwindcss-gradients'),
  ],
}