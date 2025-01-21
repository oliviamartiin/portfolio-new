/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        orange1: "#FF8A00",
        orange2: "#DF7C35",
        orange3: "#C2631E",
        orange4: "#B8540B",
        blue_rectangle: "#78B3D9",
      },
        fontFamily: {
          body:["JetBrains Mono"]
        },
        animation: {
          float: "float 5s ease-in-out infinite",
          slideInLeft: "slideInLeft 3s ease-out",
          slideInRight: "slideInRight 3s ease-out",
        },
        keyframes: {
          float: {
            '0%': { transform: 'translateX(0)' },
            '50%': { transform: 'translateX(-20px)' },
            '100%': { transform: 'translateX(0)' },
          },
          slideInLeft: {
            '0%': { transform: 'translateX(-100%)', opacity: '0' },
            '100%': { transform: 'translateX(0)', opacity: '1' },
          },
          slideInRight: {
            '0%': { transform: 'translateX(100%)', opacity: '0' },
            '100%': { transform: 'translateX(0)', opacity: '1' },
          },

      },
    },
  },
  plugins: [],
}

