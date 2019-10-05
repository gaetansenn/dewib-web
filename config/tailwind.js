/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    fontFamily: {
      heading: ['Montserrat', 'sans-serif'],
      body: ['Poppins', 'sans-serif']
    },
    screensMaxWidth: {
      'xxs': '100%',
      'sm': '668px',
      'md': '758px',
      'lg': '972px',
      'xl': '1100px',
      'xxl': '1280px'
    },
    screens: {
      'xxs': '360px',
      'xs': '576px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      'xxl': '1920px'
    }
  },
  variants: {},
  plugins: [
    require('../components/tailwind/plugins/app-container')()
  ]
}
