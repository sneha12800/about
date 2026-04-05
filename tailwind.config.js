/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#253386",
          "primary-dark": "#1A286B",
          secondary: "#3E3A36",
          accent: "#FBB03B",
          cream: "#FDF8EE",
          green: "#006837",
        }
      },
      fontFamily: {
        main: ["Outfit", "sans-serif"],
        serif: ["Playfair Display", "serif"],
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}
