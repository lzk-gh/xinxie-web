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
  runtimeConfig: {
    public: {
      API_BASE_DEV: 'http://localhost:4000',
      API_BASE_PROD: 'https://api.example.com/v1'
    }
  },
  tailwindcss: {
    configPath: './tailwind.config.ts',
  },
  devtools: { enabled: true },
  devServer: {
    port: 3000
  },
  vite: {
    ssr: {
      noExternal: ['naive-ui', 'vueuc', 'date-fns']
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
