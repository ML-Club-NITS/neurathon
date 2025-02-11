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

	const seo = {
		title: 'Neurathon - Innovate with Intelligence',
		description:
			'Join Neurathon, the ultimate AI/ML hackathon! Collaborate globally, solve real-world challenges, and shape the future of AI and Machine Learning.',
		keywords:
			'Neurathon, AI hackathon, Machine Learning hackathon, ML competition, AI innovation, data science hackathon, coding competition, AI challenges, ML projects, hackathon 2025, Neurathon registration, AI developers, ML enthusiasts, Neurathon prizes, Neurathon winners',
		ogImage:
			'https://res.cloudinary.com/db7rduqjv/image/upload/v1737929627/neurathon/fvy4voyecxfotlr61ts3.png'
	};
</script>

<svelte:head>
	<meta name="description" content={seo.description} />
	<meta name="keywords" content={seo.keywords} />
	<meta property="og:title" content={seo.title} />
	<meta property="og:description" content={seo.description} />
	<meta property="og:image" content={seo.ogImage} />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="Neurathon - Innovate with Intelligence" />
	<meta property="og:url" content="https://neurathon.mlclubnits.com/" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={seo.title} />
	<meta name="twitter:description" content={seo.description} />
	<meta name="twitter:image" content={seo.ogImage} />
	<meta name="twitter:image:alt" content="Neurathon - Innovate with Intelligence" />
	<meta name="twitter:site" content="@neurathon" />
	<meta name="twitter:creator" content="@neurathon" />
</svelte:head>

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
