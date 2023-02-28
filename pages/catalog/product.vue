<template>
	<div v-if="productInfo !== null">
		<h1>карточка товара</h1>
		<p>{{ productInfo.name }}</p>
		<p>{{ productInfo.description }}</p>
		<p>ID: {{ productInfo.id }}</p>
	</div>
</template>
<script>
export default {
	data() {
		return {
			productInfo: null,
		}
	},
	async created() {
		let response = await fetch(`https://web-7768.symfony.zoloto585.ru/api${this.$route.href}`)
		response = await response.json()
		this.productInfo = response
	}
}
</script>
