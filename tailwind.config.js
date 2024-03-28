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
    },
  },
  plugins: [],
};
