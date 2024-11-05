/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: '#ADD8E6',
          yellow: '#FFFACD',
          coral: '#F08080',
          mint: '#98FF98',
          lavender: '#E6E6FA',
        },
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        heading: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
};