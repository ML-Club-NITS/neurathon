<script lang="ts">
	import day2Data from '$lib/data/day2.json';
</script>

<div class="flex flex-col h-auto gap-4 lg:flex-row">
	{#each day2Data.eventDay2 as event}
		<div class="border border-neutral-800 rounded-lg bg-black shadow-lg p-4">
			<div class="text-left">
				<h2>
					<span class="text-2xl font-bold text-neutral-800 dark:text-neutral-200">
						{event.title}
					</span>
				</h2>
			</div>
			<div>
				<p class="text-left text-neutral-400 mt-2">
					{event.description}
				</p>
			</div>
		</div>
	{/each}
</div>


