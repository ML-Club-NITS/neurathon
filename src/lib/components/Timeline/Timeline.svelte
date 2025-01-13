<script lang="ts">
	import { type Component } from 'svelte';

	// import Content1 from './Timeline/Content1.svelte';
	import Content2 from './Content2.svelte';
	import Content3 from './Content3.svelte';

	import Timeline from './TimelineComponent.svelte';

	let timelineData: { title: string; content: Component | string }[] = [
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
	class="flex h-full w-full flex-wrap justify-around overflow-hidden py-8 font-sans md:px-10"
>
	<Timeline {timelineData} />
</section>
