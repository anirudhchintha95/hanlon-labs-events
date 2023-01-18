/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'p-1': '#0A2647',
        'p-2': '#144272',
        'p-3': '#205295',
        'p-4': '#2C74B3',
      },
    },
  },
  plugins: [],
}
