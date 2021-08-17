const color = require("tailwindcss/colors")


module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      gray: color.gray,
      blue: color.sky,
      yellow: color.amber,
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
