module.exports = {
  purge: {
    content: ['./src/**/*.css', './src/**/*.html'],
    transform: {
      css: (content) => {
        console.log({content})
        return `.md:order-last{order:9999}`;
      }
    }
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
  corePlugins: {
  preflight: false,
}
}