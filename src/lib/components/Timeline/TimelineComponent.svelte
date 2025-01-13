<script lang="ts">
	import { onMount, type Component } from 'svelte';
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
	import { writable } from 'svelte/store';

	type TimelineItem = {
		title: string;
		content: Component | string;
	};
	export let timelineData: TimelineItem[] = [];
	let containerRef: HTMLDivElement | null = null;
	let height = 0;
	let scrollProgress = writable(0);
	let heightTransform = tweened(0, { duration: 400, easing: cubicOut });
	let opacityTransform = tweened(0, { duration: 400, easing: cubicOut });

	onMount(() => {
		if (containerRef) {
			const rect = containerRef.getBoundingClientRect();
			height = rect.height;
		}

		const onScroll = () => {
			if (containerRef) {
				const rect = containerRef.getBoundingClientRect();
				const windowHeight = window.innerHeight;
				let progress = Math.min(
					1,
					Math.max(0, (windowHeight - rect.top) / (windowHeight + rect.height))
				);
				progress = progress < 0.6 ? progress - 0.09 : progress - 0.004;
				scrollProgress.set(progress);
			}
		};

		window.addEventListener('scroll', onScroll);

		return () => {
			window.removeEventListener('scroll', onScroll);
		};
	});

	$: scrollProgress.subscribe((progress) => {
		heightTransform.set(progress * height);
		opacityTransform.set(progress < 0.1 ? progress * 10 : 1);
	});
</script>

<div class="h-auto w-auto bg-transparent text-center font-sans md:px-10" bind:this={containerRef}>
	<span
		class="inline-flex w-fit animate-text-gradient text-wrap bg-gradient-to-r from-[#ACACAC] via-[#363636] to-[#ACACAC] bg-[200%_auto] bg-clip-text p-2 text-center text-4xl font-bold text-transparent sm:text-5xl md:text-6xl"
	>
		Timeline
	</span>
	<div class="relative mx-28 max-w-7xl overflow-hidden pb-20">
		{#each timelineData as item}
			<div class="flex justify-start pt-10 md:gap-y-10 md:pt-40">
				<div
					class="sticky top-40 z-40 flex max-w-xs flex-col items-center self-start md:w-full md:flex-row lg:max-w-sm"
				>
					<div
						class="absolute left-3 flex h-10 w-10 items-center justify-center rounded-full bg-white md:left-3 dark:bg-black"
					>
						<div
							class="h-4 w-4 rounded-full border border-neutral-300 bg-neutral-200 p-2 dark:border-neutral-700 dark:bg-neutral-800"
						></div>
					</div>
					<h3
						class="hidden text-xl font-bold text-neutral-500 md:block md:pl-20 md:text-3xl dark:text-neutral-500"
					>
						{item.title}
					</h3>
				</div>

				<div class="relative w-full pl-20 pr-4 md:pl-4">
					<h3
						class="mb-4 block text-left text-2xl font-bold text-neutral-500 md:hidden dark:text-neutral-500"
					>
						{item.title}
					</h3>
					{#if typeof item.content === 'string'}
						<p>{item.content}</p>
					{:else}
						<svelte:component this={item.content} />
					{/if}
				</div>
			</div>
		{/each}

		<div
			style="height: {height}px;"
			class="timeline-line absolute left-8 top-0 w-[2px] overflow-hidden bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 to-transparent to-[99%] md:left-8 dark:via-neutral-700"
		>
			<div
				style="height: {$heightTransform}px; opacity: {$opacityTransform};"
				class="absolute inset-x-0 top-0 w-[2px] rounded-full bg-gradient-to-t from-[#0883FF] from-[0%] via-[#FF5722] via-[10%] to-transparent"
			></div>
		</div>
	</div>
</div>

<style>
	.timeline-line {
		mask-image: linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%);
		-webkit-mask-image: linear-gradient(
			to bottom,
			transparent 0%,
			black 10%,
			black 90%,
			transparent 100%
		);
	}
</style>
