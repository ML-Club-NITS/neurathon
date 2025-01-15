<script>
	import prizes from '$lib/data/prizes.json';

	import PrizeCard from './PrizeCard.svelte';
</script>

<section
	class="flex w-full items-center justify-center border-slate-500 bg-black px-5 md:px-24 lg:py-1"
>
	<div class="prize-container flex-col items-center justify-center gap-y-7 ">
		<span
			class="w-fit animate-text-gradient bg-gradient-to-r from-[#ACACAC] via-[#363636] to-[#ACACAC] bg-[200%_auto] bg-clip-text text-center font-bold text-transparent text-5xl sm:text-6xl md:text-7xl"
		>
			Prizes
		</span>
		<div class="prize-content w-full gap-12 grid grid-cols-3">
			{#each prizes.prizes as prize, index}
				<div
					class="prize-wrapper"
					style={`transform: translateY(${index === 1 ? '0px' : '70px'});`}
				>
					<PrizeCard title={prize.title} award={prize.award} image={prize.image} />
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
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
	}
</style>
