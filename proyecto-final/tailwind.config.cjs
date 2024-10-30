/** @type {import('tailwindcss').Config} */
module.exports = {

  content: ["./index.html", "./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      screens: {
        'AD': '1150px',
        'Porvosnegro': '600px'
       
      },
      backgroundSize: {
        '200%': '200%',
      },
      keyframes: {
        bounce: {
          '0%, 100%': {
            transform: 'translateY(-20px)',
            textShadow: '0 1px 0 #66a86b, 0 2px 0 #66a86b, 0 3px 0 #66a86b, 0 4px 0 #66a86b, 0 5px 0 #66a86b, 0 6px 0 #66a86b, 0 50px 25px rgba(0, 0, 0, 2)',
          },
        },
        shine: {
          '0%': { backgroundPosition: '200% center' },
          '100%': { backgroundPosition: '0% center' },

          '100%': { 'background-position': '200% center' },
        },
        rotate: {
          '50%': {
            transform: 'translateX(-50%) rotate(180deg)',
          },
          '100%': {
            transform: 'translateX(-50%) rotate(360deg)',
          },
        },
      },
      animation: {
        rotate1: 'rotate 6s linear infinite',
        rotate2: 'rotate 10s linear -5s infinite',
        bounce: 'bounce 0.6s ease-in-out infinite alternate',
        shine: 'shine 10s linear infinite',
      },
      fontFamily: {
        'julius': ['"Julius Sans One"', 'sans-serif'],
      },
      
    },
  },
  plugins: [],
}