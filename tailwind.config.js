/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        textColor: '#212529',
        primaryColor: '#FFA500',
      },
      fontFamily: {
        Barlow: ['Barlow', 'sans-serif']
      }
    },
  },
  plugins: [require("daisyui")],
}

