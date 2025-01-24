<script lang="ts">
	import { goto } from '$app/navigation';

	let { data } = $props();
	let { user } = $derived(data);

	// Toggle dark mode based on system preference
	if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
		document.documentElement.classList.add('dark');
	}

	// Add hover effect to skill tags
	const skillTags = document.querySelectorAll('.bg-indigo-100');
	skillTags.forEach((tag) => {
		tag.addEventListener('mouseover', () => {
			tag.classList.remove('bg-indigo-100', 'text-indigo-800');
			tag.classList.add('bg-blue-900', 'text-white');
		});
		tag.addEventListener('mouseout', () => {
			tag.classList.remove('bg-blue-900', 'text-white');
			tag.classList.add('bg-indigo-100', 'text-indigo-800');
		});
	});
</script>

<section class="flex flex-col items-center justify-center">
	<nav class="flex w-full" aria-label="Breadcrumb">
		<ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
			<li class="inline-flex items-center">
				<a
					href="/"
					class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
					aria-label="Home"
				>
					<svg
						class="me-2.5 h-3 w-3"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="currentColor"
						viewBox="0 0 20 20"
					>
						<path
							d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"
						/>
					</svg>
				</a>
			</li>
			<li>
				<div class="flex items-center">
					<svg
						class="mx-1 h-3 w-3 text-gray-400 rtl:rotate-180"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 6 10"
					>
						<path
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="m1 9 4-4-4-4"
						/>
					</svg>
					<a
						href="/dashboard"
						class="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
						>Dashboard</a
					>
				</div>
			</li>
			<li aria-current="page">
				<div class="flex items-center">
					<svg
						class="mx-1 h-3 w-3 text-gray-400 rtl:rotate-180"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 6 10"
					>
						<path
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="m1 9 4-4-4-4"
						/>
					</svg>
					<span class="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400"
						>Profile</span
					>
				</div>
			</li>
		</ol>
	</nav>

	<!-- <div class="w-full text-2xl font-semibold text-white">Profile</div> -->
	<div class="w-full max-w-4xl mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-6">
		<!-- User Profile Card -->
		<div
		  class="group relative rounded-xl bg-neutral-900 border border-neutral-800 p-6 shadow-lg hover:scale-105 transition-transform duration-300"
		>
		  <div class="space-y-4">
			<!-- Name -->
			<h2 class="text-2xl font-bold text-neutral-100">{user?.user_metadata?.name}</h2>
	  
			<!-- Team Name -->
			<div>
			  <label class="text-sm font-medium text-neutral-400">Team Name</label>
			  <p class="text-neutral-200">{user?.user_metadata?.team_name}</p>
			</div>
	  
			<!-- Contact Info -->
			<div>
			  <label class="text-sm font-medium text-neutral-400">Contact Info</label>
			  <p class="text-neutral-200">{user?.email}</p>
			  <p class="text-neutral-200">{user?.user_metadata?.phone}</p>
			</div>
		  </div>
		</div>
	  
		<!-- Education Card -->
		<div
		  class="group relative rounded-xl bg-neutral-900 border border-neutral-800 p-6 shadow-lg hover:scale-105 transition-transform duration-300"
		>
		  <div class="space-y-4">
			<!-- College Name -->
			<h2 class="text-2xl font-bold text-neutral-100">{user?.user_metadata?.college_name}</h2>
	  
			<!-- Location -->
			<div>
			  <label class="text-sm font-medium text-neutral-400">Location</label>
			  <p class="text-neutral-200">{user?.user_metadata?.college_location}</p>
			</div>
	  
			<!-- Course -->
			<div>
			  <label class="text-sm font-medium text-neutral-400">Course</label>
			  <p class="text-neutral-200">{user?.user_metadata?.course}</p>
			</div>
	  
			<!-- Additional Info -->
			<div>
			  <label class="text-sm font-medium text-neutral-400">Additional Info</label>
			  <p class="text-neutral-200">Enrolled in {user?.user_metadata?.year} year</p>
			</div>
		  </div>
		</div>
	  </div>
</section>

<style>
	@keyframes fadeIn {
		from {
			opacity: 0;
			transform: translateY(-10px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
	.animate-fade-in {
		animation: fadeIn 0.5s ease-out forwards;
	}
</style>
