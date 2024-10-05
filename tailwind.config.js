/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        ripple: 'ripple 2s infinite ease-in-out',
        'color-change': 'color-change 2s infinite ease-in-out',
      },
      keyframes: {
        ripple: {
          '0%': { transform: 'scale(1)', boxShadow: 'rgba(0, 0, 0, 0.3) 0px 10px 10px -0px' },
          '50%': { transform: 'scale(1.3)', boxShadow: 'rgba(0, 0, 0, 0.3) 0px 30px 20px -0px' },
          '100%': { transform: 'scale(1)', boxShadow: 'rgba(0, 0, 0, 0.3) 0px 10px 10px -0px' },
        },
        'color-change': {
          '0%': { fill: 'grey' },
          '50%': { fill: 'white' },
          '100%': { fill: 'grey' },
        },

      },
    },
    fontFamily: {
      'exo': ['Exo', 'sans-serif'],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '50px',
        sm: '20px',
        lg: '40px',
        xl: '30px',
        '2xl': '60px',
      },
    },
    extend: {
      colors: {
        oq: '#FFFFFF',
        gren: "#009494",
        qora: "#000000",
        dakr: "#17252a",
      }
    },
  },
  plugins: [],
})