<script lang="ts">
	import day1Data from '$lib/data/day1.json';
	import dd from '$lib/data/probStatData.json';
	import MiniTimeline from './MiniTimeline.svelte';
	let importData = dd.data;
</script>

<div class="flex h-auto flex-col gap-4 lg:flex-row">
	{#each day1Data.eventDay1 as event}
		<div class="rounded-lg border border-neutral-800 bg-black p-4 shadow-lg">
			<div class="text-left">
				<h2>
					<span
						class="text-base font-bold text-neutral-800 md:text-2xl lg:text-3xl dark:text-neutral-200"
					>
						{event.title}
					</span>
				</h2>
			</div>
			<div>
				<p class="mt-2 text-left text-neutral-400">
					{event.description}
				</p>
			</div>
			<MiniTimeline {importData} />
		</div>
	{/each}
</div>
