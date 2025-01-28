<script lang="ts">
	import Participate from '$lib/components/Participate.svelte';

	let { data } = $props();
</script>

<svelte:head>
	<title>Participate - Neurathon</title>
</svelte:head>

<section class="flex max-h-screen justify-evenly">
	<!-- mlclub -->
	<Participate {data} />
</section>
