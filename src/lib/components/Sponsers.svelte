<script>
	import sponserData from '$lib/data/sponsers.json';

	import { Marquee } from './ui';
	import SponsorCard from './SponsorCard.svelte';

	let firstRow = sponserData.sponsers.slice(0, sponserData.sponsers.length / 2);
	let secondRow = sponserData.sponsers.slice(sponserData.sponsers.length / 2);
</script>

<div class="sponser-container my-12 py-8">
	<div class="sponser_intro">
		<span
			class="inline-flex w-fit animate-text-gradient text-wrap bg-gradient-to-r from-[#ACACAC] via-[#363636] to-[#ACACAC] bg-[200%_auto] bg-clip-text p-2 text-center text-2xl font-bold text-transparent md:text-3xl lg:text-5xl xl:text-8xl"
		>
			Sponsors
		</span>
	</div>
	<div class="sponser_cards">
		<div
			class="bg-background relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg py-5 md:shadow-xl"
		>
			<Marquee pauseOnHover class="[--duration:30s]">
				{#each firstRow as item}
					<SponsorCard {...item} />
				{/each}
			</Marquee>
			<Marquee reverse pauseOnHover class="[--duration:30s]">
				{#each secondRow as item}
					<SponsorCard {...item} />
				{/each}
			</Marquee>
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
