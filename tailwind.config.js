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
        'bg-sketch' : "url('/Img/Bg_Sketch (3).png')",
        'bg-lines' : "url('/Img/Lines_pic.png')",
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
