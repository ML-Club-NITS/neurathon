<script>
	import sponserData from '$lib/data/sponsers.json';
	import prevSponserData from '$lib/data/prevSponsers.json';

	import { Marquee } from './ui';
	import SponsorCard from './SponsorCard.svelte';

	let zeroRow = prevSponserData.sponsers.slice(0, sponserData.sponsers.length);
	// let firstRow = sponserData.sponsers.slice(0, sponserData.sponsers.length / 2);
	// let secondRow = sponserData.sponsers.slice(sponserData.sponsers.length / 2);
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	gsap.registerPlugin(ScrollTrigger);
	$effect(() => {
		let tl = gsap.timeline();
		tl.from('#sponsors, #inside_sponsers', {
			opacity: 0,
			y: 60,
			stagger: 1,
			duration: 1.5,

			scrollTrigger: {
				trigger: '#sponsors',
				scrub: 1,
				start: '-=400',
				end: '+=10',
				once: true,
				snap: {
					ease: 'power1.inOut'
				}
				// markers: true
			}
		}).from(
			'#sponser_cards',
			{
				opacity: 0,
				y: 60,
				stagger: 1,
				duration: 1,

				scrollTrigger: {
					trigger: '#inside_sponsers',
					scrub: 1,
					start: '-=400',
					end: '+=10',
					once: true,
					snap: {
						ease: 'power1.inOut'
					}
					// markers: true
				}
			},
			'-=0.1'
		);
	});
</script>

<div id="sponsors" class="sponser-container pt-0 sm:pt-28">
	<div class="sponser_intro" id="inside_sponsers">
		<span
			class="inline-flex w-fit animate-text-gradient text-wrap bg-gradient-to-r from-[#ACACAC] via-[#363636] to-[#ACACAC] bg-[200%_auto] bg-clip-text p-2 text-center text-2xl font-bold text-transparent md:text-3xl lg:text-5xl 2xl:text-8xl"
		>
			Past Sponsors
		</span>
	</div>
	<div class="sponser_cards" id="sponser_cards">
		<div
			class="bg-background relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg py-1 md:shadow-xl"
		>
			<Marquee pauseOnHover class="[--duration:30s]">
				{#each zeroRow as item}
					<SponsorCard {...item} />
				{/each}
			</Marquee>
			<!-- <Marquee pauseOnHover class="[--duration:30s]">
				{#each firstRow as item}
					<SponsorCard {...item} />
				{/each}
			</Marquee>
			<Marquee reverse pauseOnHover class="[--duration:30s]">
				{#each secondRow as item}
					<SponsorCard {...item} />
				{/each}
			</Marquee> -->
			<div
				class="dark:from-background pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black"
			></div>
			<div
				class="dark:from-background pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black"
			></div>
		</div>
	</div>
</div>

<style>
	.sponser-container {
		display: flex;
		flex-direction: column;
		/* row-gap: 30px; */
	}

	.sponser_intro {
		font-family: 'league-spartan', sans-serif;
		font-weight: bold;
		font-size: 30px;
		display: flex;
		justify-content: center;
	}
</style>
