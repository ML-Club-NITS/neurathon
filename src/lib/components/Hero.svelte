<script>
	import BrochureBtn from './ui/BrochureBtn.svelte';
</script>

<section class="min-h-[50vh]">
	<div
		class="flex h-auto w-full flex-wrap-reverse items-center justify-between text-4xl text-white lg:flex-nowrap"
	>
		<div
			class="mt-20 flex h-auto w-full flex-col items-center justify-center text-center lg:ml-20 lg:mt-0 lg:w-auto lg:items-start"
		>
			<div class="text-2xl font-bold md:text-3xl lg:text-5xl 2xl:text-8xl">Neurathon 2025</div>
			<div class="mt-2 text-base font-thin text-gray-400 md:text-lg lg:text-2xl">
				Where Creativity Meets Innovation
			</div>
			<div class="pt-6 text-base font-medium text-gray-400 md:text-lg">
				<BrochureBtn>Download Brochure</BrochureBtn>
			</div>
		</div>
		<div class="flex h-auto w-full justify-center lg:w-auto">
			<!-- <div
				class="absolute h-full w-40 from-black to-transparent bg-blend-lighten md:bg-gradient-to-r"
			></div> -->
			<video src="hero.mp4" autoplay loop class="w-96"></video>
		</div>
	</div>
</section>
