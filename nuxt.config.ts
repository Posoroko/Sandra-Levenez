// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    runtimeConfig: {
        public: {
            siteUrl: 'https://milesperformance.com',
            siteTitle: 'Miles Performance | Sandra Levenez, coach sportif et conférencière',
            siteDescription: 'Site de Sandra Levenez, sportive de haut-niveau, offre un service de coaching sportif et anime des conférences.',
            language: 'fr-FR',
            test: 'eric.com'
        }
    },
    app: {
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            title: '%siteTitle',
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
            meta: [
                {
                    name: 'viewport',
                    content: 'width=device-width, initial-scale=1',
                },
                {
                    name: 'description',
                    content: '%siteDescription',
                },
                {
                    name: 'og:title',
                    content: '%siteTitle',
                },
                {
                    name: 'og:description',
                    content: '%siteDescription',
                },
                {
                    name: 'og:image',
                    content: '/favicon/android-chrome-512x512.png',
                },
                {
                    name: 'og:url',
                    content: '%test',
                },
                {
                    name: 'og:site_name',
                    content: '%siteTitle',
                },
                {
                    name: 'og:locale',
                    content: 'fr_FR',
                },
                {
                    name: 'og:type',
                    content: 'website',
                },
                {
                    name: 'twitter:card',
                    content: 'summary_large_image',
                },
                {
                    name: 'twitter:site',
                    content: '@slevenez',
                },
                {
                    name: 'twitter:creator',
                    content: '@slevenez',
                },
                {
                    name: 'twitter:title',
                    content: '%siteTitle',
                },
                {
                    name: 'twitter:description',
                    content: '%siteDescription',
                },
                {
                    name: 'twitter:image',
                    content: '/favicon/android-chrome-512x512.png',
                }
            ]
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
    
    routeRules: {
        // for all routes to be indexed by search engines
        '/*': { index: true },
    }
})
