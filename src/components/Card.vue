<template>
	<div class="card">
		<div class="card-icon">
			<div class="card-icon-main">
				<i class="fas " :class="card.icon"></i>
			</div>
		</div>
		<div class="card-main">
			<div class="checkbox">
				<input type="checkbox" :value="card.value" v-model="checkboxValues" />
				<span class="checkbox-name">{{ card.name }}</span>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref, defineProps, toRefs, watch } from 'vue';
import { useStore } from 'vuex';

const checkboxValues = ref([]);

const store = useStore();

watch(checkboxValues, (newValue, oldValue) => {
	if (newValue.length > oldValue.length) {
		checkboxValues.value.forEach((val) => {
			if (store.state.allCheckedValues.includes(val)) {
				return;
			} else {
				store.commit('pushToCheckedValues', val);
			}
		});
	} else {
		oldValue.forEach((val) => {
			if (newValue.includes(val)) {
				return;
			} else {
				store.commit('removeFromCheckedValues', val);
			}
		});
	}
});

const props = defineProps({
	card: {},
});

const { card } = toRefs(props);
</script>

<style lang="scss" scoped>
.card {
	min-height: 15rem;
	background: var(--white);
	box-shadow: var(--box-shadow-card);
	border-radius: 1rem;
	position: relative;
	isolation: isolate;
	&-main {
		width: 100%;
		height: 100%;
		padding: 3rem 1rem 1rem;
		border-radius: inherit;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		.checkbox {
			display: flex;
			align-items: center;
			gap: 0.5rem;
			&-name {
				color: var(--icon-grey);
				text-transform: capitalize;
				font-weight: 600;
			}
			input:checked + .checkbox-name {
				color: var(--text-black);
			}
		}
	}
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
				transition: 0.3s ease-in-out;
			}
		}
	}
	&:hover {
		.card-icon {
			&::before {
				position: absolute;
				content: '';
				width: 100%;
				height: 100%;
				border-radius: 50%;
				background-color: #4158d0;
				background-image: linear-gradient(
					43deg,
					#4158d0 0%,
					#c850c0 46%,
					#ffcc70 100%
				);
				animation: backgroundrotate 1s linear infinite;
			}

			&-main {
				box-shadow: none;
			}
		}
		i {
			transform: rotate(-10deg) scale(1.2);
			color: var(--text-black);
		}
	}
}

@keyframes backgroundrotate {
	0% {
		transform: rotate(0deg);
	}

	100% {
		transform: rotate(360deg);
	}
}
</style>
