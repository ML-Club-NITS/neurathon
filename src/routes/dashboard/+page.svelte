<script lang="ts">
	import { GitHistory, LeaderBoard } from '$lib/components';
	let { data } = $props();
	let { commits } = $derived(data);
	$effect(() => {
		console.log(commits);
	});
</script>

<section class="flex h-auto w-full flex-col items-center justify-center gap-4 p-4">
	<div class="w-full text-left text-2xl font-semibold text-white">
		Welcome, {data.user || 'user'}
	</div>
	<div class="flex w-full flex-row flex-wrap justify-evenly gap-4 p-4 lg:flex-row">
		<div class="max-w-[600px] rounded-lg lg:min-w-[400px]">
			<GitHistory {commits} />
		</div>
		<div class="w-full max-w-[400px] rounded-lg">
			<LeaderBoard />
		</div>
	</div>
</section>
