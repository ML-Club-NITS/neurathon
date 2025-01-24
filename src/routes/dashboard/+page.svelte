<script lang="ts">
	import { GitHistory } from '$lib/components';
	import Notification from '$lib/components/Notification.svelte';
	let { data } = $props();
	let { commits } = $derived(data);
</script>

<section class="flex h-auto w-full flex-col items-center justify-center gap-4">
	<div class="w-full text-left text-2xl font-semibold text-white">
		Welcome, {data.user?.user_metadata.name || 'user'}
	</div>
	<div class="p-4 rounded-lg bg-orange-500 text-white"><Notification /></div>
	<div class="flex w-full flex-row flex-wrap justify-evenly gap-4 lg:flex-row lg:flex-nowrap">
		<div class="rounded-lg md:w-full lg:min-w-[300px] lg:max-w-full">
			<GitHistory {commits} />
		</div>
		<!-- {#if round === 1.5}
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
		{/if} -->
	</div>
</section>
