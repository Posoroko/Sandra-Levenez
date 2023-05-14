// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            title: 'Sandra Levenez, coach sportif et conférencière',
        }
    },
    css: [
        '@/assets/css/reset.css',
        '@/assets/css/main.css',
        '@/assets/css/utility.css',
        '@/assets/css/colors.css',
        '@/assets/css/fonts.css',
        '@/assets/css/animations.css',
        '@/assets/css/pages.css',
        '@/assets/css/modals.css',
    ],
    ssr: true,
    extends: [
        'nuxt-seo-kit'
    ],
    runtimeConfig: {
        public: {
            siteUrl: 'https://sandralevenez.netlify.app',
            siteName: 'Sandra Levenez, coach sportif et conférencière',
            siteDescription: 'Site de Sandra Levenez, coaching et conférences',
            language: 'fr-FR',
        }
    },
    routeRules: {
        // for all routes to be indexed by search engines
        '/*': { index: true },
    }
})
