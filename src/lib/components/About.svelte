<script>
	import GridBeam from '$lib/utils/BeamBackground.svelte';
	import RetroGrid from '$lib/utils/RetroGrid.svelte';
	// for bg-grid : please scroll to the bottom of the page to see the bg-grid :  tailwind.config.ts file.
</script>

<section class="flex h-lvh w-full items-center justify-center bg-black px-3 lg:py-1">
	<div
		class="bg-background relative flex size-full items-center justify-center overflow-hidden rounded-lg border p-20 md:max-w-[80%] md:shadow-xl"
	>
		<div class="grid gap-2">
			<h1 class="max-w-sm text-4xl font-bold text-white sm:text-5xl">What is Neurathon?</h1>
			<p class="max-w-lg text-neutral-500">
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
	</div>
</section>
