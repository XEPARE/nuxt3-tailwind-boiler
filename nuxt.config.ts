// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    // @ts-ignore
    devtools: { enabled: false }, // https://github.com/nuxt/devtools
    css: ['~/assets/css/main.css'],
    modules: [
        ['@nuxtjs/google-fonts', {
            // https://google-fonts.nuxtjs.org/getting-started/setup
            families: {
                Montserrat: [400, 500, 600, 700, 800, 900],
            }
        }]
    ],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    //ssr: true,
    build: {
        transpile: ['@heroicons/vue']
    },
    googleFonts: {
        download: true
    },
})
