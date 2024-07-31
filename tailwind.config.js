/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {},
    fontFamily:{
      avenir:['Avenir Next','sans-serif'],
      helvetica:['Helvetica','sans-serif'],
      inter:['Inter','sans-serif']
    }
  },
  plugins: [],
}

