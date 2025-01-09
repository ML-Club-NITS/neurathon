<script lang="ts">
	let { data } = $props();
</script>

<h1 class="text-4xl">Welcome to Supabase!</h1>
<p>Last fetch Server Time: {data.currentTime}</p>
