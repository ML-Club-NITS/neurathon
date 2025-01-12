<script lang="ts">
	import Timeline from './ui/TimelineComponent.svelte';
	import Content1 from './timeLineContents/Content1.svelte';
	import Content2 from './timeLineContents/Content2.svelte';
	import Content3 from './timeLineContents/Content3.svelte';
	import RetroGrid from './RetroGrid.svelte';

	let timelineData: any = [
		{
			title: 'Svelte 5',
			content: Content1
		},
		{
			title: 'Early 2023',
			content: Content2
		},
		{
			title: 'Changelog',
			content: Content3
		}
	];
</script>

<section
	id="timeline"
	class="flex h-full w-full flex-wrap justify-around overflow-hidden bg-white font-sans md:px-10 dark:bg-neutral-950"
>
	<Timeline {timelineData} />
</section>
