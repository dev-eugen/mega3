export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: "universal",

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "Mega3",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "This is mega3 shop best of Ukraine" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    '@nuxtjs/composition-api'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/axios'
  ],

  axios: {
    baseURL: 'https://api.mega3.uk/v1/'
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {}
};
