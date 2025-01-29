<script lang="ts">
	import Participate from '$lib/components/Participate.svelte';
	import { onMount } from 'svelte';

	let { data } = $props();
	let dynamicData = $state(data);

	onMount(async () => {
		try {
			const response = await fetch('/api/teams');
			const result = await response.json();
			dynamicData = result.data;
		} catch (error) {
			console.error('Failed to fetch updated data:', error);
		}
	});
</script>

<svelte:head>
	<title>Participate - Neurathon</title>
</svelte:head>

<section class="flex max-h-screen justify-evenly">
	<!-- mlclub -->
	<Participate data={dynamicData} />
</section>
