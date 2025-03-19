<script>
	import { goto } from '$app/navigation';
    import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	gsap.registerPlugin(ScrollTrigger);

	// $effect(() => {

	// 	// Find the index of the active event
	// 	let tl = gsap.timeline({
	// 		scrollTrigger: {
	// 			trigger: '#timeline',
	// 			start: 'top center',
	// 			end: '-=10',
	// 			scrub: 1,
	// 			once: true
	// 			// markers:true
	// 		}
	// 	});

	// 	// Animate the timeline border growing from 0% to 100%
	// 	tl.fromTo(
	// 		'#full_inside_simpletimeline',
	// 		{ height: '0%' },
	// 		{ height: '80%', duration: 3, ease: 'power2.out' }
	// 	);

	// 	// Fade-in and scale animation for the title and timeline
	// 	tl.from(
	// 		'#timeline, #inside_simpletimeline',
	// 		{
	// 			opacity: 0,
	// 			scale: 0.95,
	// 			duration: 1.2
	// 		},
	// 		'-=0.5'
	// 	); // Overlap this animation slightly
	// });
</script>

<span
	class="mb-6 flex w-full animate-text-gradient justify-center text-wrap bg-gradient-to-r from-[#ACACAC] via-[#363636] to-[#ACACAC] bg-[200%_auto] bg-clip-text p-2 text-center text-2xl font-bold text-transparent md:text-3xl lg:text-5xl 2xl:text-8xl"
	id="inside_simpletimeline"
>
	Speakers
</span>
<section class="!z-[1000] rounded-md text-white" id="timeline">
	<div class="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
		<div class="flex flex-col items-center gap-8 sm:flex-row">
			<div class="order-2 sm:order-1">
				<span
					><h2 class="text-center text-3xl font-extrabold text-orange-500 sm:text-4xl">
						Swaroop Mishra
					</h2></span
				>
				<p class="mt-4 text-lg">
					Swaroop Mishra is a Research Scientist at Google DeepMind, contributing to cutting-edge
					reasoning systems like Gemini. His work has been instrumental in winning a Silver Medal at
					the 2024 International Mathematical Olympiad and advancing state-of-the-art models like
					Gemini, featured at Google IO 2024. Swaroop pioneered instruction-tuning research and
					introduced impactful datasets such as NumGLUE. His doctoral dissertation won prestigious
					awards for its contributions to models like ChatGPT. With numerous patented advancements
					in AI reasoning and self-improvement, he has also co-organized notable workshops like
					MATH-AI at NeurIPS. Swaroop's innovations continually shape user-friendly and intelligent
					large language models for diverse applications.
				</p>
				<div class="mt-8 flex gap-4"></div>
				<!-- svelte-ignore a11y_consider_explicit_label -->
				<button
					onclick={() => {
						window.open('https://www.linkedin.com/in/swarooprm7', '_blank');
					}}
					class="text-3xl text-gray-500 hover:text-orange-500"
				>
					<i class="fi fi-brands-linkedin"></i>
				</button>
				<!-- svelte-ignore a11y_consider_explicit_label -->
				<button
					onclick={() => {
						window.open('https://scholar.google.com/citations?user=-7LK2SwAAAAJ&hl=en', '_blank');
					}}
					class="text-3xl text-gray-500 hover:text-orange-500"
				>
					<i class="fi fi-sr-graduation-cap"></i>
				</button>
			</div>
			<div class="order-1 mt-12 !min-w-[200px] sm:order-2 md:mt-0"></div>
			<img
				src="https://media.licdn.com/dms/image/v2/D5603AQF_umSLpmO7EQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1684046959773?e=1743638400&v=beta&t=xsC5mQZN6_jf3DjNSxe4qnfKcoQNguT4p7UWpH7542s"
				alt="About Us"
				class="rounded-lg object-cover shadow-md"
			/>
		</div>
	</div>
</section>
<section class="!z-[1000] rounded-md text-white">
	<div class="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
		<div class="flex flex-col items-center gap-8 sm:flex-row-reverse">
			<div class="order-2 sm:order-1">
				<span
					><h2 class="text-center text-3xl font-extrabold text-orange-500 sm:text-4xl">
						Stefan Lattner
					</h2></span
				>
				<p class="mt-4 text-lg">
					Stefan Lattner is a Research Leader at Sony Computer Science Laboratories (CSL) in Paris,
					specializing in generative AI for music production, music information retrieval, and
					representation learning. His work focuses on advancing audio synthesis, self-supervised
					learning, and latent diffusion models. With a PhD from Johannes Kepler University, his
					research has explored computational perception of music, including transformation learning
					and relative pitch perception. He has contributed to innovative tools for AI-assisted
					music creation, aiming to enhance human-computer interaction in music. His expertise spans
					generative sequence models, computational short-term memories, and information theory in
					music, shaping the future of digital music production.
				</p>
				<div class="mt-8 flex gap-4">
					<!-- svelte-ignore a11y_consider_explicit_label -->
					<button
						onclick={() => {
							window.open('linkedin.com/in/stefan-lattner-9ba81a142', '_blank');
						}}
						class="text-3xl text-gray-500 hover:text-orange-500"
					>
						<i class="fi fi-brands-linkedin"></i>
					</button>
					<!-- svelte-ignore a11y_consider_explicit_label -->
					<button
						onclick={() => {
							window.open('https://scholar.google.com/citations?user=cu_olT4AAAAJ&hl=de', '_blank');
						}}
						class="text-3xl text-gray-500 hover:text-orange-500"
					>
						<i class="fi fi-sr-graduation-cap"></i>
					</button>
				</div>
			</div>
			<div class="order-1 mt-12 !min-w-[200px] sm:order-2 md:mt-0"></div>
			<img
				src="https://media.licdn.com/dms/image/v2/C4D03AQFOFp1f_osyPg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1545233206738?e=1743638400&v=beta&t=4PcGc92e5JAHWYi8Hs6HAf2rvrHe459wX1cnuS3I8D0"
				alt="About Us"
				class="rounded-lg object-cover shadow-md"
			/>
		</div>
	</div>
</section>

<style>
	@keyframes text-gradient {
		to {
			background-position: 200% center;
		}
	}
	.animate-text-gradient {
		animation: text-gradient 3s linear infinite;
	}
</style>
