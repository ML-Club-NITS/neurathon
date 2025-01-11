<script lang="ts">
	import About from '$lib/components/About.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Hero_2 from '$lib/components/Hero_2.svelte';
	import Navbar from '$lib/components/Navbar.svelte';

	let { data } = $props();
</script>

<h1 class="text-4xl">Welcome to Supabase!</h1>
<p>Last fetch Server Time: {data.currentTime}</p>

<!-- <Navbar></Navbar>
<Hero></Hero>
<Hero_2></Hero_2>
 -->
<Navbar></Navbar>
<Hero_2></Hero_2>
<About></About>
