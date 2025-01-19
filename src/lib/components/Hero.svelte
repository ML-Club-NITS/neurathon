<script>
	import bubbleGif from '$lib/assets/bubble.gif';
</script>

<div
	class="hero flex h-screen w-screen flex-col-reverse items-center justify-center bg-transparent p-6 py-16 md:max-w-7xl md:translate-x-10 md:flex-row md:items-center md:justify-center md:p-12 md:py-16"
>
	<!-- Text Section -->
	<div
		class="text-content flex flex-col items-center space-y-4 text-center md:items-start md:text-left"
	>
		<!-- Title -->
		<div class="neurathon">
			<span
				class="inline-block animate-text-gradient bg-gradient-to-r from-white via-gray-400 to-white bg-[200%_auto] bg-clip-text font-LeagueSpartanFont text-4xl font-bold text-transparent md:text-6xl lg:text-8xl"
			>
				Neurathon
			</span>
		</div>
		<!-- Subtitle -->
		<div class="group relative overflow-hidden text-2xl md:text-3xl lg:text-4xl">
			<span class="invisible">AI For Good</span>
			<span
				class="absolute left-0 top-0 text-neutral-400 transition-transform duration-500 ease-in-out hover:duration-300 group-hover:-translate-y-full"
			>
				AI For Good
			</span>
			<span
				class="absolute left-0 top-0 translate-y-full text-neutral-400 transition-transform duration-500 ease-in-out hover:duration-300 group-hover:translate-y-0"
			>
				Get Started
			</span>
		</div>
	</div>

	<!-- GIF Section -->
	<div class="gif flex justify-center">
		<img src={bubbleGif} alt="Bubble Animation" class="h-64 w-auto md:h-80 lg:h-96" />
	</div>
</div>
