/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        mubu: ["Dancing Script", "cursive"],
        Rampart: ["Rampart One", "cursive"],
        Head: ["Quattrocento Sans", "sans-serif"],
        org: ["Playfair Display", "serif"],
        dj: ["Dancing Script", "cursive"],
        Numbers: ["Gideon Roman", "serif"]
      },
      backgroundImage: {
        one: "url('/src/Assets/Images/bennermodels/8.jpg')",
        ring: "url('/src/Assets/Images/bennermodels/7.jpg')",
        four: "url('/src/Assets/Images/bennermodels/4.jpg')",
        five: "url('/src/Assets/Images/bennermodels/5.jpg')"
      }
    }
  },
  plugins: []
};
