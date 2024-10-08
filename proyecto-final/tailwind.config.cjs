/** @type {import('tailwindcss').Config} */
module.exports = {

  content: ["./index.html", "./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        'julius': ['"Julius Sans One"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}