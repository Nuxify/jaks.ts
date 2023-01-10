const DEBUG = process.env.NODE_ENV !== 'production'

export default {
  ssr: true,
  target: 'static',
  server: {
    port: process.env.APP_PORT,
    host: process.env.APP_HOST,
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
        content: process.env.APP_DESCRIPTION || '',
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
        content: process.env.APP_NAME,
        vmid: 'og:title',
      },
      {
        property: 'og:description',
        content: process.env.APP_DESCRIPTION,
        vmid: 'og:description',
      },
      {
        property: 'og:site_name',
        content: process.env.APP_URL,
        vmid: 'og:site_name',
      },
      {
        property: 'og:url',
        content: process.env.APP_URL,
        vmid: 'og:url',
      },
      {
        property: 'og:image',
        content: process.env.APP_URL + '/icon.png',
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
  loading: false,

  loadingIndicator: {
    name: false,
  },
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
    'vue-toastification/nuxt',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    ['vue-scrollto/nuxt', { duration: 1000 }],
  ],
  /**
   * Public runtime configs
   */
  publicRuntimeConfig: {
    appName: process.env.APP_NAME,
  },
  /**
   * Private runtime configs
   */
  privateRuntimeConfig: {},
  /**
   *  PWA module configuration
   *  https://pwa.nuxtjs.org/setup.html
   */
  pwa: {
    meta: {
      title: process.env.APP_NAME,
    },
    manifest: {
      name: process.env.APP_NAME,
      short_name: process.env.APP_NAME,
      description: process.env.APP_DESCRIPTION,
      start_url: process.env.APP_URL,
      lang: 'en',
    },
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: process.env.API_URL,
    debug: DEBUG,
  },
  toast: {
    transition: 'Vue-Toastification__fade',
    maxToasts: 20,
    newestOnTop: true,
    position: 'bottom-left',
    timeout: 5000,
    closeOnClick: true,
    pauseOnFocusLoss: true,
    pauseOnHover: true,
    draggable: false,
    draggablePercent: 0.6,
    showCloseButtonOnHover: true,
    hideProgressBar: true,
    closeButton: 'button',
    icon: true,
    rtl: false,
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
