<template>
	<nav>
		<h1 class="header">Fake json generator</h1>
		<Getbutton />
	</nav>
</template>

<script setup>
import Getbutton from './GetButton.vue';
</script>

<style lang="scss" scoped>
nav {
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 3rem;
}
h1.header {
	font-size: 1.4rem;
	font-weight: 600;
	text-transform: uppercase;
}
</style>
