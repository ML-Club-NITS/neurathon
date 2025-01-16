<script>
	import bubbleGif from '$lib/assets/bubble.gif';
</script>

<!-- <section
	class="md:mt-24 mt-16 flex w-full items-center justify-center border-slate-500 bg-black px-5 md:px-20 lg:py-1"
>


</section> -->


<div class="hero flex flex-col-reverse py-16 md:py-16 items-center justify-center md:flex-row md:max-w-7xl md:items-center md:justify-evenly p-6 md:p-12 bg-transparent">
	
	
	<!-- Text Section -->
	<div class="text-content flex flex-col items-center md:items-start text-center md:text-left space-y-4">
		<!-- Title -->
		<div class="neurathon">
			<span
				class="inline-block animate-text-gradient bg-gradient-to-r from-white via-gray-400 to-white bg-[200%_auto] bg-clip-text font-LeagueSpartanFont text-4xl md:text-6xl font-bold text-transparent"
			>
				Neurathon
			</span>
		</div>
		<!-- Subtitle -->
		<div class="relative overflow-hidden group text-2xl md:text-3xl lg:text-4xl">
			<span class="invisible">Text Glitch</span>
			<span
			  class="text-neutral-400 absolute top-0 left-0 group-hover:-translate-y-full transition-transform ease-in-out duration-500 hover:duration-300"
			>
			  Text Glitch
			</span>
			<span
			  class="text-neutral-400 absolute top-0 left-0 translate-y-full group-hover:translate-y-0 transition-transform ease-in-out duration-500 hover:duration-300"
			>
			  Text Glitch
			</span>
		  </div>
		  
	</div>

	<!-- GIF Section -->
	<div class="gif flex justify-center">
		<img src={bubbleGif} alt="Bubble Animation" class="h-64 md:h-80 lg:h-96 w-auto" />
	</div>
</div>

