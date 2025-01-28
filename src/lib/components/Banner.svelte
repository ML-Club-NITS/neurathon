<script>
	import { Banner } from 'flowbite-svelte';
</script>

<!-- <Skeleton divClass="py-4" />
<ImagePlaceholder divClass="py-4" /> -->

<Banner id="cta-banner" position="absolute" bannerType="cta">
	<a
		href="https://flowbite-svelte.com/"
		class="mb-2 flex items-center border-gray-200 md:mb-0 md:me-4 md:border-e md:pe-4 dark:border-gray-600"
	>
		<img
			src="https://flowbite-svelte.com/images/flowbite-svelte-icon-logo.svg"
			class="me-2 h-6"
			alt="Flowbite Logo"
		/>
		<span class="self-center whitespace-nowrap text-lg font-semibold dark:text-white">Flowbite</span
		>
	</a>
	<p class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
		Build websites even faster with components on top of Tailwind CSS
	</p>
</Banner>
