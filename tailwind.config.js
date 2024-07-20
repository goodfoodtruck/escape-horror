/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  safelist: [
    'text-white',
    'text-black'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

