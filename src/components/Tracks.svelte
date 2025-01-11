<script>
	import Card2 from './Card2.svelte';
	import Card3 from './Card3.svelte';
	import HoverMagicCard from './HoverMagicCard.svelte';
	import TrackCard from './TrackCard.svelte';
</script>

<div class="track-container">
	<div class="track-intro">
		<div class="intro-card">
			Event Tracks
		</div>
	</div>
	<div class="track-content">
		<TrackCard/>
		<TrackCard/>
		<TrackCard/>
	</div>
</div>

<style>
	.track-container {
		display: flex;
		flex-direction: column;
		row-gap: 30px;
	}

	.track-content {
		display: flex;
        gap: 30px;
        justify-content: center;
        flex-wrap: wrap;
	}

	.intro-card {
		font-family: 'league-spartan', sans-serif;
		font-weight: bold;
		font-size: 30px;
		display: flex;
		justify-content: center;
	}
</style>
