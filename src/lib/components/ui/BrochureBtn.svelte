<script lang="ts">
	import file from '$lib/assets/brochure.pdf';
</script>

<a
	class="group flex cursor-pointer items-center gap-2 rounded-xl border border-white/10 bg-orange-600 px-4 py-2 text-lg text-white transition-transform duration-300 ease-in-out active:translate-y-0 sm:py-1 dark:text-white"
	href={file}
	download="Neurathon'25 Brochure.pdf"
>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="currentColor"
	>
		<path
			d="M15 4v16.563l-5.281-5.282-1.438 1.438 7 7 .719.687.719-.687 7-7-1.438-1.438-5.281 5.281V4zM7 26v2h18v-2z"
		/>
	</svg>
	<slot />
</a>
