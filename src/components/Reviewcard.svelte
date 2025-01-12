<script lang="ts">
	import { cn } from '$lib/utils';

	export let img: string;
	export let name: string;
	// export let username: string;
	// export let body: string;
</script>

<figure
	class={cn(
		'relative w-64 cursor-pointer overflow-hidden rounded-2xl border p-0',
		// light styles
		'border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]',
		// dark styles
		'dark:border-gray-50/[.0] dark:bg-gray-50/[.00] dark:hover:bg-gray-50/[.01]'
	)}
>
	<div class="sponserImg flex items-center justify-center">
		<img src={img} alt={name} class="w-25 h-25" />
	</div>
</figure>
