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
import { mainStore } from '~/store/store'

const store = mainStore()
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
			this.$router.addRoute({ path: product.url, name: 'productPage', params: { url: product.url },  component: () => import('./product.vue')})
			this.$router.push({ name: 'productPage' })
		}
	},
	created(){
		this.products = store.catalogData
	}
}
</script>
<style>
.container {
	display: flex;
	flex-direction: column;
	align-items: center;
}
</style>