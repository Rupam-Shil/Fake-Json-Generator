<template>
	<div>
		<button>Get Some JSON!</button>
	</div>
</template>

<script setup></script>

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
