<script>
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import bubble from '$lib/assets/bubble.gif';
	import { gsap } from 'gsap';

	onMount(() => {
		// GSAP Animation
		gsap.set('*', { visibility: 'visible' });

		let tl = gsap.timeline();
		tl.from('.gif', {
			opacity: 0,
			y: 60,
			duration: 1
		}).from('#Neurathontext,#TagLine,#register', {
			opacity: 0,
			y: 30,
			stagger: 0.4,
			ease: 'back',
			duration: 1
		});
	});
</script>

<div
	class="hero flex h-screen max-h-[996px] w-screen flex-col-reverse items-center justify-center bg-transparent p-6 py-16 md:max-w-7xl md:translate-x-10 md:flex-row md:items-center md:justify-center md:p-12 md:py-16"
>
	<!-- Text Section -->
	<div
		class="text-content flex flex-col items-center space-y-4 text-center md:items-start md:text-left"
	>
		<!-- Title -->
		<div class="neurathon">
			<div
				id="Neurathontext"
				class="inline-block animate-text-gradient bg-gradient-to-r from-white via-gray-400 to-white bg-[200%_auto] bg-clip-text font-LeagueSpartanFont text-4xl font-bold text-transparent md:text-6xl lg:text-8xl"
			>
				Neurathon
			</div>
		</div>
		<!-- Subtitle -->
		<div class="group relative overflow-hidden text-2xl md:text-3xl lg:text-4xl">
			<span id="TagLine" class="invisible text-neutral-400">Innovate with Intelligence</span>
		</div>
		<div class="p-4">
			<div class="invisible flex items-center justify-center" id="register">
				<div class="group relative">
					<button
						onclick={() => {
							goto('/participate');
						}}
						class="relative inline-block cursor-pointer rounded-xl bg-gray-800 p-px font-semibold leading-6 text-white shadow-2xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
					>
						<span
							class="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
						></span>

						<span class="relative z-10 block rounded-xl bg-gray-950 px-6 py-3">
							<div class="relative z-10 flex items-center space-x-2">
								<span class="transition-all duration-500 group-hover:translate-x-1">Register</span>
								<svg
									class="h-6 w-6 transition-transform duration-500 group-hover:translate-x-1"
									data-slot="icon"
									aria-hidden="true"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										clip-rule="evenodd"
										d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
										fill-rule="evenodd"
									></path>
								</svg>
							</div>
						</span>
					</button>
				</div>
			</div>
		</div>
	</div>

	<!-- GIF Section -->
	<div class="gif flex justify-center">
		<img src={bubble} alt="Bubble Animation" class="h-64 w-auto md:h-80 lg:h-96" />
	</div>
</div>
