<script>
	import kaggleData from '$lib/data/kaggleData.json';
	import MiniTimeline from './MiniTimeline.svelte';
	let importData = kaggleData.data;
</script>

<div class="flex h-[250px] w-full flex-col gap-4">
	<MiniTimeline {importData} />
</div>
