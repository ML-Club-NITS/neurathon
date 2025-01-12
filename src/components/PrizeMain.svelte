<script>
	import PrizeCard from './PrizeCard.svelte';
	import diamond from '$lib/assets/diamond.png';

	const prizes = [
		{
			title: 'Best Presentation',
			award: 'Award',
			image: diamond
		},
		{
			title: 'Best Presentation',
			award: 'Award',
			image: diamond
		},
		{
			title: 'Best Presentation',
			award: 'Award',
			image: diamond
		}
	];
</script>

<div class="prize-container my-12 py-8">
	<span
		class="inline-flex w-fit animate-text-gradient text-wrap bg-gradient-to-r from-[#ACACAC] via-[#363636] to-[#ACACAC] bg-[200%_auto] bg-clip-text p-2 text-center text-4xl font-bold text-transparent sm:text-5xl md:text-6xl"
	>
		Prizes
	</span>
	<div class="prize-content">
		{#each prizes as prize}
			<PrizeCard title={prize.title} award={prize.award} image={prize.image} />
		{/each}
	</div>
</div>

<style>
	.prize-container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		row-gap: 30px;
	}
	.prize-content {
		display: flex;
		justify-content: center;
		/* width: 500px; */
		/* height: 100%; */
		gap: 5px;
		margin-top: 20px;
	}
</style>
