// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    // Env vars
    runtimeConfig: {
        // The private keys which are only available server-side
        apiSecret: '123',
        // Keys within public are also exposed client-side
        public: {
          apiBase: '/api'
        }
    },

    vite: {
      css: {
        preprocessorOptions: {
          scss: {
            additionalData: '@use "@/assets/main.scss" as *;'
          }
        }
      }
    }
})
