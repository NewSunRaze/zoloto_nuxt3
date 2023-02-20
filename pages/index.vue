<template>
	<nuxt-link :to="{ name: 'test' }">go to catalog</nuxt-link>
</template>
<script setup>
definePageMeta({
	middleware: 'check-catalog-url',
})
</script>