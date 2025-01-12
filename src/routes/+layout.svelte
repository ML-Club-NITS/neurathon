<script lang="ts">
	import '../app.css';

	import { goto, invalidate } from '$app/navigation';
	import { onMount } from 'svelte';

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

<!-- <div class="flex w-fit items-center justify-between bg-black">
	<nav class="mx-6 my-3 flex gap-4">
		<a href="/" class="rounded-lg bg-gray-400 px-2 py-1">Home</a>
		<a href="/participate" class="rounded-lg bg-gray-400 px-2 py-1">Participate</a>
		{#if data?.session}
			<button onclick={signOut} class="rounded-lg bg-red-500 px-2 py-1">LogOut</button>
		{/if}
	</nav>
</div> -->

{@render children()}
