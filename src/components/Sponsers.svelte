<script>
	import Marqee2 from './Marqee2.svelte';
</script>

<div class="sponser-container">
	<div class="sponser_intro">
		<span
			class="inline-flex animate-text-gradient bg-gradient-to-r from-[#ACACAC] via-[#363636] to-[#ACACAC] bg-[200%_auto] bg-clip-text p-2 text-center text-5xl text-transparent"
		>
			Sponsers
		</span>
	</div>
	<div class="sponser_cards">
		<Marqee2 />
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
