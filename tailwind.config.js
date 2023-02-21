/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      'lBlack':'#171a29'
    },
    backgroundImage: {
      'logo': "url('/src/asset/logo.jpeg')",

    }
  },
  plugins: [
    
  ],
}
