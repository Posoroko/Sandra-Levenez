// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-01-04',
    runtimeConfig: {
        public: {
            siteUrl: 'https://milesperformance.com',
            siteName: 'M.I.L.E.S. Performance | Sandra Lévénez, coaching et conférences',
            siteDescription: "Sandra Lévénez, double championne du monde de duathlon et cycliste pro.  Coaching par planification et suivi, conférences et partage d'expériences.",
            language: 'fr-FR',
            titleSeparator: '|'
        }
    },
    app: {
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            titleTemplate: '%pageTitle %titleSeparator %siteName',
            title: '%siteName',
            htmlAttrs: {
                lang: 'fr'
            },
            link: [
                { rel: 'icon', type: 'image/png', href: '/favicon/favicon-32x32.png', },
                { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon/apple-touch-icon.png', },
                { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon/favicon-32x32.png', },
                { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon/favicon-16x16.png', },
                { rel: "manifest", href: "/favicon/site.webmanifest" },
                { rel: "shortcut icon", href: "/favicon/favicon.ico" },
                { rel: "canonical", href:"https://milesperformance.com/" }
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
                    content: '%siteName',
                },
                {
                    name: 'og:description',
                    content: '%siteDescription',
                },
                {
                    name: 'og:image',
                    content: '/favicon/miles_og_image_1200x630.png',
                },
                {
                    name: 'og:url',
                    content: '%siteUrl',
                },
                {
                    name: 'og:site_name',
                    content: '%siteName',
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
                    content: '%siteName',
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
    modules: [
        '@nuxtjs/seo'
    ],
    site: {
        url: 'https://milesperformance.com',
        name: 'M.I.L.E.S. Performance | Sandra Lévénez, coaching et conférences',
        description: "Sandra Lévénez, double championne du monde de duathlon et cycliste pro.  Coaching par planification et suivi, conférences et partage d'expériences.",
        defaultLocale: 'fr',
    },
    
    routeRules: {
        // for all routes to be indexed by search engines
        '/*': { index: true },
    }
})
