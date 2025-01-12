<script lang="ts">
	import Prizes from '../components/Prizes.svelte';
	import Sponsers from '../components/Sponsers.svelte';

	export let data;
</script>

<div class="main-body flex min-h-screen flex-col items-center justify-center bg-black text-white">
	<div class="container">
		<h1 class="mb-4 text-4xl">Neurathon</h1>
		<p class="mb-6">Last fetch Server Time: {data?.currentTime || 'Unavailable'}</p>
		<section id="sponsers">
			<Sponsers/>
		</section>
		<section id="prizes">
			<Prizes/>
		</section>
	</div>
	<footer class="mt-8">
		<p class="text-xl">Made with ❤️ by ML Club</p>
	</footer>
</div>

<style>
	.container {
		margin-top: 100px;
		display: flex;
		flex-direction: column;
		gap: 75px;
	}
</style>
