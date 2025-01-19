<script lang="ts">
	import { cn } from '$lib/utils';
	export let pauseOnHover: boolean = false;
	export let vertical: boolean = false;
	export let repeat: number = 4;
	export let reverse: boolean = false;

	let className: string = '';
	export { className as class };
</script>

<div
	class={cn(
		'group flex overflow-hidden p-2 [--duration:2s] [--gap:1rem] [gap:var(--gap)]',
		{
			'flex-row': !vertical,
			'flex-col': vertical
		},
		className
	)}
>
	{#each Array.from({ length: repeat }) as _unused, i (i)}
		<!-- eslint-disable-line no-unused-vars -->
		<div
			class={cn('flex shrink-0 justify-around [gap:var(--gap)]', {
				'animate-marquee flex-row': !vertical,
				'animate-marquee-vertical flex-col': vertical,
				'group-hover:[animation-play-state:paused]': pauseOnHover,
				'[animation-direction:reverse]': reverse
			})}
		>
			<div style="display: none;">{_unused}</div>
			<slot>Default</slot>
			<div style="display: none;">{_unsed}</div>
		</div>
	{/each}
</div>
