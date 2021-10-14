<template>
	<div class="card">
		<div class="card-icon">
			<div class="card-icon-main">
				<i class="fas " :class="card.icon"></i>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref, defineProps, toRefs } from 'vue';

const props = defineProps({
	card: {},
});

const { card } = toRefs(props);
</script>

<style lang="scss" scoped>
.card {
	height: 15rem;
	background: var(--white);
	box-shadow: var(--box-shadow-card);
	border-radius: 1rem;
	position: relative;
	isolation: isolate;
	&-icon {
		position: absolute;
		width: 80px;
		aspect-ratio: 1;
		border-radius: 50%;
		background: var(--bg-color);
		top: 0;
		left: 0;
		transform: translate(50%, -50%);
		box-shadow: inset 0 -4px 10px rgba(0, 0, 0, 0.05);
		&-main {
			background: var(--white);
			width: 60px;
			aspect-ratio: 1;
			border-radius: 50%;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			box-shadow: 5px 5px 10px #d9d9d9, -5px -5px 50px rgb(255, 255, 255);
			display: grid;
			place-content: center;
			i {
				font-size: 1.5rem;
				color: var(--icon-grey);
			}
		}
	}
}
</style>
