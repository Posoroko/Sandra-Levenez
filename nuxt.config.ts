// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            title: 'Miles Performance | Sandra Levenez, coach sportif et conférencière',
            htmlAttrs: {
                lang: 'fr'
            },
            link: [
                {
                    rel: 'icon',
                    type: 'image/png',
                    href: '/favicon/favicon-32x32.png',
                },
                {
                    rel: 'apple-touch-icon',
                    sizes: '180x180',
                    href: '/favicon/apple-touch-icon.png',
                },
                {
                    rel: 'icon',
                    type: 'image/png',
                    sizes: '32x32',
                    href: '/favicon/favicon-32x32.png',
                },
                {
                    rel: 'icon',
                    type: 'image/png',
                    sizes: '16x16',
                    href: '/favicon/favicon-16x16.png',
                },
                {
                    rel: "manifest",
                    href: "/favicon/site.webmanifest"
                },
                {
                    rel: "shortcut icon",
                    href: "/favicon/favicon.ico"
                }
            ],
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
            siteName: 'Miles Performance | Sandra Levenez, coach sportif et conférencière',
            siteDescription: 'Site de Sandra Levenez, sportive de haut-niveau, offre un service de coaching sportif et anime des conférences.',
            language: 'fr-FR',
        }
    },
    routeRules: {
        // for all routes to be indexed by search engines
        '/*': { index: true },
    }
})
