import catalogResponse from "~/app/mocData/catalog-response";

const request = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve(catalogResponse)
    }, 500)
})
export default defineNuxtRouteMiddleware(async (to, from) => {
    const data = await useFetch('/api/mountains/everest', { pick: ['title', 'description'] })
    console.log('data', data)

    console.log('middlewaer init')
    const res = await request
    const router = useRouter()
    if(res?.url){
        router.addRoute({ path: res.url, name: 'test',  component: () => import('../pages/catalog/index.vue')})
        router.push({ name: 'test' })
    } else{

    }
});