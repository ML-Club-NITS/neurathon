<script lang="ts">
	import conclusion from '$lib/data/conclusion.json';
</script>

<div class="flex h-auto flex-col gap-4 lg:flex-row">
	{#each conclusion.conclusion as event}
		<div class="info-container">
			<div class="title-container text-left">
				<h2>
					<span
						class="text-base font-bold text-neutral-800 md:text-2xl lg:text-3xl dark:text-neutral-200"
					>
						{event.title}
					</span>
				</h2>
			</div>
			<div class="para-container">
				<p class="para">
					{event.description}
				</p>
			</div>
		</div>
	{/each}
</div>

<style>
	.info-container {
		padding: 1rem;
		border: 1px solid #141313;
		border-radius: 8px;
		background-color: #000000;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	}

	.para {
		max-width: 90%;
		text-align: left;
		margin: 0.5rem 0;
		color: #b4b4b4;
	}
</style>
