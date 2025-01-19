<script lang="ts">
	import { GitHistory, LeaderBoard } from '$lib/components';
	let { data } = $props();
	let { commits } = $derived(data);
	$effect(() => {
		console.log(commits);
	});
</script>

<div class="w-full text-left font-semibold text-white text-2xl">Welcome, {data.user || 'user'}</div>
<div class="flex w-full flex-row flex-wrap justify-evenly gap-4 p-4 lg:flex-row">
	<div class="max-w-[600px] rounded-lg lg:min-w-[400px]">
		<GitHistory />
	</div>
	<div class="w-full max-w-[400px] rounded-lg">
		<LeaderBoard />
	</div>
</div>
