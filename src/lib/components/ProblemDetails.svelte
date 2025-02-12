<script lang="ts">
	export let statement: any;

	export let isOpen: boolean;
	export let closePopup: () => void;
</script>

{#if isOpen}
	<div
		class="group absolute inset-0 flex items-center justify-center bg-slate-800/55 p-2 px-4 md:px-12 lg:translate-x-32 lg:px-48 xl:px-24"
		on:click={closePopup}
		role="button"
		tabindex="0"
		on:keydown={(e) => e.key === 'Enter' && closePopup()}
	>
		<div
			class="rounded-lg border border-slate-600 bg-slate-700/15 p-6 shadow-xl backdrop-blur-md transition-all duration-300 xl:max-w-[850px]"
			on:click|stopPropagation
			role="button"
			tabindex="0"
			on:keydown={(e) => e.key === 'Enter' && e.stopPropagation()}
		>
			<!-- <img
				class="h-64 w-full scale-90 rounded-t-lg object-cover transition-all duration-300 group-hover:scale-100"
				src={event.imageUrl}
				alt={event.title}
			/> -->
			<div class="relative flex flex-col">
				<div class="mb-4 text-center">
					<span
						class="inline-flex animate-text-gradient bg-gradient-to-r from-[#FFFFFF] via-[#CBCBCB] to-[#FFFFFF] bg-[200%_auto] bg-clip-text pb-6 text-center font-LeagueSpartanFont text-lg font-bold text-transparent md:text-2xl lg:text-3xl"
					>
						{statement.title}
					</span>

					<p
						class="lg:text:-xl mt-2 bg-gradient-to-b from-white to-neutral-500 bg-clip-text text-center text-[0.7rem] font-semibold text-transparent md:text-[0.85rem]"
					>
						{statement.overview}
					</p>
				</div>

				<div class="space-y-4">
					<div>
						<h3 class="text-lg font-semibold text-neutral-200">Key Objectives</h3>
						<ul class="list-disc pl-6 text-sm text-neutral-400 md:text-base lg:text-lg">
							{#each statement.keyObjectives as objective}
								<li>{objective}</li>
							{/each}
						</ul>
					</div>

					<div>
						<h3 class="text-lg font-semibold text-neutral-200">Environment</h3>
						<div class="text-[0.7rem] text-neutral-400 md:text-[0.85rem]">
							<p class="pt-1">
								<strong>Datasets:</strong>
								{statement.environment.datasets.join(', ')}
							</p>
							<p class="pt-1"><strong>Inputs:</strong> {statement.environment.inputs.join(', ')}</p>
							<p class="pt-1">
								<strong>Outputs:</strong>
								{statement.environment.outputs.join(', ')}
							</p>
						</div>
					</div>
				</div>
			</div>
			<button
				class="mt-4 rounded bg-slate-700 px-4 py-2 text-white transition-colors duration-300 hover:bg-slate-300 hover:text-black"
				on:click={closePopup}
			>
				Close
			</button>
		</div>
	</div>
{/if}
