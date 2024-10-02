/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors:{
        "lilaPrincipal":"#6A0574",
        "azulFondo":"#25283D",
        "carne":"#D4A5A5"
      },
      fontSize: {
        'responsive-h1': ['clamp(1.5em, 7vw, 5em)'],
        'responsive-h4': ['clamp(0.5em, 3vw, 1.5em)']
      },
      width:{
        'responsive-width': ['clamp(12em, 60vw, 40em)'],
        'responsive-first-button-width': ['clamp(7em, 20vw, 9em)']
      },
      height:{
        'responsive-height-first-image': ['clamp(10em, 40vw, 30em)'],
        'responsive-first-button-height': ['clamp(2.5em, 10vw, 3em)']
      },
      screens:{
        'custom-flex-wrap-first-title':{max:'1309px'}
      }
      
    },
  },
  plugins: [],
}

