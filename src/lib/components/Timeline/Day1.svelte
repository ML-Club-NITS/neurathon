<script lang="ts">
	import day1Data from '$lib/data/day1.json';
</script>

<div class="flex h-auto flex-col gap-4 lg:flex-row">
	{#each day1Data.eventDay1 as event}
		<div class="rounded-lg border border-neutral-800 bg-black p-4 shadow-lg">
			<div class="text-left">
				<h2>
					<span class="text-2xl font-bold text-neutral-800 dark:text-neutral-200">
						{event.title}
					</span>
				</h2>
			</div>
			<div>
				<p class="mt-2 text-left text-neutral-400">
					{event.description}
				</p>
			</div>
		</div>
	{/each}
</div>
