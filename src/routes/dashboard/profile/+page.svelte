<script lang="ts">
	let { data } = $props();
	let { user } = $derived(data);

	if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
		document.documentElement.classList.add('dark');
	}
</script>

<section class="flex flex-col items-center justify-center min-h-auto bg-neutral-900 p-4 text-neutral-100">
	<nav class="flex w-full max-w-4xl mb-6" aria-label="Breadcrumb">
		<ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
			<li class="inline-flex items-center">
				<a
					href="/"
					class="inline-flex items-center text-sm font-medium text-gray-400 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
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
						class="ms-1 text-sm font-medium text-gray-400 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
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

	<div class="w-full max-w-4xl grid grid-cols-1 gap-6 md:grid-cols-2">
		<div
			class="group relative rounded-xl border border-neutral-800 bg-neutral-800 p-6 shadow-lg transition-transform duration-300 hover:scale-105"
		>
			<div class="space-y-4">
				<h2 class="text-2xl font-bold text-neutral-100">{user?.user_metadata?.name}</h2>
				<div>
					<label for="team-name" class="text-sm font-medium text-neutral-400">Team Name</label>
					<p id="team-name" class="text-neutral-200">{user?.user_metadata?.team_name}</p>
				</div>
				<div>
					<label for="contact-info" class="text-sm font-medium text-neutral-400">Contact Info</label
					>
					<div id="contact-info">
						<p class="text-neutral-200">{user?.email}</p>
						<p class="text-neutral-200">{user?.user_metadata?.phone}</p>
					</div>
				</div>
			</div>
		</div>

		<div
			class="group relative rounded-xl border border-neutral-800 bg-neutral-800 p-6 shadow-lg transition-transform duration-300 hover:scale-105"
		>
			<div class="space-y-4">
				<h2 class="text-2xl font-bold text-neutral-100">{user?.user_metadata?.college_name}</h2>
				<div>
					<label for="college-location" class="text-sm font-medium text-neutral-400">Location</label
					>
					<p id="college-location" class="text-neutral-200">
						{user?.user_metadata?.college_location}
					</p>
				</div>
				<div>
					<label for="course" class="text-sm font-medium text-neutral-400">Course</label>
					<p id="course" class="text-neutral-200">{user?.user_metadata?.course}</p>
				</div>
				<div>
					<label for="additional-info" class="text-sm font-medium text-neutral-400"
						>Additional Info</label
					>
					<p id="additional-info" class="text-neutral-200">
						Enrolled in {user?.user_metadata?.year} year
					</p>
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
</style>