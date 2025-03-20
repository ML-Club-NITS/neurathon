<script>
	import InteractiveHover from '$lib/components/InteractiveHover.svelte';
</script>

<section id="speakers" class="relative">
	<span
		class="mb-6 flex w-full animate-text-gradient justify-center text-wrap bg-gradient-to-r from-[#ACACAC] via-[#363636] to-[#ACACAC] bg-[200%_auto] bg-clip-text p-2 text-center text-2xl font-bold text-transparent md:text-3xl lg:text-5xl 2xl:text-8xl"
		id="inside_speakers"
	>
		Speakers
	</span>
	<section class="!z-[1000] rounded-md text-white">
		<div class="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
			<div class="flex flex-col-reverse items-center gap-4 sm:gap-8 md:grid md:grid-cols-3">
				<div class="text-center md:col-span-2 md:text-left">
					<span
						><h2 class="text-center text-3xl font-extrabold text-orange-500 sm:text-4xl">
							Swaroop Mishra
						</h2></span
					>
					<p class="mt-4 text-balance px-[5px] text-justify text-lg">
						Swaroop Mishra is a Research Scientist at Google DeepMind, contributing to cutting-edge
						reasoning systems like Gemini. His work has been instrumental in winning a Silver Medal
						at the 2024 International Mathematical Olympiad and advancing state-of-the-art models
						like Gemini, featured at Google IO 2024. Swaroop pioneered instruction-tuning research
						and introduced impactful datasets such as NumGLUE. His doctoral dissertation won
						prestigious awards for its contributions to models like ChatGPT. With numerous patented
						advancements in AI reasoning and self-improvement, he has also co-organized notable
						workshops like MATH-AI at NeurIPS. Swaroop's innovations continually shape user-friendly
						and intelligent large language models for diverse applications.
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
								window.open(
									'https://scholar.google.com/citations?user=-7LK2SwAAAAJ&hl=en',
									'_blank'
								);
							}}
							class="text-3xl text-gray-500 hover:text-orange-500"
						>
							<i class="fi fi-sr-graduation-cap"></i>
						</button>
					</div>
					<span class="mt-8 flex justify-center">
						<InteractiveHover
							text="Join us on Google Meet"
							href="https://meet.google.com/cxr-ahuq-kgq"
						/>
					</span>
				</div>
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
			<div class="flex flex-col-reverse items-center gap-4 sm:gap-8 md:grid md:grid-cols-3">
				<div class="order-1 text-center md:order-2 md:col-span-2 md:text-left">
					<span
						><h2 class="text-center text-3xl font-extrabold text-orange-500 sm:text-4xl">
							Srikanth Vidapanakal
						</h2></span
					>
					<p class="mt-4 text-balance px-[5px] text-justify text-lg">
						Srikanth Vidapanakal, former Director of Artificial Intelligence at Ola Electric and
						affiliated with the Indian School of Business, is an expert in AI, Computer Vision, Deep
						Learning, Robotics, and Optimal Control**. His work spans autonomous driving, ADAS, and
						robotics, with contributions to patents and innovations in depth estimation, trajectory
						generation, and smart mobility. He excels in bridging simulation-to-reality gaps and
						calibration. A versatile technologist, he advances solutions for real-world challenges,
						shaping machine learning and intelligent systems with impactful innovations.
					</p>
					<div class="mt-8 flex justify-center gap-4 md:justify-start">
						<button
							aria-label="LinkedIn"
							onclick={() => {
								window.open(
									'https://www.linkedin.com/in/srikanth-vidapanakal-7463b18/?originalSubdomain=in',
									'_blank'
								);
							}}
							class="text-3xl text-gray-500 hover:text-orange-500"
						>
							<i class="fi fi-brands-linkedin"></i>
						</button>
						<button
							aria-label="Google Scholar"
							onclick={() => {
								window.open(
									'https://scholar.google.com/citations?hl=en&user=rTDlv7cAAAAJ',
									'_blank'
								);
							}}
							class="text-3xl text-gray-500 hover:text-orange-500"
						>
							<i class="fi fi-sr-graduation-cap"></i>
						</button>
					</div>
				</div>
				<div class="order-2 flex justify-center md:order-1">
					<img
						src="https://media.licdn.com/dms/image/v2/C5603AQEOOTTgYnzaMw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1516358346535?e=1747872000&v=beta&t=7zx_YPxNLVx0m_8zHMNIVakD5YjbcuglpCMb92vuRzg"
						alt="Srikanth Vidapanakal"
						class="w-full max-w-[250px] rounded-lg object-cover shadow-md sm:max-w-[300px] md:max-w-none"
					/>
				</div>
			</div>
		</div>
	</section>
	<section class="!z-[1000] rounded-md text-white">
		<div class="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
			<div class="flex flex-col-reverse items-center gap-4 sm:gap-8 md:grid md:grid-cols-3">
				<div class="text-center md:col-span-2 md:text-left">
					<span
						><h2 class="text-center text-3xl font-extrabold text-orange-500 sm:text-4xl">
							Dr. Aakarsh Malhotra
						</h2></span
					>
					<p class="mt-4 text-balance px-[5px] text-justify text-lg">
						Aakarsh Malhotra is a highly accomplished data scientist, serving as the Director of
						Data Science at AI Garage, Mastercard. He holds a Ph.D. from IIIT-Delhi and has
						expertise in Deep Learning, Artificial Intelligence, Computer Vision, and Scalable
						Machine Learning. His notable contributions include advancements in fingerphoto
						authentication, biometric recognition, and privacy-preserving AI. With impactful
						research and numerous publications, he collaborates globally to innovate technology
						solutions, shaping the future of secure and intelligent systems.
					</p>
					<div class="mt-8 flex justify-center gap-4 md:justify-start">
						<button
							aria-label="LinkedIn"
							onclick={() => {
								window.open(
									'https://www.linkedin.com/in/aakarshmalhotra/?originalSubdomain=in',
									'_blank'
								);
							}}
							class="text-3xl text-gray-500 hover:text-orange-500"
						>
							<i class="fi fi-brands-linkedin"></i>
						</button>
						<button
							aria-label="Google Scholar"
							onclick={() => {
								window.open('https://scholar.google.com/citations?user=zr1H6t8AAAAJ', '_blank');
							}}
							class="text-3xl text-gray-500 hover:text-orange-500"
						>
							<i class="fi fi-sr-graduation-cap"></i>
						</button>
					</div>
				</div>
				<div class="flex justify-center">
					<img
						src="https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=zr1H6t8AAAAJ&citpid=2"
						alt="Dr. Aakarsh Malhotra"
						class="w-full max-w-[250px] rounded-lg object-cover shadow-md sm:max-w-[300px] md:max-w-none"
					/>
				</div>
			</div>
		</div>
	</section>
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
