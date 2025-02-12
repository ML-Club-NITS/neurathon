<script lang="ts">
	import { createEventDispatcher } from 'svelte';

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
	class="group relative flex w-full cursor-pointer flex-col items-start justify-start overflow-hidden rounded-lg border border-gray-700 bg-gradient-to-r from-indigo-900/[0.3] to-black/[0.5] p-4 text-white opacity-95 shadow-xl backdrop-blur-sm transition-all duration-300 hover:opacity-100"
	onclick={handleClick}
	onkeydown={(e) => e.key === 'Enter' && handleClick()}
	aria-label={`statement: ${statement.title}`}
>
	<div class="flex flex-col items-center justify-start space-y-4">
		<span
			class="inline-flex animate-text-gradient bg-gradient-to-r from-[#FFFFFF] via-[#CBCBCB] to-[#FFFFFF] bg-[200%_auto] bg-clip-text text-center text-base font-bold text-transparent md:text-lg"
		>
			{statement.title}
		</span>
		<p class="text-center text-[0.65rem] text-gray-300 md:text-[0.85rem]">
			{statement.overview.slice(0, 250)}...
		</p>
		<span class="md:text-[0.95rem text-center text-[0.85rem] text-slate-600">Tap for more info</span
		>
	</div>
</div>
