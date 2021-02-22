const DEBUG = process.env.NODE_ENV !== 'production'
const APP_NAME = 'Nuxify'
const APP_DESCRIPTION = "Writing Software Like It's Ours"
const APP_URL = 'http://localhost:3000'

const API_URL = DEBUG
  ? 'https://jsonplaceholder.typicode.com'
  : 'https://jsonplaceholder.typicode.com'

export default {
  target: 'static',
  ssr: true,
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s - ' + APP_NAME,
    title: APP_NAME || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: APP_DESCRIPTION || '',
      },
      // OG Tag setup
      // https://vue-meta.nuxtjs.org/api/#meta
      {
        property: 'og:type',
        content: 'website',
        vmid: 'og:type',
      },
      {
        property: 'og:title',
        content: APP_NAME,
        vmid: 'og:title',
      },
      {
        property: 'og:description',
        content: APP_DESCRIPTION,
        vmid: 'og:description',
      },
      {
        property: 'og:site_name',
        content: APP_URL,
        vmid: 'og:site_name',
      },
      {
        property: 'og:url',
        content: APP_URL,
        vmid: 'og:url',
      },
      {
        property: 'og:image',
        content: APP_URL + '/icon.png',
        vmid: 'og:image',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Poppins&display=swap',
      },
    ],
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
  plugins: [
    { src: '~/plugins/repository' },
    { src: '~/plugins/components/vue-slick-carousel' },
    { src: '~/plugins/components/icons' },
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxt/typescript-build',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    '@nuxtjs/vuetify',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    ['vue-scrollto/nuxt', { duration: 1000 }],
  ],
  /**
   *  PWA module configuration
   *  https://pwa.nuxtjs.org/setup.html
   */
  pwa: {
    meta: {
      title: APP_NAME,
    },
    manifest: {
      name: APP_NAME,
      short_name: APP_NAME,
      description: APP_DESCRIPTION,
      start_url: APP_URL,
      lang: 'en',
    },
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: API_URL,
    debug: DEBUG,
  },
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    optionsPath: './vuetify.options.js',
  },
}
