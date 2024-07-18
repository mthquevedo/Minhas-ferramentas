/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      height: {
        "10v": "10dvh",
        "20v": "20dvh",
        "30v": "30dvh",
        "35v": "35dvh",
        "40v": "40dvh",
        "50v": "50dvh",
        "60v": "60dvh",
        "70v": "70dvh",
        "80v": "80dvh",
        "90v": "90dvh",
        "100v": "100dvh",
      },
      width: {
        "10v": "10dvw",
        "15v": "15dvw",
        "20v": "20dvw",
        "30v": "30dvw",
        "35v": "35dvw",
        "40v": "40dvw",
        "50v": "50dvw",
        "60v": "60dvw",
        "70v": "70dvw",
        "80v": "80dvw",
        "85v": "85dvw",
        "90v": "90dvw",
        "100v": "100dvw",
      },
    },
  },
  plugins: [],
}