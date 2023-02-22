import catalogResponse from "~/app/mocData/catalog-response";

const request = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve(catalogResponse)
    }, 500)
})
export default defineNuxtRouteMiddleware(async (to, from) => {
    const response = await fetch('https://web-7768.symfony.zoloto585.ru/api/catalog/yuvelirnye_izdeliya/kolca/size-17/?sort=sort')
    console.log('middlewaer init')
    const res = await request
    const router = useRouter()
    if(res?.url){
        router.addRoute({ path: res.url, name: 'test',  component: () => import('../pages/catalog/index.vue')})
        router.push({ name: 'test' })
    } else{

    }
});