/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        moonDance: 'Moon Dance',
        lato: 'Lato',
      },
      backgroundImage: {
        'bg-pic': "url('/Img/Bg_pic.svg')",
      },
      colors: {
        glassy: 'rgba(255, 255, 255, .1)',
      },
      boxShadow: {
        glassy: '0 25 45 rgba(0,0,0, .2)',
      },
    },
  },
  plugins: [],
};
