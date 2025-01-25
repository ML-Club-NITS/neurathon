<script lang="ts">
	import { GitHistory, LeaderBoard } from '$lib/components';
	import Notification from '$lib/components/Notification.svelte';
	import TextGenerateEffect from '$lib/components/ui/TextGenerateEffect.svelte';
	let { data } = $props();
	let { commits, round } = $derived(data);
	// console.log(commits);
</script>

<section class="flex h-auto w-full flex-col items-center justify-center gap-4">
	<nav class="mt-2 flex w-full" aria-label="Breadcrumb">
		<ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
			<li class="inline-flex items-center">
				<a
					href="/"
					class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
					aria-label="Home"
				>
					<svg
						class="me-2.5 h-3 w-3"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="currentColor"
						viewBox="0 0 20 20"
					>
						<path
							d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"
						/>
					</svg>
				</a>
			</li>
			<li aria-current="page">
				<div class="flex items-center">
					<svg
						class="mx-1 h-3 w-3 text-gray-400 rtl:rotate-180"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 6 10"
					>
						<path
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="m1 9 4-4-4-4"
						/>
					</svg>
					<span class="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400"
						>Dashboard</span
					>
				</div>
			</li>
		</ol>
	</nav>
	<div class="w-full text-left text-2xl font-semibold text-white">
		<TextGenerateEffect words={`Welcome, ${data.user?.user_metadata.name || 'user'}`} />
	</div>
	<div class="rounded-lg text-white z-0"><Notification /></div>
	<div class="flex w-full flex-row flex-wrap justify-evenly gap-4 lg:flex-row lg:flex-nowrap">
		<!-- <div class="rounded-lg md:w-full lg:min-w-[300px] lg:max-w-full">
			<GitHistory {commits} />
		</div> -->
		{#if round === 1.5}
			<div class="w-full rounded-lg lg:max-w-[50%]">
				<LeaderBoard />
			</div>
		{:else if round === 2}
			<div class="rounded-lg md:w-full lg:min-w-[300px] lg:max-w-full">
				<GitHistory {commits} />
			</div>
			<div class="w-full rounded-lg lg:max-w-[50%]">
				<LeaderBoard />
			</div>
		{/if}
	</div>
</section>
