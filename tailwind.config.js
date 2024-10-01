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
      }
      
    },
  },
  plugins: [],
}

