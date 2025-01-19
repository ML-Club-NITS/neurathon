<script lang="ts">
	import Participate from "$lib/components/Participate.svelte";
	import type { PageData } from './$types';
	let { data }: { data: PageData } = $props();
</script>


<section class="flex bg-green-500 justify-evenly">
	<Participate {data}/>
</section>