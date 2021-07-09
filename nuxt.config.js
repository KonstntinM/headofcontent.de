export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Head of Content',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Webseite der unabhänigen Jugendredaktion "Head of Content" aus Berlin' },
      { lang: "de" }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: "https://plausible.io/js/plausible.js", 'data-domain': "headofcontent.de", defer: true }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/vue-loading-skeleton.js'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    //'@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@aceforth/nuxt-optimized-images',
    '@nuxtjs/pwa'
  ],

  strapi: {
    url: "https://cms.headofcontent.de",
    entities: [
      'Beitrags',
      'Videos'
    ]
  },

  markdownit: {
    preset: 'default',
    runtime: true,
    linkify: true,
    breaks: true,
    use: [
      'markdown-it-div',
      'markdown-it-attrs'
    ]
  },

  mail: {
    message: {
      to: 'kontakt@headofcontent.de',
    },
    smtp: {
      host: "mail.your-server.de",
      port: 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD
      }
    },
  },

  hcaptcha: {
    siteKey: process.env.HCAPTCHA_SITEKEY
  },

  optimizedImages: {
    optimizeImages: true
  },

  pwa: {
    meta: {
      name: 'Head of Content',
      author: 'Head of Content',
      lang: 'de',
      ogHost: 'headofcontent.de'
    },
    manifest: {
      name: 'Head of Content',
      lang: 'de',
      useWebmanifestExtension: true
    }
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/strapi',
    '@nuxtjs/markdownit',
    'nuxt-mail',
    'hcaptcha-nuxt'
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
