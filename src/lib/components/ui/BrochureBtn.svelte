<script lang="ts">
	import { cn } from '$lib/utils';

	export let shimmerColor = '#ff0000';
	export let shimmerSize = '0.08em';
	export let shimmerDuration = '2s';
	export let borderRadius = '100px';
	export let background = 'rgba(0, 0, 0, 1)';
	let className: any = '';
	export { className as class };
</script>

<button
	style:--spread="90deg"
	style:--shimmer-color={shimmerColor}
	style:--radius={borderRadius}
	style:--speed={shimmerDuration}
	style:--cut={shimmerSize}
	style:--bg={background}
	class={cn(
		'group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap border border-white/10 px-6 py-3 text-white [background:var(--bg)] [border-radius:var(--radius)] dark:text-white',
		'transform-gpu transition-transform duration-300 ease-in-out active:translate-y-[1px]',
		className
	)}
>
	<div class={cn('-z-30 blur-[2px]', 'absolute inset-0 overflow-visible [container-type:size]')}>
		<div
			class="absolute inset-0 h-[100cqh] animate-magicslide [aspect-ratio:1] [border-radius:0] [mask:none]"
		>
			<!--  spark before  -->
			<div
				class="absolute inset-[-100%] w-auto rotate-0 animate-spin-around [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))] [translate:0_0]"
			></div>
		</div>
	</div>
	<slot class="text-orange-600"></slot>
	<!-- Highlight -->
	<div
		class={cn(
			'insert-0 absolute h-full w-full',

			'rounded-2xl px-4 py-1.5 text-sm font-medium shadow-[inset_0_-8px_10px_#ff00003c]',

			// transition
			'transform-gpu transition-all duration-300 ease-in-out',

			// on hover
			'group-hover:shadow-[inset_0_-6px_10px_#ff0000]',

			// on click
			'group-active:shadow-[inset_0_-10px_10px_#ff7000]'
		)}
	></div>
	<!-- backdrop -->
	<div
		class={cn(
			'absolute -z-20 [background:var(--bg)] [border-radius:var(--radius)] [inset:var(--cut)]'
		)}
	></div>
</button>
