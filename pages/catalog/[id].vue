<template>
	<h1>карточка товара</h1>
</template>
<script>
export default {
	middleware: ['test'],
	created() {
		console.log(this.$route)
	}
}
</script>
