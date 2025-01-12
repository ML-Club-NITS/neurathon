<script lang="ts">
	import '../app.css';

	import { goto, invalidate } from '$app/navigation';
	import { onMount } from 'svelte';

	import Navbar from '$lib/components/Navbar.svelte';

	let { data, children } = $props();
	let { session, supabase } = $derived(data);

	onMount(() => {
		const { data } = supabase.auth.onAuthStateChange((_, newSession) => {
			if (newSession?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth');
			}
		});

		return () => data.subscription.unsubscribe();
	});

	async function signOut() {
		const { error } = await supabase.auth.signOut();
		goto('/');
	}
</script>

<!-- <div class="glassy-navbar flex w-screen items-center justify-between">
</div> -->
<!-- <div class="flex w-fit items-center justify-between bg-black">
	<nav class="mx-6 my-3 flex gap-4">
		<a href="/" class="rounded-lg bg-gray-400 px-2 py-1">Home</a>
		<a href="/participate" class="rounded-lg bg-gray-400 px-2 py-1">Participate</a>
		{#if data?.session}
			<button onclick={signOut} class="rounded-lg bg-red-500 px-2 py-1">LogOut</button>
		{/if}
	</nav>
</div> -->
<Navbar />
<div class="h-16"></div>
{@render children()}

<!-- <style>
	.glassy-navbar {
		background-color: rgba(255, 255, 255, 0.2);
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
		border-bottom: 1px solid rgba(255, 255, 255, 0.3);
		padding: 1rem 0;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 1000;
	}
</style> -->
