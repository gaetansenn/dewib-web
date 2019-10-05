const map = require('lodash/map')

module.exports = function () {
  return function ({ addComponents, theme }) {
    const screens = theme('screens', {})
    const screensMaxWidth = theme('screensMaxWidth', {})

    const marginConf = {
      marginLeft: 'auto',
      marginRight: 'auto'
    }

    const mediaQueries = map(screens, (width, key) => {
      return {
        [`@media (min-width: ${width})`]: {
          '.app-container': {
            'max-width': screensMaxWidth[key] || width,
            ...marginConf
          }
        }
      }
    })

    addComponents([
      { '.app-container': {
        width: '100%',
        ...marginConf
      }
      },
      ...mediaQueries
    ])
  }
}
