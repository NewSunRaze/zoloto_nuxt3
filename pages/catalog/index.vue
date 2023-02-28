<template>
	<div class="container">
		<catalog-card
			v-for="product in products"
			:key="product.id"
			:card="product"
			@click="openProduct(product)"
		/>
	</div>
</template>
<script>
import CatalogCard from "~/components/CatalogCard.vue";


export default {
	name: 'IndexPage',
	components: [CatalogCard],
	data() {
		return {
			catalogResponse: null,
			products: null
		}
	},
	methods: {
		openProduct(product) {
			console.log(product)
			this.$router.addRoute({ path: product.detailPageUrl, name: 'custom', params: { product },  component: () => import('./product.vue')})
			this.$router.push({ name: 'custom' })
		}
	},
	async created(){
		console.log(this.$route)
	}
}
</script>
<style>
.container {
	display: flex;
	justify-content: center;
}
</style>