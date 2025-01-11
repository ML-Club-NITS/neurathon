<script lang="ts">
	import gsap from 'gsap';
	import lottie from 'lottie-web';
	import animationData from '$lib/assets/hover_circle.json';

	let animationContainer: HTMLElement;
	let floatingText: HTMLElement;

	$effect(() => {
		// Lottie Animation
		lottie.loadAnimation({
			container: animationContainer,
			animationData,
			renderer: 'svg',
			loop: true,
			autoplay: true
		});

		// GSAP Floating Animation for Text
		// gsap.to(floatingText, {
		// 	y: '-100px', // Moves the text upwards
		// 	duration: 1.85, // Time for the animation
		// 	ease: 'power1.inOut', // Smooth easing
		// 	repeat: -1, // Infinite loop
		// 	yoyo: true // Reverse back to original
		// 	// repeatDelay: 1,
		// });
	});
</script>

<section class="relative w-full bg-black px-3 py-5 lg:py-10 mb-[-200px]">
	<div class="w-full flex-col items-center justify-items-center">
		<div
			class="mb-[-20px] text-4xl font-semibold uppercase tracking-tighter text-orange-500 sm:mb-[-100px] sm:text-7xl sm:font-bold md:text-8xl"
		>
			<span class="animated-text animate-move-together" style="animation-delay: 0.1s;">N</span>
			<span class="animated-text animate-move-together" style="animation-delay: 0.2s;">e</span>
			<span class="animated-text animate-move-together" style="animation-delay: 0.3s;">u</span>
			<span class="animated-text animate-move-together" style="animation-delay: 0.4s;">r</span>
			<span class="animated-text animate-move-together" style="animation-delay: 0.5s;">a</span>
			<span class="animated-text animate-move-together" style="animation-delay: 0.6s;">t</span>
			<span class="animated-text animate-move-together" style="animation-delay: 0.7s;">h</span>
			<span class="animated-text animate-move-together" style="animation-delay: 0.8s;">o</span>
			<span class="animated-text animate-move-together" style="animation-delay: 0.8s;">n</span>
		</div>
		<div bind:this={animationContainer} class="relative w-fit"></div>
	</div>
</section>


<style>
	/* Optional styling for better visuals */
	.relative {
		position: relative;
	}
	.pointer-events-none {
		pointer-events: none;
	}
</style>
