<template>
	<div>
		<div class="container">
			<Navbar />
			<div class="card-section">
				<Card v-for="(card, index) in cards" :key="index" :card="card" />
			</div>
		</div>
	</div>
</template>

<script setup>
import Navbar from './components/NavBar.vue';
import Card from './components/Card.vue';
import { ref } from 'vue';
import { allCards } from './composables/allJsonData';

//data
const cards = ref(allCards);
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800,900&display=swap');
*,
*::before,
*::after {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

:root {
	--bg-color: #f6f7f7;
	--text-black: #000000;
	--icon-grey: #7e7e7e;
	--box-shadow-card: 0px 4px 10px #e5e5e5;
	--box-shadow-button: 0px 4px 4px rgba(0, 0, 0, 0.25);
	--white: #fff;
}
body {
	font-family: 'Poppins', sans-serif;
	background: var(--bg-color);
	width: 100vw;
	min-height: 100vh;
	overflow-x: hidden;
	// padding: 1rem;
}
.container {
	max-width: 1400px;
	margin: 0 auto;
	padding: 1rem;
	.card-section {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
		gap: 2rem;
		row-gap: 4rem;
		margin-bottom: 2rem;
	}
}
</style>
