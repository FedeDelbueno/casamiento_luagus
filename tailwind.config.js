/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        gold: {
          50:  '#FFFDF0',
          100: '#FEF9D9',
          200: '#FDE68A',
          300: '#F9E27A',
          400: '#F5CD3C',
          500: '#D4AF37',
          600: '#C9A227',
          700: '#B8962E',
          800: '#9A7A1F',
          900: '#7D6212',
          950: '#5C470A',
        },
        cream: {
          50:  '#FFFEF9',
          100: '#FDFAF2',
          200: '#FAF3E0',
          300: '#F5E6C8',
          400: '#EDD4A3',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        script: ['"Great Vibes"', 'cursive'],
        body: ['"Cormorant Garamond"', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [require('daisyui')],
};
