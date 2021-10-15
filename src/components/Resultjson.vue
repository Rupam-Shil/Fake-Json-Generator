<template>
	<div class="result-modal">
		<div class="main-modal">
			<h1>Your Fake JSON</h1>
			<div class="main-modal-json"></div>
			<div class="btns">
				<button class="ctc">Copy To Clipboard</button>
				<button class="ctc" @click="closeModal">Cancel</button>
			</div>
		</div>
	</div>
</template>

<script setup>
import { useStore } from 'vuex';

const store = useStore();

const closeModal = () => {
	store.commit('isJsonResult', false);
};
</script>

<style lang="scss" scoped>
.result-modal {
	position: fixed;
	top: 0;
	right: 0;
	width: 100vw;
	height: 100vh;
	background: rgba(0, 0, 0, 0.4);
	z-index: 100000;
	.main-modal {
		position: absolute;
		width: 50vw;
		height: 100%;
		right: 0;
		top: 0;
		background: var(--modal-color);
		border-radius: em 0 0 1rem;
		box-shadow: -4px 0 25px 0 rgba(0, 0, 0, 0.4);
		padding: 1rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		&-json {
			width: 90%;
			height: 70vh;
			background: var(--json-modal-color);
			border-radius: 1rem;
			border: 2px solid var(--white);
			padding: 1rem;
			color: var(--white);
		}
		h1 {
			color: #fff;
			text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
		}
		.btns {
			display: flex;
			align-items: center;
			justify-content: space-between;
			gap: 2rem;
			.ctc {
				outline: none;
				border: none;
				cursor: pointer;
				width: 10rem;
				height: 3rem;
				font-weight: 600;
				box-shadow: var(--box-shadow-button);
				transition: 0.2s ease-in-out;
				&:active {
					transform: translateY(4px);
					box-shadow: none;
				}
			}
		}
	}
}
</style>
