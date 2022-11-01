/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*.html'],
  theme: {
    extend: {
      colors: {
        primary: '#1D2130',
        maron: 'rgba(215,152,225,0.15)',
        lightblue: 'rgba(224,228,252,0.5)'
      },
      backgroundImage: {
        'gradient-title': 'linear-gradient(53.94deg, #373FFF 15.02%, #3ACAF8 82.83%)',
        'features-gradient': 'radial-gradient(483.9% 2719.65% at -49.5% -250%, #D798E1 17.55%, #9BFFA5 27.56%, #AED3FF 49.89%, #C9D4EF 56.53%, #CACFFA 65.69%)'
      },
      fontFamily: {
        'roboto': "'Roboto', sans-serif"
      }
    },
  },
  plugins: [
    require("tailwindcss-text-fill")
  ],
}
