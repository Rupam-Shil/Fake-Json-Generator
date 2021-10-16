<template>
	<div class="result-modal">
		<div class="main-modal">
			<h1>Your Fake JSON</h1>
			<div class="main-modal-json">{{ store.state.finalJson }}</div>
			<div class="btns">
				<button class="ctc" @click="copyToClipboard" ref="clipboardBtnText">
					Copy To Clipboard
				</button>
				<button class="ctc" @click="downloadFile">Download</button>
				<button class="ctc" @click="closeModal">Cancel</button>
			</div>
		</div>
	</div>
</template>

<script setup>
import { useStore } from 'vuex';
import useClipboard from 'vue-clipboard3';
import { ref } from 'vue';

const { toClipboard } = useClipboard();
const store = useStore();
const clipboardBtnText = ref('');

const copyToClipboard = async () => {
	try {
		await toClipboard(store.state.finalJson);
		clipboardBtnText.value.innerText = 'Copied!!';
	} catch (e) {
		console.error(e);
	}
};

const downloadFile = () => {
	const content = store.state.finalJson;
	const newBlob = new Blob([content], { type: 'application/json' });
	const link = document.createElement('a');
	link.href = URL.createObjectURL(newBlob);
	link.download = 'example';
	link.click();
	URL.revokeObjectURL(link.href);
};

const closeModal = () => {
	clipboardBtnText.value.innerText = 'Copy To Clipboard';

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
			overflow-y: scroll;
			&::-webkit-scrollbar {
				display: none;
			}
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
@media only screen and (max-width: 600px) {
	.result-modal {
		.main-modal {
			width: 100vw;
			.btns {
				flex-direction: column;
				margin-top: 1rem;
				gap: 1rem;
			}
		}
	}
}
</style>
