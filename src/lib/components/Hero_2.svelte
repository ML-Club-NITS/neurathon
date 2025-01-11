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
		gsap.to(floatingText, {
			y: '-100px', // Moves the text upwards
			duration: 1.85, // Time for the animation
			ease: 'power1.inOut', // Smooth easing
			repeat: -1, // Infinite loop
			yoyo: true // Reverse back to original
			// repeatDelay: 1,
		});
	});
</script>

<section class="relative bg-black px-3 py-5 lg:py-10">
	<div class="grid items-center justify-items-center gap-5 lg:grid-cols-2 tracking-wider">
		<div bind:this={animationContainer} class="relative z-0"></div>
		<div>
			<p
				bind:this={floatingText}
				class="pointer-events-none absolute inset-0 flex items-center justify-center text-4xl font-bold text-orange-600 md:text-7xl"
			>
				Neurathon 3.0
			</p>
		</div>
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
