<script>
	export let open = false;
	import { slide } from 'svelte/transition';

	const handleClick = () => (open = !open);
</script>

<div class="accordion">
	<div class="header">
		<button onclick={handleClick}>
			<div class="text">
				<slot name="head"></slot>
			</div>
			{#if !open}
				<div class="elem-+">+</div>
			{/if}
			{#if open}
				<div class="elem-+">-</div>
			{/if}
		</button>
	</div>

	{#if open}
		<div class="details shadow-lgn rounded-lg bg-gray-900" transition:slide>
			<slot name="details"></slot>
		</div>
	{/if}
</div>

<style>
	div.accordion {
		margin: 0.1rem 0;
		padding: 0.4rem;
	}

	div.header {
		display: flex;
		width: 100%;
	}

	.header button {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		padding: 1rem;
		background-color: rgba(33, 33, 33, 0.518);
		color: white;
		border: none;
		border-radius: 5px;
		cursor: pointer;
	}

	div.header .text {
		flex: 1;
		margin-right: 5px;
	}

	div.details {
		background-color: rgba(33, 33, 33, 0.518);
		margin: 10px;
		padding: 1rem;
		border-top: 1px solid rgb(155, 155, 155, 0.1);
	}
</style>
