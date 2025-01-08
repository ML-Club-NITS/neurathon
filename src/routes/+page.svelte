<script lang="ts">
	let { data } = $props();
	let { countries } = $derived(data);
</script>

<h1 class="text-4xl">Welcome to Supabase!</h1>
<ul>
	{#each countries as country}
		<li>{country.name}</li>
	{/each}
</ul>
