<script lang="ts">
	import Participate from '$lib/components/Participate.svelte';
	import { onMount } from 'svelte';

	let { data } = $props();

	onMount(async () => {
		try {
			const response = await fetch('/participate');
			if (response.ok) {
				const result = await response.json();
				data = result.data;
			}
		} catch (error) {
			console.error('Error during fetch:', error);
		}
	});
</script>

<svelte:head>
	<title>Participate - Neurathon</title>
</svelte:head>

<section class="flex max-h-screen justify-evenly">
	<!-- mlclub -->
	<Participate {data} />
</section>
