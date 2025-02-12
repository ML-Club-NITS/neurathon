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
	class="group relative flex w-full cursor-pointer flex-col items-start justify-start overflow-hidden rounded-lg border border-gray-700 bg-gradient-to-r from-indigo-900/[0.3] to-black/[0.5] p-8 text-white opacity-95 shadow-xl backdrop-blur-sm transition-all duration-300 hover:opacity-100"
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
			class="font-Inter inline-flex animate-text-gradient bg-gradient-to-r from-[#FFFFFF] via-[#CBCBCB] to-[#FFFFFF] bg-[200%_auto] bg-clip-text text-center text-[0.95rem] font-bold text-transparent md:text-[1.05rem]"
		>
			{statement.title}
		</span>
		<p class="text-center text-[0.65rem] text-gray-300 md:text-[0.85rem]">
			{statement.overview}
		</p>
		<span class="md:text-[0.95rem text-center text-[0.85rem] text-slate-600">Tap for more info</span
		>
	</div>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

	.font-Inter {
		font-family: 'Inter', sans-serif;
	}
</style>
