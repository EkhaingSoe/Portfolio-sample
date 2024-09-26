/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        openSans: ['Open Sans', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        playwrite: ['Playwrite US Trad', 'cursive'],
      },
      colors: {
        lightGreen: '#9fbe9c', // Single custom color
      },
    },
  },
  plugins: [],
}