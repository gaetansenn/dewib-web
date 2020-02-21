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
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient)
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
    }
  },
  plugins: [
    { src: '~/plugins/carousel.js', mode: 'client' }
  ],
  buildModules: [
    '@nuxtjs/tailwindcss'
  ],
  modules: [
    '@nuxtjs/router',
    'nuxt-i18n',
    'vue-scrollto/nuxt',
    ['nuxt-fontawesome', {
      imports: [
        {
          set: '@fortawesome/free-solid-svg-icons',
          icons: ['faBars', 'faCode', 'faCircle', 'faLocationArrow', 'faEnvelope', 'faPhone', 'faLayerGroup', 'faChalkboardTeacher', 'faTasks']
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
  i18n: {
    defaultLocale: 'en',
    locales: [{
      code: 'fr',
      file: 'fr.js'
    }, {
      code: 'en',
      file: 'en.js'
    }],
    langDir: 'static/i18n/',
    lazy: true,
    vueI18n: {
      fallbackLocale: 'en'
    }
  }
}
