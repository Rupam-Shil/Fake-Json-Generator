<template>
	<div>
		<button @click="sendJson">Get Some JSON!</button>
	</div>
</template>

<script setup>
import Swal from 'sweetalert2';
import { useStore } from 'vuex';
import { ref, computed } from 'vue';
import faker from 'faker';
import beautify from 'json-beautify';
const store = useStore();

const sendJson = async () => {
	const { value } = await Swal.fire({
		title: 'Enter the size of the JSON(Max:100)',
		input: 'range',
		inputLabel: 'JSON Size',
		inputValue: 10,
		inputAttributes: {
			min: 1,
			max: 100,
			step: 1,
		},
		showCancelButton: true,
	});
	if (value) {
		formJson(parseInt(value));
		store.dispatch('makeJsonTrue');
	}
};
const formJson = (value) => {
	const jsonArray = computed(() => store.state.allCheckedValues);
	const tempArray = [];
	for (let i = 0; i < value; i++) {
		const tempJson = {};
		jsonArray.value.forEach((elem) => {
			let tempElem = elem;
			tempElem = tempElem.replace('.', '');
			const [tp1, tp2] = elem.split('.');
			tempJson[tempElem] = faker[tp1][tp2]();
		});

		tempArray.push(tempJson);
	}
	const arrToJson = { ...tempArray };
	store.commit('updatefinalJson', beautify(arrToJson, null, 2, 80));
};
</script>

<style lang="scss" scoped>
button {
	outline: none;
	border: none;
	padding: 1rem 1.5rem;
	border-radius: 0.5rem;
	background: var(--white);
	font-size: 1rem;
	color: var(--icon-grey);
	box-shadow: var(--box-shadow-button);
	cursor: pointer;
	transition: 0.2s ease-in-out;
	&:hover {
		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
	}
	&:active {
		transform: translateY(7px);
		box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.5);
	}
}
</style>
