/** @type {import('tailwindcss').Config} */
module.exports = {
<<<<<<< Updated upstream
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
=======
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
>>>>>>> Stashed changes
  theme: {
    extend: {
      fontFamily: {
        robotoCondensed: ["var(--font-roboto-condensed)", "sans-serif"],
        bebasNeue: ["var(--font-bebas-neue)", "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
