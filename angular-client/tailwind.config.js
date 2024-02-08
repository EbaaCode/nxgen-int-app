/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      lineClamp: {
        8: '8',
      },
      fontFamily: {
        'main': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}