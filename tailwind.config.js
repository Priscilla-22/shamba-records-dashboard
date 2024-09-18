/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        'custom-smokeWhite': '#f4f3ef',
        'custom-brown': '#66615b',
        'custom-orange': '#e37e57',
        'custom-white': '#ffffffda',
        'custom-green': '#1B872F',
      },
      fontFamily: {
        lemon: ['Lemon', 'serif'],
      },
      letterSpacing: {
        wider: '0.05em',
        widest: '0.1em',
      },
    },
  },
  plugins: [],
};

