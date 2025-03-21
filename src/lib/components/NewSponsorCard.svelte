<script lang="ts">
	import { cn } from '$lib/utils';

	export let name: string;
	export let img: any;
	export let description: string;
	export let link: string;
</script>

<figure
	class={cn(
		'relative flex w-full max-w-2xl cursor-pointer flex-col items-center gap-4 px-6 py-4 md:flex-row',
		// Removing card-like background
		'border-none bg-transparent'
	)}
>
	<!-- Sponsor Image -->
	<div class="h-32 w-full flex-shrink-0 rounded-md md:h-40 md:w-1/4 lg:w-1/4">
		<img
			src={img}
			alt={name}
			class="h-full w-full rounded-md object-contain grayscale transition duration-300 hover:grayscale-0"
		/>
	</div>

	<!-- Sponsor Info -->
	<div class="flex w-full flex-col justify-between md:w-3/4 lg:w-3/4">
		<!-- <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100">{name}</h3> -->
		<p class="mt-1 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
			{description}
		</p>
		<a
			href={link}
			target="_blank"
			class="mt-2 inline-block self-start text-sm font-medium text-blue-600 hover:underline"
		>
			Visit Official Page
		</a>
	</div>
</figure>
