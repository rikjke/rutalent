module.exports = {
  module: {
   rules: [
     {
       test: /\.scss$/,
       use: [
         'vue-style-loader',
         'css-loader',
         {
           loader: 'sass-loader',
           options: {
             indentedSyntax: true,
             sassOptions: {
               indentedSyntax: true
             }
           }
         }
       ]
     }
   ]
 }   
}
export default {
  router: {
    extendRoutes(routes, resolve) {
      routes.find((r) => r.name === 'talent').path = '/talents/:talentURL'
      routes.find((r) => r.name === 'talent').props = true
    },
  },
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'talents',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    '@nuxt/components'

  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    [
      'nuxt-fontawesome', {
        imports: [
         {
           set: '@fortawesome/free-solid-svg-icons',
           icons: ['fas']
         },
         {
           set:'@fortawesome/free-brands-svg-icons',
           icons: ['fab']
         }
       ]
      }
    ],
    ['nuxt-lazy-load', {
      defaultImage: '/talents.png',
      directiveOnly: true
    }] ],
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extend(config, { isDev, isClient }) {
      config.resolve.alias["vue"] = "vue/dist/vue.common";
    }
  }
}
