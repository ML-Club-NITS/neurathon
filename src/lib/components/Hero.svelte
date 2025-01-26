<script>
	import bubbleGif from '$lib/assets/bubble.gif';
	import { gsap } from 'gsap';

	// GSAP Animation
	$effect(() => {
		gsap.set('*', { visibility: 'visible' });

		let tl = gsap.timeline();
		tl.from('.gif', {
			opacity: 0,
			y: 60,
			duration: 1
		}).from('#Neurathontext,#TagLine', {
			opacity: 0,
			y: 30,
			stagger: 0.4,
			ease: 'back',
			duration: 1
		});
	});
</script>

<div
	class="hero flex h-screen max-h-[996px] w-screen flex-col-reverse items-center justify-center bg-transparent p-6 py-16 md:max-w-7xl md:translate-x-10 md:flex-row md:items-center md:justify-center md:p-12 md:py-16"
>
	<!-- Text Section -->
	<div
		class="text-content flex flex-col items-center space-y-4 text-center md:items-start md:text-left"
	>
		<!-- Title -->
		<div class="neurathon">
			<div
				id="Neurathontext"
				class="animate-text-gradient font-LeagueSpartanFont inline-block bg-gradient-to-r from-white via-gray-400 to-white bg-[200%_auto] bg-clip-text text-4xl font-bold text-transparent md:text-6xl lg:text-8xl"
			>
				Neurathon
			</div>
		</div>
		<!-- Subtitle -->
		<div class=" group relative overflow-hidden text-2xl md:text-3xl lg:text-4xl">
			<span id="TagLine" class="invisible text-neutral-400">AI For Good</span>
		</div>
	</div>

	<!-- GIF Section -->
	<div class="gif flex justify-center">
		<img src={bubbleGif} alt="Bubble Animation" class="h-64 w-auto md:h-80 lg:h-96" />
	</div>
</div>
