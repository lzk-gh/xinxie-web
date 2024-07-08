// https://nuxt.com/docs/api/configuration/nuxt-config
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers';

export default defineNuxtConfig({
  css: ['~/assets/styles/main.css'],
  modules: [
    'nuxtjs-naive-ui',
    '@nuxtjs/tailwindcss',
    'nuxt-aos',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt'
  ],
  devtools: { enabled: true },
  devServer: {
    port: 4000
  },
  vite: {
    ssr: {
      noExternal: ['naive-ui', '@css-render/vue3-ssr', 'vueuc', 'date-fns']
    },
    plugins: [
      { src: '~/plugins/aos.client.ts', mode: 'client' },
      AutoImport({
        imports: [
          {
            'naive-ui': [
              'useDialog',
              'useMessage',
              'useNotification',
              'useLoadingBar'
            ]
          }
        ]
      }),
      Components({
        resolvers: [NaiveUiResolver()]
      })
    ]
  }
});
