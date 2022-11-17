/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        CircularMedium: "Circular Medium",
        Montserrat: "Montserrat",
        FredokaOne: "Fredoka One",
      },
      animation: {
        fadeIn: "fadeIn 1.5s ease-in forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "50%": { opacity: 0.2 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
  variants: {
    animation: ["motion-safe"],
  },
};
