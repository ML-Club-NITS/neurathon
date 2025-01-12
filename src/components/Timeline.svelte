<script lang="ts">
	import Timeline from './ui/TimelineComponent.svelte';
	import Content2 from './timeLineContents/Content2.svelte';
	import Content3 from './timeLineContents/Content3.svelte';

	let timelineData: any = [
		{
			title: 'Takeoff and Orientation',
			content:
				'Event starts of with brief introduction of the Club and release of the Problem Statements.'
		},
		{
			title: 'Building and Collab',
			content: Content3
		},
		{
			title: 'Final Evaluation and Closing',
			content: Content2
		}
	];
</script>

<section
	id="timeline"
	class="flex h-full w-full flex-wrap justify-around overflow-hidden bg-white py-8 font-sans md:px-10 dark:bg-neutral-950"
>
	<Timeline {timelineData} />
</section>
