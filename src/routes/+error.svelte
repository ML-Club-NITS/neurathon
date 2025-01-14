<script lang="ts">
	import { onMount } from 'svelte';
	let url: any;
	onMount(() => {
		url = new URL(window.location.href.replace(/%2B/g, '+')).pathname;
		document.title = 'Error | Page Not Found';
	});
</script>

<div
	class="container mx-auto flex h-screen flex-col items-center justify-center px-4 py-8 text-center text-white font-mono"
>
	<div class="!h-52 w-52 bg-[url('error.jpeg')] bg-cover bg-center shadow-md">
		<div class="h-full w-full bg-gradient-to-r from-black via-transparent to-black"></div>
	</div>
	<h1 class="text-center text-4xl font-bold flex">ERR<pre>0</pre>R</h1>
	<div class="text-lg text-gray-400 flex flex-col items-center">
		Oh! Smash. You just hit a route that doesn't exist.
		<div class="flex items-center gap-3 text-lg text-gray-400">
			The page <pre class="w-fit bg-gray-900 rounded-md px-3">{url}</pre>
			 you are looking for is not available.
		</div>
		<a href="/" class="mt-8 rounded-lg bg-gray-400 px-2 py-1 text-black">Go Home</a>
	</div>
</div>
