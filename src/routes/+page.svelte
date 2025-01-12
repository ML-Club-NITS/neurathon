<script lang="ts">
	import CustomCard from '../components/CustomCard.svelte';
	import FaQs from '../components/FAQs.svelte';
	import Prizes from '../components/Prizes.svelte';
	import Prizes2 from '../components/Prizes2.svelte';
	import Timeline from '../components/Timeline.svelte';

	let { data } = $props();
</script>

<!-- <h1 class="text-4xl">Welcome to Supabase!</h1>
<p>Last fetch Server Time: {data.currentTime}</p> -->

<Prizes2 />
<Timeline />
<CustomCard />
<FaQs />
