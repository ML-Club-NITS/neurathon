<script>
	import AnimatedShinyText from '$lib/utils/AnimatedShinyText.svelte';
	import GridBeam from '$lib/utils/BeamBackground.svelte';
	import RetroGrid from '$lib/utils/RetroGrid.svelte';
	import ShineBorder from '$lib/utils/ShineBorder.svelte';
	// for bg-grid : please scroll to the bottom of the page to see the bg-grid :  tailwind.config.ts file.
</script>

<section class=" flex h-lvh w-full items-center justify-center bg-black md:px-24 px-5 lg:py-1 border-slate-500">
	<ShineBorder
    class="text-center text-2xl font-bold capitalize"
    color={["#FF5722", "#0883FF"]}
  >
		<div class="h-fit w-full flex-col my-auto">
			<AnimatedShinyText
				class="w-full inline-flex items-center justify-center transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400"
			>
				<div class="w-fit text-5xl md:text-7xl font-bold sm:text-6xl text-wrap">About</div>
			</AnimatedShinyText>
			<br>
			<p class="max-w-fit tracking-normal leading-snug sm:text-[22px] text-[15px] text-gray-300 sm:mt-[50px] mt-[20px] mb-[5 0px]">
				Neurathon is an innovative AI/ML-based hackathon designed to ignite creativity and foster
				groundbreaking ideas in the field of artificial intelligence and machine learning. This
				event brings together developers, data scientists, and tech enthusiasts from diverse
				backgrounds to solve real-world challenges using cutting-edge technologies. Participants
				will collaborate, code, and create impactful solutions within a dynamic and competitive
				environment. Whether you're a seasoned expert or a curious beginner, Neurathon offers an
				opportunity to learn, innovate, and showcase your skills while shaping the future of AI and
				ML.
				<span class="text-primary">Register for an event of lifetime</span>
			</p>
		</div>
		<RetroGrid />
	</ShineBorder>
</section>
