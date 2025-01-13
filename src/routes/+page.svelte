<script lang="ts">
	import { Hero, About, Prizes, Timeline, Sponsers, FAQs, Footer } from '$lib/components';

	// export let data;
</script>

<div class="main-body flex min-h-screen flex-col items-center justify-center bg-black text-white">
	<!-- <p class="mb-6">Last fetch Server Time: {data?.currentTime || 'Unavailable'}</p> -->
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
			<Prizes />
		</section>
		<section id="sponsers">
			<Sponsers />
		</section>
		<section id="faqs">
			<FAQs />
		</section>
	</main>
</div>
<footer class="mt-8">
	<Footer />
</footer>
