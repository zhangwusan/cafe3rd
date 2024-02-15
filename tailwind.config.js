/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'nav-color' : '#eccdaa'
      },
      fontSize: {
        'degree-text' : '0.7rem'
      },
      backgroundImage : {
        'coffee1' : "url('./assets/00_DLTH22_Blog_1200x800_HeroThumbnail_DovetailCoffee.jpg')",
        'coffee2' : "url('./assets/coffee2.jpg')"
      }
    },
  },
  plugins: [],
}

