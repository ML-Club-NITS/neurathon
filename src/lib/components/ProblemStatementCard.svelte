<script lang="ts">
	import { Motion, useMotionValue, useMotionTemplate } from 'svelte-motion';
	import problemStatements from '$lib/data/problemstatements.json';

	let mouseX = useMotionValue(0);
	let mouseY = useMotionValue(0);
	let background = useMotionTemplate`
      radial-gradient(200px circle at ${mouseX}px ${mouseY}px, rgba(255, 255, 255, 0.1), transparent 80%)
    `;
</script>

<div class="prob-container flex flex-col justify-center pt-6">
	<span
		class="animate-text-gradient bg-gradient-to-r from-[#FFFFFF] via-[#7e7e7e] to-[#FFFFFF] bg-[200%_auto] bg-clip-text text-center font-LeagueSpartanFont text-3xl font-bold text-transparent md:text-4xl lg:text-5xl"
	>
		Problem Statements
	</span>
	{#each problemStatements as statement}
		<div
			role="presentation"
			onmousemove={(e) => {
				const { left, top } = e.currentTarget.getBoundingClientRect();
				mouseX.set(e.clientX - left);
				mouseY.set(e.clientY - top);
			}}
			class="group relative my-6 w-full overflow-hidden rounded-md border border-gray-800 bg-gradient-to-r from-indigo-900/[0.3] to-black/[0.5] p-6 text-white opacity-95 shadow-lg backdrop-blur-sm transition-all duration-300 hover:opacity-100"
		>
			<Motion
				style={{
					background
				}}
				let:motion
			>
				<div
					use:motion
					class="pointer-events-none absolute -inset-px rounded-md opacity-0 transition-opacity duration-300 group-hover:opacity-50"
				></div>
			</Motion>

			<div class="relative flex flex-col">
				<div class="mb-4 text-center">
					<span
						class="inline-flex animate-text-gradient bg-gradient-to-r from-[#FFFFFF] via-[#CBCBCB] to-[#FFFFFF] bg-[200%_auto] bg-clip-text pb-6 text-center font-LeagueSpartanFont text-lg font-bold text-transparent md:text-2xl lg:text-3xl"
					>
						{statement.title}
					</span>

					<p
						class="lg:text:-xl mt-2 bg-gradient-to-b from-white to-neutral-500 bg-clip-text text-sm font-semibold text-transparent md:text-lg"
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
						<div class="text-sm text-neutral-400 md:text-base">
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
		</div>
	{/each}
</div>
