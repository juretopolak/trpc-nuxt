// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  build: {
    transpile: ['trpc-nuxt']
  },
  devtools: { enabled: true },
  nitro: {
    preset: "cloudflare-pages",
  }
})
