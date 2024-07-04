// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/styles/theme.css'],
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-aos',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt'
  ],
  devtools: { enabled: true },
  devServer: {
    port: 4000
  }
  // pinia: {
  //   storesDirs: ['~/stores/**', '#/stores/**', '@/stores/**']
  // }
});
