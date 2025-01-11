<script lang="ts">
	import About from '$lib/components/About.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Hero_2 from '$lib/components/Hero_2.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import Particles from '$lib/utils/Particles.svelte';

	let { data } = $props();
</script>

<!-- <h1 class="text-4xl">Welcome to Supabase!</h1>
<p>Last fetch Server Time: {data.currentTime}</p> -->

<div
	class="
h-screen
overflow-y-auto pt-4
[&::-webkit-scrollbar-thumb]:rounded-full
[&::-webkit-scrollbar-thumb]:bg-gray-300
dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500
[&::-webkit-scrollbar-track]:rounded-full
[&::-webkit-scrollbar-track]:bg-gray-100
dark:[&::-webkit-scrollbar-track]:bg-neutral-700
[&::-webkit-scrollbar]:w-2 bg-slate-900"
>
	<Navbar></Navbar>
	<Hero_2></Hero_2>
	<About></About>
</div>
