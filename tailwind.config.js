/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens:{
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        darkPurple: 'rgb(37,0,37)',
        veryLightPurple: 'rgb(243, 126, 243)'
      }
    },
  },
  plugins: [],
}

