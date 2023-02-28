<template>
	<nuxt-link :to="{ path: 'catalog/yuvelirnye_izdeliya/kolca/size-17/?sort=sort' }">go to catalog</nuxt-link>
</template>
<script setup>
definePageMeta({
	middleware: 'check-catalog-url',
})
</script>