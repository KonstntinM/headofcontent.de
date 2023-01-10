export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Head of Content',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'An Berichterstattung zu aktueller Politik mangelt es nicht im Internet. Hunderte Nachrichtenseiten kämpfen mit YouTube-Videos und Blogs um die Aufmerksamkeit der Nutzer:innen. Doch eine Sache hat uns bisher gefehlt: Die Perspektive junger Menschen. Wir sind hier, um das zu ändern!' },
      { lang: "de" }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: "https://analytics.headofcontent.de/js/plausible.js", 'data-domain': "headofcontent.de", defer: true , async: true}

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
    'nuxt2-strapi4',
    '@nuxtjs/markdownit',
    '@nuxt/image'
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
