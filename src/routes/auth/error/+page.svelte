<svelte:head>
	<title>Auth Error - Neurathon</title>
	<meta name="robots" content="noindex" />
</svelte:head>

<div
	class="font-mono container mx-auto flex h-screen w-auto flex-col items-center justify-center px-4 py-8 text-center text-white"
>
	<h1 class="flex text-center text-2xl font-bold md:text-3xl lg:text-4xl">
		L
		<pre class="text-2xl md:text-3xl lg:text-4xl">0</pre>
		GIN ERR
		<pre class="text-2xl md:text-3xl lg:text-4xl">0</pre>
		R
	</h1>
	<div class="flex flex-col items-center text-xl text-gray-400 md:text-2xl lg:text-3xl">
		Oh! Smh. Something went wrong during auth.
		<div class="flex items-center gap-3 text-2xl text-gray-400 md:text-3xl lg:text-3xl">
			Try again
		</div>
		<a href="/auth" class="mt-8 rounded-lg bg-gray-400 px-6 py-1 text-black">Go Auth</a>
	</div>
</div>
