<script>
	let { children } = $props();
</script>

<svelte:head>
	<meta name="reset" content="true" />
	<title>Dashboard</title>
</svelte:head>

<main>
	{@render children()}
</main>
