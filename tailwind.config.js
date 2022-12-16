/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}", 
    "./public/index.html", 
    "node_modules/daisyui/dist/**/*.js", 
    "node_modules/react-daisyui/dist/**/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ["dark"]
  }
}
