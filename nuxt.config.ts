// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/fonts',
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxtjs/color-mode',
    'nuxt-icon',
    'nuxt-swiper'
  ],
  css: ['~/assets/main.css'],
  colorMode: {
    classSuffix: ''
  },
  swiper: {
    modules: ['autoplay', 'pagination']
  },
  components: [
    {
      path: '~/components/commons',
      pathPrefix: false
    },
    '~/components'
  ],
  fonts: {
    families: [
      { name: 'Poppins', weights: [300, 400, 600] }
    ]
  }
})
