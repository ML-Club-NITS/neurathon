<script lang="ts">
	import jsonData from '$lib/data/simpletimeline.json';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	gsap.registerPlugin(ScrollTrigger);

	// Function to get current date in YYYY-MM-DD format
	function getCurrentDate() {
		// return '2025-06-15';
		return new Date().toISOString().split('T')[0];
	}
	function getModeClass(mode: string) {
		return mode.toLowerCase() === 'online' ? 'text-green-500' : 'text-red-500';
	}
	// Identify the active event
	let activeIndex: number = $state(-1);

	$effect(() => {
		const today = getCurrentDate();

		// Find the index of the active event
		activeIndex = jsonData.findIndex((event) => today >= event.startDate && today <= event.endDate);

		let tl = gsap.timeline({
			scrollTrigger: {
				trigger: '#timeline',
				start: 'top center',
				end: '-=10',
				scrub: 1,
				once: true
				// markers:true
			}
		});

		// Animate the timeline border growing from 0% to 100%
		tl.fromTo(
			'#full_inside_simpletimeline',
			{ height: '0%' },
			{ height: '80%', duration: 3, ease: 'power2.out' }
		);

		// Fade-in and scale animation for the title and timeline
		tl.from(
			'#timeline, #inside_simpletimeline',
			{
				opacity: 0,
				scale: 0.95,
				duration: 1.2
			},
			'-=0.5'
		); // Overlap this animation slightly
	});
</script>

<section
	class="mb-[200px] ml-4 flex h-auto w-full flex-col items-center justify-center bg-transparent px-2 pt-16 md:my-14 md:mb-[150px] md:px-10"
	id="timeline"
>
	<span
		class="mb-6 flex w-full animate-text-gradient justify-center text-wrap bg-gradient-to-r from-[#ACACAC] via-[#363636] to-[#ACACAC] bg-[200%_auto] bg-clip-text p-2 text-center text-2xl font-bold text-transparent md:text-3xl lg:text-5xl 2xl:text-8xl"
		id="inside_simpletimeline"
	>
		Timeline
	</span>
	<div
		class="flex w-fit flex-col items-center justify-start space-y-6 border-l-4 md:w-4/5"
		id="full_inside_simpletimeline"
	>
		{#each jsonData as event}
			<div class="relative w-full">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 36 36"
					fill="currentColor"
					class="-top-0.5 z-10 -ml-[22px] h-10 w-10 text-orange-500"
				>
					{#if getCurrentDate() > event.endDate}
						<circle cx="18" cy="18" r="9.75" fill="white" stroke-width="6.5" stroke="black" />
						<path
							fill-rule="evenodd"
							d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
							clip-rule="evenodd"
							fill="currentColor"
							transform="translate(6, 6)"
						/>
					{:else}
						<circle cx="18" cy="18" r="9.75" fill="none" stroke="currentColor" stroke-width="4" />
						<circle cx="18" cy="18" r="9" fill="black" />
					{/if}
				</svg>

				<div class="mx-6 -mt-9 !p-4 rounded-xl border-2 border-gray-600 px-2 pb-2">
					<h4 class="text-xl font-bold text-slate-200 sm:text-3xl">{event.title}</h4>
					<div class="mt-2 flex flex-col text-xl text-gray-500 sm:text-2xl">
						<span class={getModeClass(event.mode)}>{event.mode}</span>
						<span>{event.dates}</span>
					</div>
					{#if event.details}
						<p class="mt-2 text-sm text-gray-400 sm:text-lg">{event.details}</p>
					{/if}
					{#if event.schedule}
						<div class="mt-4 sm:text-lg">
							{#each event.schedule as schedule}
								<h5 class="font-semibold text-slate-300">{schedule.day} ({schedule.date})</h5>
								<ul class="ml-4 list-disc text-gray-500">
									{#each schedule.events as item}
										<li class="text-lg">{item}</li>
									{/each}
								</ul>
							{/each}
						</div>
					{/if}
				</div>
			</div>
		{/each}
	</div>
</section>

<style>
	#full_inside_simpletimeline {
		border-left-width: 4px;
		border-image-source: linear-gradient(to bottom, #f30, #f30, #f97316, #000);
		border-image-slice: 1;
	}
</style>
