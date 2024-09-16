/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        'custom-smokeWhite': '#f4f3ef',
        'custom-brown': '#66615b',
        'custom-orange': '#e37e57',
      },
    },
  },
  plugins: [],
};

