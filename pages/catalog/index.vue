<template>
	<p>213</p>
<!--	<div class="container">-->
<!--		<catalog-card-->
<!--			v-for="product in products"-->
<!--			:key="product.id"-->
<!--			:card="product"-->
<!--			@click="openProduct(product.id)"-->
<!--		/>-->
<!--	</div>-->
</template>
<script>
import CatalogCard from "~/components/CatalogCard.vue";
import catalogResponse from "~/app/mocData/catalog-response"

const request = new Promise((resolve)=>{
	setTimeout(()=>{
		resolve(catalogResponse)
	}, 500)
})
export default {
	name: 'IndexPage',
	components: [CatalogCard],
	data() {
		return {
			catalogResponse: null,
			products: null
		}
	},
	middleware(){
		console.log(123)
	},
	methods: {
		openProduct(product) {
			console.log(product)
			this.$router.push({
				name: 'test',
				params: product
			})
		}
	},
	async created() {
		// const res = await request
		// if(!res.url){
		// 	this.$router.push({name: 'error'})
		// }
		// this.$router.push(res.url)
		// this.catalogResponse = res
		// this.products = res.products
	}
}
</script>
<style>
.container {
	display: flex;
	justify-content: center;
}
</style>