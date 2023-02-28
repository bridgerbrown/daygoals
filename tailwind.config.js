/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      margin: {
          '5.25': '1.4rem',
      }
    },
    fontFamily: {
      Gelica: ['gelica', 'sans-serif'],
    },
  },
  plugins: [],
}
