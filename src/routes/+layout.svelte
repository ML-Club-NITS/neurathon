<script lang="ts">
	import '@/app.css';

	import { goto, invalidate } from '$app/navigation';
	import { onMount } from 'svelte';
	import { SvelteToast } from '@zerodevx/svelte-toast';

	import { Navbar } from '$lib/components';

	let { data, children } = $props();
	let { session, supabase, user } = $derived(data);

	let url: string;

	onMount(() => {
		url = new URL(window.location.href.replace(/%2B/g, '+')).pathname;
		if (url == '/login') {
			goto('/auth');
		}
		const { data } = supabase.auth.onAuthStateChange((_, newSession) => {
			if (newSession?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth');
			}
		});

		return () => data.subscription.unsubscribe();
	});
</script>

<SvelteToast options={{ reversed: true, intro: { y: 192 } }} />

{#if data.layout === 'dashboard'}
	<div class="dashboard-layout">
		{@render children()}
	</div>
{:else}
	<Navbar isRegistered={!!user} />
	{@render children()}
{/if}

<style>
	:root {
		--toastContainerTop: auto;
		--toastContainerRight: auto;
		--toastContainerBottom: 8rem;
		--toastContainerLeft: calc(50vw - 8rem);
	}
</style>
