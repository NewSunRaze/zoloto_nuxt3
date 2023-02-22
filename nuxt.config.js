export default defineNuxtConfig({
    hooks: {
        'pages:extend' (pages) {
            pages.push({
                name: 'mainPage',
                path: '/:catchall(.*)',
                file: 'D:/zoloto_nuxt3/pages/index.vue',
                children: []
            })
        }
    }
})