<script lang="ts">
	import { Motion, useMotionValue, useMotionTemplate } from 'svelte-motion';
	import { createEventDispatcher } from 'svelte';

	let mouseX = useMotionValue(0);
	let mouseY = useMotionValue(0);
	let background = useMotionTemplate`
      radial-gradient(300px circle at ${mouseX}px ${mouseY}px, rgba(255, 255, 255, 0.15), transparent 80%)
    `;

	export let statement: {
		id: number;
		title: string;
		overview: string;
		keyObjectives: any;
		environment: any;
	};

	const dispatch = createEventDispatcher();

	function handleClick() {
		dispatch('select', statement);
	}
</script>

<div
	role="presentation"
	onmousemove={(e) => {
		const { left, top } = e.currentTarget.getBoundingClientRect();
		mouseX.set(e.clientX - left);
		mouseY.set(e.clientY - top);
	}}
	class="group relative w-full overflow-hidden rounded-lg border border-gray-700 bg-gradient-to-r from-indigo-900/[0.3] to-black/[0.5] p-8 text-white opacity-95 shadow-xl backdrop-blur-sm transition-all duration-300 hover:opacity-100 flex flex-col items-start justify-start cursor-pointer"
	onclick={handleClick}
	onkeydown={(e) => e.key === 'Enter' && handleClick()}
	aria-label={`statement: ${statement.title}`}
>
	<Motion
		style={{
			background
		}}
		let:motion
	>
		<div
			use:motion
			class="pointer-events-none absolute -inset-px rounded-lg opacity-0 transition-opacity duration-300 group-hover:opacity-70"
		></div>
	</Motion>

	<div class="flex flex-col justify-start space-y-4">
		<span
			class="inline-flex animate-text-gradient bg-gradient-to-r from-[#FFFFFF] via-[#CBCBCB] to-[#FFFFFF] bg-[200%_auto] bg-clip-text text-center font-Inter text-[0.95rem] md:text-[1.05rem] font-bold text-transparent"
		>
			{statement.title}
		</span>
		<p class="text-center text-gray-300 text-[0.65rem] md:text-[0.85rem]">
			{statement.overview}
		</p>
		<span class="text-slate-600 text-center text-[0.85rem] md:text-[0.95rem">Tap for more info</span>
	</div>

</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

	.font-Inter {
		font-family: 'Inter', sans-serif;
	}
</style>