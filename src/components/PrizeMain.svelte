<script>
	import PrizeCard from './PrizeCard.svelte';
	import diamond from '$lib/assets/diamond.png';
	import doughnut from '$lib/assets/doughnut.png';
	import drop1 from '$lib/assets/drop1.png';
	import drop2 from '$lib/assets/drop2.png';
	import gal from '$lib/assets/gal.png';
	import gem from '$lib/assets/gem.png';
	
	import prizes from '$lib/data/prizes.json';
</script>



<section
	class="my-32 flex w-full items-center justify-center border-slate-500 bg-black px-5 md:px-24 lg:py-1"
>
<div class="prize-container my-12 py-8">
	
	<span
		class="inline-flex w-fit animate-text-gradient text-wrap bg-gradient-to-r from-[#ACACAC] via-[#363636] to-[#ACACAC] bg-[200%_auto] bg-clip-text p-2 text-center text-4xl font-bold text-transparent sm:text-5xl md:text-6xl"
	>
		Prizes
	</span>
	<div class="prize-content pb-12">
		{#each prizes.prizes as prize, index}
			<div class="prize-wrapper" style={`transform: translateY(${index === 1 ? '0px' : '70px'});`}>
				<PrizeCard title={prize.title} award={prize.award} image={prize.image} />
			</div>
		{/each}
	</div>
</div>
</section>

<style>
	.prize-container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		row-gap: 30px;
	}
	.prize-content {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 50px;
		margin-top: 20px;
		width: 100%;
	}
	.prize-wrapper {
		transition:
			transform 0.3s ease,
			boxw 0.3s ease;
	}

	@media (max-width: 1024px) {
		.prize-content {
			grid-template-columns: repeat(2, 1fr);
			gap: 30px;
		}
	}

	@media (max-width: 768px) {
		.prize-content {
			grid-template-columns: 1fr;
			gap: 65px;
		}
		.prize-wrapper {
			transform: translateY(0);
		}
		.prize-container {
			row-gap: 65px;
		}
	}

	@media (max-width: 480px) {
		.prize-content {
			gap: 65px;
		}
		.prize-container span {
			font-size: 1.5rem;
		}
	}
</style>
