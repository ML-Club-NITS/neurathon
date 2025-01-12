<script lang="ts">
	import Sponsers from '../components/Sponsers.svelte';
	import About from '$lib/components/About.svelte';
	import PrizeMain from '../components/PrizeMain.svelte';
	import Timeline from '../components/Timeline.svelte';
	import FaQs from '../components/FAQs.svelte';
	import Hero from '../components/Hero.svelte';

	// export let data;
</script>

<div class="main-body flex min-h-screen flex-col items-center justify-center bg-black text-white">
	<!-- <h1 class="mb-4 text-4xl">Neurathon</h1>
	<p class="mb-6">Last fetch Server Time: {data?.currentTime || 'Unavailable'}</p> -->
	<!-- <Navbar/> -->
	<!-- <Hero_2></Hero_2> -->
	<section id="hero" class="w-full">
		<Hero />
	</section>
	<main class="container">
		<section class="conatiner" id="about">
			<About />
		</section>
		<section class="container" id="timeline">
			<Timeline />
		</section>
		<section class="container" id="prizes">
			<PrizeMain />
		</section>
		<section id="sponsers">
			<Sponsers />
		</section>
		<section id="faqs">
			<FaQs />
		</section>
	</main>
	<footer class="mt-8">
		<p class="text-xl">Made with ❤️ by ML Club</p>
	</footer>
</div>
