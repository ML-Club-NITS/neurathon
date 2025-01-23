<script lang="ts">
	import { goto } from '$app/navigation';

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
	<div
		class="animate-fade-in mt-4 w-full max-w-4xl rounded-xl bg-white p-8 shadow-2xl transition-all duration-300 dark:bg-gray-800"
	>
		<div class="flex flex-col md:flex-row">
			<div class="mb-8 text-center md:mb-0 md:w-1/3">
				<img
					src="https://i.pravatar.cc/300"
					alt=""
					class="mx-auto mb-4 h-48 w-48 rounded-full border-4 border-orange-800 transition-transform duration-300 hover:scale-105 dark:border-orange-900"
				/>
				<h1 class="mb-2 text-2xl font-bold text-orange-800 dark:text-white">John Doe</h1>
				<p class="text-gray-600 dark:text-gray-300">Software Developer</p>
				<button
					onclick={() => goto('/dashboard/profile/update')}
					class="mt-4 rounded-lg bg-orange-800 px-4 py-2 text-white transition-colors duration-300 hover:bg-orange-900"
					>Edit Profile</button
				>
			</div>
			<div class="md:w-2/3 md:pl-8">
				<h2 class="mb-4 text-xl font-semibold text-orange-800 dark:text-white">About Me</h2>
				<p class="mb-6 text-gray-700 dark:text-gray-300">
					Passionate software developer with 5 years of experience in web technologies. I love
					creating user-friendly applications and solving complex problems.
				</p>
				<h2 class="mb-4 text-xl font-semibold text-orange-800 dark:text-white">Skills</h2>
				<div class="mb-6 flex flex-wrap gap-2">
					<span class="rounded-full bg-indigo-100 px-3 py-1 text-sm text-orange-800"
						>JavaScript</span
					>
					<span class="rounded-full bg-indigo-100 px-3 py-1 text-sm text-orange-800">React</span>
					<span class="rounded-full bg-indigo-100 px-3 py-1 text-sm text-orange-800">Node.js</span>
					<span class="rounded-full bg-indigo-100 px-3 py-1 text-sm text-orange-800">Python</span>
					<span class="rounded-full bg-indigo-100 px-3 py-1 text-sm text-orange-800">SQL</span>
				</div>
				<h2 class="mb-4 text-xl font-semibold text-orange-800 dark:text-white">
					Contact Information
				</h2>
				<ul class="space-y-2 text-gray-700 dark:text-gray-300">
					<li class="flex items-center">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="mr-2 h-5 w-5 text-orange-800 dark:text-orange-900"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
							<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
						</svg>
						john.doe@example.com
					</li>
					<li class="flex items-center">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="mr-2 h-5 w-5 text-orange-800 dark:text-orange-900"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
							/>
						</svg>
						+1 (555) 123-4567
					</li>
					<li class="flex items-center">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="mr-2 h-5 w-5 text-orange-800 dark:text-orange-900"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								fill-rule="evenodd"
								d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
								clip-rule="evenodd"
							/>
						</svg>
						San Francisco, CA
					</li>
				</ul>
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
