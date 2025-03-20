<script>
	import { goto } from '$app/navigation';
	import InteractiveHover from '$lib/components/InteractiveHover.svelte';
</script>

<span
	class="animate-text-gradient mb-6 flex w-full justify-center text-wrap bg-gradient-to-r from-[#ACACAC] via-[#363636] to-[#ACACAC] bg-[200%_auto] bg-clip-text p-2 text-center text-2xl font-bold text-transparent md:text-3xl lg:text-5xl 2xl:text-8xl"
	id="inside_speakers"
>
	Speakers
</span>
<section class="!z-[1000] rounded-md text-white">
	<div class="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
		<div class="flex flex-col-reverse items-center gap-8 md:grid md:grid-cols-3">
			<!-- Text section (2/3 width, appears below image on small screens) -->
			<div class="text-center md:col-span-2 md:text-left">
				<span
					><h2 class="text-center text-3xl font-extrabold text-orange-500 sm:text-4xl">
						Swaroop Mishra
					</h2></span
				>
				<p class="mt-4 text-balance text-justify text-lg">
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
				<div class="mt-8 flex justify-center gap-4 md:justify-start">
					<button
						aria-label="LinkedIn"
						onclick={() => {
							window.open('https://www.linkedin.com/in/swarooprm7', '_blank');
						}}
						class="text-3xl text-gray-500 hover:text-orange-500"
					>
						<i class="fi fi-brands-linkedin"></i>
					</button>
					<button
						aria-label="Google Scholar"
						onclick={() => {
							window.open('https://scholar.google.com/citations?user=-7LK2SwAAAAJ&hl=en', '_blank');
						}}
						class="text-3xl text-gray-500 hover:text-orange-500"
					>
						<i class="fi fi-sr-graduation-cap"></i>
					</button>
				</div>
				<span class="flex justify-center mt-8">
					<InteractiveHover text="RSVP" />
				</span>
			</div>

			<!-- Image section (1/3 width, appears above text in small screens) -->
			<div class="flex justify-center">
				<img
					src="https://media.licdn.com/dms/image/v2/D5603AQF_umSLpmO7EQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1684046959773?e=1743638400&v=beta&t=xsC5mQZN6_jf3DjNSxe4qnfKcoQNguT4p7UWpH7542s"
					alt="Swaroop Mishra"
					class="w-full max-w-[250px] rounded-lg object-cover shadow-md sm:max-w-[300px] md:max-w-none"
				/>
			</div>
		</div>
	</div>
</section>

<section class="!z-[1000] rounded-md text-white">
	<div class="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
		<div class="flex flex-col-reverse items-center gap-8 md:grid md:grid-cols-3">
			<!-- Text section (2/3 width, appears below image on small screens) -->
			<div class="order-1 text-center md:order-2 md:col-span-2 md:text-left">
				<span
					><h2 class="text-center text-3xl font-extrabold text-orange-500 sm:text-4xl">
						Stefan Lattner
					</h2></span
				>
				<p class="mt-4 text-balance text-justify text-lg">
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
				<div class="mt-8 flex justify-center gap-4 md:justify-start">
					<button
						aria-label="LinkedIn"
						onclick={() => {
							window.open('https://www.linkedin.com/in/stefan-lattner-9ba81a142', '_blank');
						}}
						class="text-3xl text-gray-500 hover:text-orange-500"
					>
						<i class="fi fi-brands-linkedin"></i>
					</button>
					<button
						aria-label="Google Scholar"
						onclick={() => {
							window.open('https://scholar.google.com/citations?user=cu_olT4AAAAJ&hl=de', '_blank');
						}}
						class="text-3xl text-gray-500 hover:text-orange-500"
					>
						<i class="fi fi-sr-graduation-cap"></i>
					</button>
				</div>
			</div>

			<!-- Image section (1/3 width, appears above text in small screens) -->
			<div class="order-2 flex justify-center md:order-1">
				<img
					src="https://media.licdn.com/dms/image/v2/C4D03AQFOFp1f_osyPg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1545233206738?e=1743638400&v=beta&t=4PcGc92e5JAHWYi8Hs6HAf2rvrHe459wX1cnuS3I8D0"
					alt="Stefan Lattner"
					class="w-full max-w-[250px] rounded-lg object-cover shadow-md sm:max-w-[300px] md:max-w-none"
				/>
			</div>
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
