export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Dashboard',
    htmlAttrs: {
      lang: 'ru'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "~/plugins/api-context.js"
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxt/postcss8',
    
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    ['@nuxtjs/router', { keepDefaultRouter: true }]
  ],

  axios: {
    baseURL: 'http://webshop.ru',
    browserBaseURL: 'http://localhost:3000',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },

  loading: { color: "#22C55E" },

  // I started coding here
  serverMiddleware: [
    // { path: "/api", handler: require("body-parser").json() },
    // {
    //   path: "/api",
    //   handler: (req, res, next) => {
    //     const url = require("url");
    //     req.query = url.parse(req.url, true).query;
    //     req.params = { ...req.query, ...req.body };
    //     next();
    //   }
    // },
    { path: "/api", handler: "~/api/index.js" }
  ],
}