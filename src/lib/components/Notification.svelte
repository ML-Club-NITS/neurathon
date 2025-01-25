<script>
	import { goto } from '$app/navigation';
	import { Motion, useMotionValue, useMotionTemplate } from 'svelte-motion';

	let teamLead = true;
	let qulifiedR1 = true;

	// Mouse-following effect
	let mouseX = useMotionValue(0);
	let mouseY = useMotionValue(0);
	let background = useMotionTemplate`
		radial-gradient(200px circle at ${mouseX}px ${mouseY}px, rgba(255, 255, 255, 0.1), transparent 80%)
	`;
</script>

<div
	role="presentation"
	onmousemove={(e) => {
		const { left, top } = e.currentTarget.getBoundingClientRect();
		mouseX.set(e.clientX - left);
		mouseY.set(e.clientY - top);
	}}
	class="group relative w-full overflow-hidden rounded-md border border-gray-800 bg-gradient-to-r from-indigo-900/[0.3] to-black/[0.5] p-6 text-white opacity-95 shadow-lg backdrop-blur-sm transition-all duration-300 hover:opacity-100"
>
	<!-- Mouse-following gradient overlay -->
	<Motion
		style={{
			background
		}}
		let:motion
	>
		<div
			use:motion
			class="pointer-events-none absolute -inset-px rounded-md opacity-0 transition-opacity duration-300 group-hover:opacity-100"
		></div>
	</Motion>

	<!-- Content -->
	<div class="relative flex flex-col">
		<div class="mb-4 text-center">
			<h2 class="text-2xl font-bold">Congratulations!</h2>
			<p class="mt-2 text-lg">
				{qulifiedR1
					? teamLead
						? 'Your team has qualified for the Kaggle round. To continue to the second round, you need to add your GitHub repository.'
						: 'Your team has qualified for the Kaggle round.'
					: "We're sorry to inform you that your team did not qualify for the Kaggle round. But don't be sad—failure is the first step toward success."}
			</p>
		</div>
		<div class="git-add-button"></div>
		{#if teamLead && qulifiedR1}
			<button
				class="mt-4 self-center rounded-md bg-gray-900 px-6 py-3 text-lg font-semibold text-white transition-all duration-200 ease-in-out hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2"
				onclick={() => {
					goto('/dashboard/team');
				}}
				aria-label="Register your team"
			>
				Add GitHub Repository
			</button>
		{/if}
	</div>
</div>