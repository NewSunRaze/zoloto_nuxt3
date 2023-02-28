export default defineNuxtRouteMiddleware(async (to, from) => {
    if(to.fullPath === '/'){
        return
    }
    const router = useRouter()
    let response = await fetch(`https://web-7768.symfony.zoloto585.ru/api${to.fullPath}`)
    response = await response.json()
    console.log(response.url)

    if(response?.url){
        const pageComponent = import('../pages/catalog/index.vue')

        router.addRoute({ path: response.url, name: 'newPage', component: () => pageComponent})
        router.push({ name: 'newPage' })
    }
});