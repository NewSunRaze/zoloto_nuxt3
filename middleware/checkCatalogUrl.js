import { mainStore } from "~/store/store";
import { createError } from "#app";

export default defineNuxtRouteMiddleware(async (to, from) => {
    const store = mainStore()
    const router = useRouter()

    if(to.fullPath === '/'){
        return
    }

    let response = await fetch(`https://web-7768.symfony.zoloto585.ru/api${to.fullPath}`)
    if(response.status === 404){
        throw createError({ statusCode: 404, statusMessage: 'Page Not Found' })
    }
    response = await response.json()
    console.log(response)

    if(!response?.url){
        return
    }
    store.setCatalogData(response.products)

    if(response.layout === 'catalog'){
        router.addRoute({ path: response.url, name: 'newPage', component: () => import('../pages/catalog/index.vue')})
    }
    if(response.layout === 'product') {
        router.addRoute({ path: response.url, name: 'newPage', component: () => import('../pages/catalog/product.vue')})
    }
    router.push({ name: 'newPage' })
});