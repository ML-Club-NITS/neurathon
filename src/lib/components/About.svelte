<script>
	import { AnimatedShinyText, ShineBorder } from './ui';
	// for bg-grid : please scroll to the bottom of the page to see the bg-grid :  tailwind.config.ts file.

	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	gsap.registerPlugin(ScrollTrigger);

	$effect(() => {
		let tl = gsap.timeline();
		tl.from('#about, #inside_about', {
			opacity: 0,
			scale: 0.97,
			stagger: 1,

			scrollTrigger: {
				trigger: '#about',
				scrub: 1,
				start: '-=440',
				end: '+=10',
				once: true
				// markers: true
			}
		});
	});
</script>

<section
	class="bg-trans flex w-full items-center justify-center border-slate-500 px-5 py-24 md:px-28 md:py-32"
	id="about"
>
	<ShineBorder class="text-center capitalize" color={['#FF5722', '#0883FF']}>
		<div class="my-auto h-fit w-full flex-col" id="inside_about">
			<AnimatedShinyText
				class="inline-flex w-full items-center justify-center transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400"
			>
				<div class="w-fit text-wrap text-2xl font-bold md:text-3xl lg:text-5xl 2xl:text-8xl">
					What is Neurathon?
				</div>
			</AnimatedShinyText>
			<br />
			<p
				class="mb-[50px] mt-[20px] max-w-fit px-2 text-justify text-sm text-gray-300 sm:mt-[50px] md:mb-[20px] md:px-10 md:text-base lg:px-16 lg:text-xl 2xl:text-4xl"
			>
				Neurathon is an innovative AI/ML-based hackathon designed to ignite creativity and foster
				groundbreaking ideas in the field of artificial intelligence and machine learning. This
				event brings together developers, data scientists, and tech enthusiasts from diverse
				backgrounds to solve real-world challenges using cutting-edge technologies. Participants
				will collaborate, code, and create impactful solutions within a dynamic and competitive
				environment. Whether you're a seasoned expert or a curious beginner, Neurathon offers an
				opportunity to learn, innovate, and showcase your skills while shaping the future of AI and
				ML.
			</p>
		</div>
		<!-- <RetroGrid /> -->
	</ShineBorder>
</section>
