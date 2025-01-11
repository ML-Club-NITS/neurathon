<script lang="ts">
	let animationContainer: HTMLElement
	import animationData from '$lib/assets/hover_circle.json'
	import lottie from 'lottie-web'

	$effect(() => {
		lottie.loadAnimation({
			container: animationContainer,
			animationData,
			renderer: 'svg',
			loop: true,
			autoplay: true
		});
	});
</script>

<section class="bg-black px-3 py-5 lg:py-10">
	<div class="grid items-center justify-items-center gap-5 lg:grid-cols-2">
		<div class="order-1 lg:order-1">
			<div bind:this={animationContainer}></div>
		</div>
		<div class="order-2 flex select-none flex-col items-start justify-start gap-4 lg:order-2">
			<p class="text-4xl font-bold text-orange-600 md:text-7xl">Neurathon 3.0</p>
			<p class="text-4xl font-bold md:text-7xl"></p>
			<p class="mt-2 text-sm text-white md:text-lg">For limited time only!</p>

			<button
				type="button"
				class="relative items-start rounded-lg bg-blue-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
				>Register</button
			>
		</div>
	</div>
</section>