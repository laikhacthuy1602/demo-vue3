module.exports = {
  purge: [
    './src/**/*.{html, js, vue, ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  content: [
    "./node_modules/flowbite/**/*.js",
    "./src/**/*.vue"
  ],
  plugins: [
    require('flowbite/plugin')
  ],
}
