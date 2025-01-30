<script>
	import { goto } from '$app/navigation';
	import { Motion, useMotionValue, useMotionTemplate } from 'svelte-motion';

	let { data } = $props();
	let { header = null, msg = null, route = null, routeMsg = null } = $derived(data);

	// Mouse-following effect
	let mouseX = useMotionValue(0);
	let mouseY = useMotionValue(0);
	let background = useMotionTemplate`
		radial-gradient(200px circle at ${mouseX}px ${mouseY}px, rgba(255, 255, 255, 0.1), transparent 80%)
	`;
</script>

{#if msg != null}
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
				class="pointer-events-none absolute -inset-px rounded-md opacity-0 transition-opacity duration-300 group-hover:opacity-50"
			></div>
		</Motion>

		<!-- Content -->
		<div class="relative flex flex-col">
			<div class="mb-4 text-center">
				{#if header}
					<span
						class="inline-flex animate-text-gradient bg-gradient-to-r from-[#FFFFFF] via-[#BE87FF] to-[#FFFFFF] bg-[200%_auto] bg-clip-text pb-6 text-center font-LeagueSpartanFont text-3xl font-bold text-transparent md:text-4xl lg:text-5xl"
					>
						{header}
					</span>
				{/if}
				<p
					class="mt-2 bg-gradient-to-b from-white to-neutral-500 bg-clip-text px-4 text-xl font-semibold text-transparent"
				>
					{msg}
				</p>
			</div>
			<!-- <div class="git-add-button"></div> -->
			{#if routeMsg}
				<button
					class="self-center rounded-md bg-indigo-600/25 px-6 py-3 text-lg font-semibold text-white transition-all duration-200 ease-in-out hover:bg-indigo-600/55 focus:outline-none focus:ring-2 focus:ring-indigo-800/25 focus:ring-offset-2"
					onclick={() => {
						if (String(route).includes('http')) window.open(route, '_blank');
						else goto(`/${route}`);
					}}
					aria-label="Notification"
				>
					{routeMsg}
				</button>
			{/if}
		</div>
	</div>
{:else}
	<div></div>
{/if}
