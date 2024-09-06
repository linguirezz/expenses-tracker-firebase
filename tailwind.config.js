/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'open-sans': ['"Open Sans"', 'sans-serif'],
      },
      colors: {
        primary: '#ffffff',
        secondary: '#065ad7',
        fontPrimary: '#353e4c',
        fontSecondary: '#ffffff',
        chartPrimary: '#87c4da',
        chartSecondary: '#e4e0a2',
        fontIncrement: '#86cbb2',
        fontDecrement: '#DC143C',
      }
    },
  },
  plugins: [],
}


