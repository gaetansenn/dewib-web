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
    },
    extend: {
      colors: {
        'grey-basic': '#f7f7f7',
        'grey-2': '#f4f4f4',
        'grey-3': '#ffffff',
        'grey-4': '#757575',
        'grey-5': '#748182',
        'grey-6': '#888',
        'black-1': '#1c1c1c'
      }
    }
  },
  variants: {},
  plugins: [
    require('../components/tailwind/plugins/app-container')()
  ]
}
