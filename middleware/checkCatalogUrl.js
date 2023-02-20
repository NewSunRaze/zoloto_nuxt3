import catalogResponse from "~/app/mocData/catalog-response";

const request = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve(catalogResponse)
    }, 500)
})
export default defineNuxtRouteMiddleware(async (to, from) => {
    const res = await request
    const router = useRouter()
    if(res?.url){
        router.addRoute({ path: res.url, name: 'test',  component: () => import('../pages/catalog/index.vue')})
    }

});