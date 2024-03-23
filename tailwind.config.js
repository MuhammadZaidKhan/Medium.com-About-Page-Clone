/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Sohne', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        background: "#242424",
        lightwhite: "#FFFFFF33"
      }
    },
  },
  plugins: [],
}