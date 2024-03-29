export default {
  /*
  ** Headers of the page
  */
  head: {
    title: 'dewib',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Dewib website' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat:200,400,800,900&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Poppins:400,600&display=swap' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {},
  plugins: [
    { src: '~/plugins/carousel.js', mode: 'client' }
  ],
  buildModules: [
    '@nuxtjs/tailwindcss'
  ],
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/router',
    'nuxt-i18n',
    'vue-scrollto/nuxt',
    ['nuxt-fontawesome', {
      imports: [
        {
          set: '@fortawesome/free-solid-svg-icons',
          icons: ['faBars', 'faCode', 'faCircle', 'faLocationArrow', 'faEnvelope', 'faPhone', 'faLayerGroup', 'faChalkboardTeacher', 'faTasks', 'faCaretDown']
        },
        {
          set: '@fortawesome/free-brands-svg-icons',
          icons: ['faTwitter', 'faGithub', 'faLinkedinIn']
        }
      ]
    }]
  ],
  tailwindcss: {
    configPath: '~/config/tailwind.js',
    cssPath: '~/assets/main.css'
  },
  purgeCSS: {
    whitelist: [
      'dw-animated-headline-animation-enter-active',
      'dw-animated-headline-animation-leave-active',
      'dw-animated-headline-animation-enter',
      'dw-animated-headline-animation-leave-to'
    ],
    whitelistPatterns: [/(^|\.)fa-/, /-fa($|\.)/]
  },
  i18n: {
    defaultLocale: 'en',
    locales: [{
      code: 'fr',
      file: 'fr.js',
      name: 'Français'
    }, {
      code: 'en',
      file: 'en.js'
    }],
    langDir: 'static/i18n/',
    lazy: true,
    vueI18n: {
      fallbackLocale: 'en'
    }
  },
  pwa: {
    name: 'Dewib',
    meta: {
      title: 'Dewib',
      author: 'Dewib'
    },
    manifest: {
      name: 'Dewib webste',
      short_name: 'Dewib',
      lang: 'fr'
    }
  }
}
