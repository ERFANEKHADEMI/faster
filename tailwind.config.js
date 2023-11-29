/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["views/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "red-primary": "#A20209"
      },
      fontFamily: {
        'poppins': ["Poppins"]
      },
      backgroundImage: {
        'bg-splash': "url('/public/assets/bg-splash.png')",
        'bg-main': "url('/public/assets/bg-main.png')"
      },
      animation: {
        "fade-out": "fadeOut 0.6s ease-in-out",
        "fade-in": "fadeIn 0.6s ease-in-out"
      },
      keyframes: {
        fadeOut: {
          '0%': { opacity: "100%" },
          '100%': { opacity: "0%" }
        },
        fadeIn: {
          '0%': { opacity: "0%" },
          '100%': { opacity: "100%" }
        }
      }
    },
  },
  plugins: [],
}

