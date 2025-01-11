<script lang="ts">
	import Card2 from '../components/Card2.svelte';
	import CardBody from '../components/CardBody.svelte';
	import CardIcon from '../components/CardIcon.svelte';
	import SquareCard from '../components/SquareCard.svelte';
	import Tracks from '../components/Tracks.svelte';
	import Sponsers from '../components/Sponsers.svelte';

	export let data;
</script>

<div class="main-body flex min-h-screen flex-col items-center justify-center bg-black text-white">
	<div class="container">
		<h1 class="mb-4 text-4xl">Welcome to Supabase!</h1>
		<p class="mb-6">Last fetch Server Time: {data?.currentTime || 'Unavailable'}</p>
		<section class="tracks">
			<Tracks />
		</section>
		<section class="sponsers">
			<Sponsers/>
		</section>
	</div>
</div>

<style>
	.container {
		margin-top: 100px;
		display: flex;
		flex-direction: column;
		gap: 75px;
	}
</style>
