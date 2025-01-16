<script>
	import { AnimatedShinyText, RetroGrid, ShineBorder } from './ui';
	// for bg-grid : please scroll to the bottom of the page to see the bg-grid :  tailwind.config.ts file.
</script>

<section
	class="mt-16 flex w-full items-center justify-center border-slate-500 bg-black px-5 md:mt-24 md:px-24 lg:py-1"
>
	<ShineBorder
		class="py-6 text-center text-2xl font-bold capitalize"
		color={['#FF5722', '#0883FF']}
	>
		<div class="my-auto h-fit w-full flex-col">
			<AnimatedShinyText
				class="inline-flex w-full items-center justify-center transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400"
			>
				<div class="w-fit text-wrap text-5xl font-bold sm:text-6xl md:text-7xl">About</div>
			</AnimatedShinyText>
			<br />
			<p
				class="mb-[50px] mt-[20px] max-w-fit px-2 text-justify text-[15px] leading-snug tracking-normal text-gray-300 sm:mt-[50px] sm:text-[22px] md:mb-[20px] md:px-10 lg:px-16"
			>
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
