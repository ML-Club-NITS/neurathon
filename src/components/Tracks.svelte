<script>
	import Card2 from './Card2.svelte';
	import Card3 from './Card3.svelte';
	import HoverMagicCard from './HoverMagicCard.svelte';
	import TrackCard from './TrackCard.svelte';

	const tracks = [
		{
			title: 'Track 1',
			description: 'This is the description of track 1',
			image: 'src/components/assets/diamond.png'
		},
		{
			title: 'Track 2',
			description: 'This is the description of track 2',
			image: 'src/components/assets/diamond.png'
		},
		{
			title: 'Track 3',
			description: 'This is the description of track 3',
			image: 'src/components/assets/diamond.png'
		}
	];
</script>

<div class="track-container">
	<div class="track-intro">
		<div class="intro-card">
			<span
				class="inline-flex animate-text-gradient bg-gradient-to-r from-[#ACACAC] via-[#363636] to-[#ACACAC] bg-[200%_auto] bg-clip-text text-center text-3xl text-transparent"
			>
				Tracks
			</span>
		</div>
	</div>
	<div class="track-content">
		{#each tracks as track}
			<TrackCard title={track.title} description={track.description} image={track.image} />
		{/each}
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
