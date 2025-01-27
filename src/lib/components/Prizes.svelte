<script>
	import prizes from '$lib/data/prizes.json';

	import PrizeCard from './PrizeCard.svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	gsap.registerPlugin(ScrollTrigger);
	$effect(() => {
		let tl = gsap.timeline();
		tl.from('#prizes,#prize_inside', {
			opacity: 0,
			y: 60,
			stagger: 1,

			scrollTrigger: {
				trigger: '#prizes',
				scrub: 0.3,
				start: '-=200',
				end: '+=50',
				once: true,
				snap: {
					ease: 'power1.inOut'
				}
				// markers: true
			}
		});
	});
</script>

<section
	class="flex h-full w-full items-center justify-center border-slate-500 px-5 pb-8 pt-24 md:px-28 md:pb-12 md:pt-32"
	id="prizes"
>
	<div class="prize-container flex-col items-center justify-center gap-y-7" id="prize_inside">
		<span
			class="mb-8 inline-flex w-full animate-text-gradient justify-center text-wrap bg-gradient-to-r from-[#ACACAC] via-[#363636] to-[#ACACAC] bg-[200%_auto] bg-clip-text p-2 !text-center text-3xl font-bold text-transparent md:mb-4 md:text-3xl lg:text-5xl 2xl:text-8xl"
		>
			Prizes
		</span>
		<div class="prize-content grid w-full max-w-[90vw] grid-cols-3 gap-12">
			{#each prizes.prizes as prize, index}
				<div
					class={`prize-wrapper gap-2 ${index === 1 ? 'custom_800:translate-y-0' : 'custom_800:translate-y-16'} custom_800:transform`}
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

	.prize-content {
		grid-template-columns: repeat(1, 1fr);
		gap: 30px;
	}

	@media (min-width: 800px) {
		.prize-content {
			grid-template-columns: repeat(3, 1fr);
			gap: 20px;
		}

		.prize-wrapper {
			max-width: 250px;
			/* transform: translateY(0); */
			/* max-width: 200px; */
		}

		.prize-container {
			row-gap: 25px;
		}
	}
</style>
