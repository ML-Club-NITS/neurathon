<script lang="ts">
	import { cn } from '$lib/utils';

	export let shimmerWidth = 300;
	let className: any = '';
	export { className as class };
</script>

<div
	style:--shimmer-width="{shimmerWidth}px"
	class={cn(
		'mx-auto max-w-md text-neutral-600/50 dark:text-neutral-400/50 ',

		// Shimmer effect
		'animate-shimmer bg-clip-text bg-no-repeat [background-position:0_0] [background-size:var(--shimmer-width)_200%] [transition:background-position_1s_cubic-bezier(.6,.6,0,1)_infinite]',

		// Shimmer gradient
		'bg-gradient-to-r from-transparent via-black/80 via-50% to-transparent  dark:via-white/80',

		className
	)}
>
	<slot></slot>
</div>
