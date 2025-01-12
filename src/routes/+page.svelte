<script lang="ts">
	import Sponsers from '../components/Sponsers.svelte';
	import About from '$lib/components/About.svelte';
	// import Hero_2 from '$lib/components/Hero_2.svelte';

	// export let data;
</script>

<div class="main-body flex min-h-screen flex-col items-center justify-center bg-black text-white">
	<div class="container">
		<!-- <h1 class="mb-4 text-4xl">Neurathon</h1>
		<p class="mb-6">Last fetch Server Time: {data?.currentTime || 'Unavailable'}</p> -->
		<!-- <Navbar/> -->
		<!-- <Hero_2></Hero_2> -->
		<About />
		<section class="sponsers">
			<Sponsers />
		</section>
	</div>
	<footer class="mt-8">
		<p class="text-xl">Made with ❤️ by ML Club</p>
	</footer>
</div>
