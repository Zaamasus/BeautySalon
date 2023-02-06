/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Poppins', 'sans-serif'],
      'serif': ['DM sans', 'sans-serif'],
      'News': ['News Cycle', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}