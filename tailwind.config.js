/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        myLime: "#daed49",
        myBlue: "#00bdd4",
        myFooter: "#464646",
        myFooterFont: "#cccccc",
        myListFont: "#b0b0b0",
      },
    },
  },
  plugins: [],
};
