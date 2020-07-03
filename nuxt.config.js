require('dotenv').config()

const DEBUG = process.env.NODE_ENV !== 'production'

export default {
  target: 'static',
  mode: 'universal',
  server: {
    port: process.env.APP_PORT,
    host: process.env.APP_HOST
  },
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s - ' + process.env.APP_NAME,
    title: process.env.APP_NAME || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.APP_DESCRIPTION || ''
      },
      // OG Tag setup
      // https://vue-meta.nuxtjs.org/api/#meta
      {
        property: 'og:type',
        content: 'website',
        vmid: 'og:type'
      },
      {
        property: 'og:title',
        content: process.env.APP_NAME,
        vmid: 'og:title'
      },
      {
        property: 'og:description',
        content: process.env.APP_DESCRIPTION,
        vmid: 'og:description'
      },
      {
        property: 'og:site_name',
        content: process.env.APP_URL,
        vmid: 'og:site_name'
      },
      {
        property: 'og:url',
        content: process.env.APP_URL,
        vmid: 'og:url'
      },
      {
        property: 'og:image',
        content: process.env.APP_URL + '/icon.png',
        vmid: 'og:image'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Poppins&display=swap'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['@/assets/css/global.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: '~/plugins/repository' }],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxt/typescript-build',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    '@nuxtjs/vuetify'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv'
  ],
  /**
   *  PWA module configuration
   *  https://pwa.nuxtjs.org/setup.html
   */
  pwa: {
    meta: {
      title: process.env.APP_NAME
    },
    manifest: {
      name: process.env.APP_NAME,
      // eslint-disable-next-line @typescript-eslint/camelcase
      short_name: process.env.APP_NAME,
      description: process.env.APP_DESCRIPTION,
      // eslint-disable-next-line @typescript-eslint/camelcase
      start_url: process.env.APP_URL,
      lang: 'en'
    }
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: DEBUG
      ? process.env.STAGING_API_URL
      : process.env.PRODUCTION_API_URL,
    debug: DEBUG
  },
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    optionsPath: './vuetify.options.js'
  }
}
