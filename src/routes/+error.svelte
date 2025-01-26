<script lang="ts">
	import { onMount } from 'svelte';
	import errImg from '$lib/assets/mag_galss.png';

	let url: string;

	onMount(() => {
		url = new URL(window.location.href.replace(/%2B/g, '+')).pathname;
		document.title = 'Error | Page Not Found';
	});
</script>

<div
	class="font-mono container mx-auto flex h-screen w-auto flex-col items-center justify-center px-4 py-8 text-center text-white"
>
	<div class="!h-52 w-52 bg-black bg-cover bg-center shadow-md">
		<div class="h-full w-full bg-transparent">
			<img
				src={errImg}
				alt=""
				class="h-full w-full scale-[0.7] md:scale-[0.8] lg:scale-[0.9] xl:scale-[1.0]"
			/>
		</div>
	</div>
	<h1 class="flex pb-5 text-center text-2xl font-bold md:text-3xl lg:text-4xl">
		ERR
		<pre class="text-2xl md:text-3xl lg:text-4xl">0</pre>
		R
	</h1>
	<div
		class="mb-10 flex flex-col items-center text-base text-gray-400 md:text-xl lg:text-2xl xl:text-3xl"
	>
		Oh! Sma. You just hit a route that doesn't exist.<br /><br />
		<div
			class="flex flex-wrap items-center justify-center gap-3 text-2xl text-gray-400 md:text-3xl lg:text-4xl"
		>
			The page <pre class="w-fit rounded-md bg-gray-900 px-3">{url}</pre>
			you are looking for is not available.
		</div>
		<a href="/" class="mt-8 rounded-lg bg-gray-400 px-2 py-1 text-black">Go Home</a>
	</div>
</div>
