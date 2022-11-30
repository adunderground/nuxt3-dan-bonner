// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  // ssr: false,
  meta: {
    link: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Bodoni+Moda&family=Crimson+Pro&family=Open+Sans&display=swap",
      },
    ],
  },
  // modules: [['@nuxtjs/axios', { proxyHeaders: false }], '@pinia/nuxt'],
  modules: ["@pinia/nuxt"],
  runtimeConfig: {
    airtableToken: process.env.AIRTABLE_API_TOKEN,

    public: {
      airtableURL: process.env.AIRTABLE_BASE_URL,
    },
  },
});
