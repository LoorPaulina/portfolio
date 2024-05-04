/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "slidebar": "#171B26",
        "text-slidebar": "white",
        "baseColor": "#c5ceae",
      },
      backgroundImage: {
        'base-back': "url('/src/images/back-base.jpg')"
      }
    },
  },
  plugins: [],
}

