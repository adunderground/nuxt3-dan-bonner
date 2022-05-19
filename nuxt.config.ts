import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  meta: {
    link: [
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Bodoni+Moda&family=Crimson+Pro&family=Open+Sans&display=swap' },  
    ],
  },
  // buildModules: [
  //   '@vueuse/nuxt'
  // ],
})
