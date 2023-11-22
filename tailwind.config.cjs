/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
       
        'footer-texture': "url('/img/footer-texture.png')",
      }
    },
  },
  plugins: [],
}
