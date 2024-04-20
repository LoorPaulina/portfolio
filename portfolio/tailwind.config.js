/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "slidebar": "#2e1e45",
        "text-slidebar": "#ccbca1",
        "baseColor": "#612a52",
      }
    },
  },
  plugins: [],
}

