<script lang="ts">
	import Participate from '$lib/components/Participate.svelte';

	let { data } = $props();
</script>

<section class="flex max-h-screen justify-evenly">
	<!-- mlclub -->
	<Participate {data} />
</section>
