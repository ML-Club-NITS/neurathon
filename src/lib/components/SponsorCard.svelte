<script lang="ts">
	import { cn } from '$lib/utils';

	export let name: string;
	export let img: any;
</script>

<figure
	class={cn(
		'relative flex w-[6rem] cursor-pointer items-center overflow-hidden rounded-2xl border md:w-[13rem] lg:w-[15rem]',
		// light styles
		'border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]',
		// dark styles
		'dark:border-gray-50/[.0] dark:bg-gray-50/[.00] dark:hover:bg-gray-50/[.01]'
	)}
>
	<div class="sponserImg">
		<enhanced:img
			src={img}
			alt={name}
			class="w-25 h-25 grayscale transition duration-300 hover:grayscale-0"
		/>
	</div>
</figure>
