<script>
	import { goto } from '$app/navigation';
</script>

<h1
    id="speakers"
	class="flex w-full !animate-text-gradient justify-center text-2xl font-bold text-transparent text-white md:text-3xl lg:text-5xl 2xl:text-8xl"
>
	Speakers
</h1>
<section class="!z-[1000] rounded-md text-white">
	<div class="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
		<div class="flex flex-col items-center gap-8 sm:flex-row">
			<div class="">
				<h2 class="text-3xl font-extrabold text-orange-500 sm:text-4xl">Swaroop Mishra</h2>
				<p class="mt-4 text-lg">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis eros at lacus feugiat
					hendrerit sed ut tortor. Suspendisse et magna quis elit efficitur consequat. Mauris
					eleifend velit a pretium iaculis. Donec sagittis velit et magna euismod, vel aliquet nulla
					malesuada. Nunc pharetra massa lectus, a fermentum arcu volutpat vel.
				</p>
				<div class="mt-8 flex gap-4">
					<button
						onclick={() => {
							window.open('https://www.linkedin.com/in/swarooprm7', "_blank");
						}}
						class="text-2xl text-orange-500"
					>
						<i class="fi fi-brands-linkedin"></i>
					</button>
					<button
						onclick={() => {
							window.open('https://scholar.google.com/citations?user=-7LK2SwAAAAJ&hl=en', "_blank");
						}}
						class="text-2xl text-orange-500"
					>
						<i class="fi fi-sr-graduation-cap"></i>
					</button>
				</div>
			</div>
			<div class="mt-12 md:mt-0 !min-w-[200px]">
				<img
					src="https://media.licdn.com/dms/image/v2/D5603AQF_umSLpmO7EQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1684046959773?e=1743638400&v=beta&t=xsC5mQZN6_jf3DjNSxe4qnfKcoQNguT4p7UWpH7542s"
					alt="About Us"
					class="rounded-lg object-cover shadow-md"
				/>
			</div>
		</div>
	</div>
</section>
<section class="!z-[1000] rounded-md text-white">
	<div class="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
		<div class="flex flex-col items-center gap-8 sm:flex-row-reverse">
			<div class="">
				<h2 class="text-3xl font-extrabold text-orange-500 sm:text-4xl">Stefan Lattner</h2>
				<p class="mt-4 text-lg">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis eros at lacus feugiat
					hendrerit sed ut tortor. Suspendisse et magna quis elit efficitur consequat. Mauris
					eleifend velit a pretium iaculis. Donec sagittis velit et magna euismod, vel aliquet nulla
					malesuada. Nunc pharetra massa lectus, a fermentum arcu volutpat vel.
				</p>
				<div class="mt-8 flex gap-4">
					<button
						onclick={() => {
							window.open('linkedin.com/in/stefan-lattner-9ba81a142', "_blank");
						}}
						class="text-2xl text-orange-500"
					>
						<i class="fi fi-brands-linkedin"></i>
					</button>
					<button
						onclick={() => {
							window.open('https://scholar.google.com/citations?user=cu_olT4AAAAJ', "_blank");
						}}
						class="text-2xl text-orange-500"
					>
						<i class="fi fi-sr-graduation-cap"></i>
					</button>
				</div>
			</div>
			<div class="mt-12 md:mt-0 !min-w-[200px]">
				<img
					src="https://media.licdn.com/dms/image/v2/C4D03AQFOFp1f_osyPg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1545233206738?e=1743638400&v=beta&t=4PcGc92e5JAHWYi8Hs6HAf2rvrHe459wX1cnuS3I8D0"
					alt="About Us"
					class="rounded-lg object-cover shadow-md"
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
