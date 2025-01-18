<script lang="ts">
	import { GitHistory, LeaderBoard } from '$lib/components';
	function toggleSidebar() {
		const sidebar = document.getElementById('logo-sidebar');
		if (sidebar) {
			sidebar.classList.toggle('-translate-x-full');
		}
	}

	function toggleUserMenu() {
		const dropdown = document.getElementById('dropdown-user');
		if (dropdown) {
			dropdown.classList.toggle('hidden');
		}
	}

	let { data } = $props();
	let { commits } = $derived(data);
	$effect(() => {
		console.log(commits);
	});
</script>

<div>
	<nav
		class="fixed top-0 z-50 w-full border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800"
	>
		<div class="px-3 py-3 lg:px-5 lg:pl-3">
			<div class="flex items-center justify-between">
				<!-- Menu and Logo -->
				<div class="flex items-center">
					<button
						onclick={() => toggleSidebar()}
						aria-controls="logo-sidebar"
						type="button"
						class="inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:ring-2 focus:ring-gray-200 lg:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
					>
						<span class="sr-only">Open sidebar</span>
						<svg
							class="h-6 w-6"
							aria-hidden="true"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								clip-rule="evenodd"
								fill-rule="evenodd"
								d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
							></path>
						</svg>
					</button>
					<a href="/dashboard" class="ms-2 flex">
						<img src="https://flowbite.com/docs/images/logo.svg" class="me-3 h-8" alt="Logo" />
						<span class="self-center text-xl font-semibold text-gray-800 dark:text-white"
							>Brand</span
						>
					</a>
				</div>

				<!-- User Profile -->
				<div class="relative ms-3">
					<button
						onclick={() => toggleUserMenu()}
						class="flex rounded-full bg-gray-800 text-sm focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
						aria-expanded="false"
					>
						<span class="sr-only">Open user menu</span>
						<img
							class="h-8 w-8 rounded-full"
							src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
							alt="User"
						/>
					</button>
					<div
						id="dropdown-user"
						class="absolute right-0 z-50 mt-2 hidden w-48 divide-y divide-gray-100 rounded bg-white shadow dark:divide-gray-600 dark:bg-gray-700"
					>
						<div class="px-4 py-3">
							<p class="text-sm text-gray-900 dark:text-white">Neil Sims</p>
							<p class="truncate text-sm font-medium text-gray-500 dark:text-gray-300">
								neil.sims@flowbite.com
							</p>
						</div>
						<ul class="py-1">
							<li>
								<a
									href="/dashboard"
									class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600"
									>Dashboard</a
								>
							</li>
							<li>
								<a
									href="/dashboard"
									class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600"
									>Settings</a
								>
							</li>
							<li>
								<a
									href="/dashboard"
									class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600"
									>Sign out</a
								>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</nav>

	<!-- Sidebar -->
	<aside
		id="logo-sidebar"
		class="fixed top-0 z-10 h-screen w-64 -translate-x-0 border-r bg-white pt-20 transition-transform lg:fixed lg:translate-x-0 dark:border-gray-700 dark:bg-gray-800"
	>
		<ul class="space-y-2 px-3 font-medium">
			<li>
				<a
					href="/dashboard"
					class="block rounded p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
					>Dashboard</a
				>
			</li>
			<li>
				<a
					href="/dashboard"
					class="block rounded p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
					>Settings</a
				>
			</li>
		</ul>
	</aside>
	<div
		class="left-0 top-0 mt-14 flex flex-col flex-wrap justify-evenly gap-4 p-4 sm:ml-64 lg:flex-row"
	>
		<div class="w-full max-w-[400px] rounded-lg">
			<LeaderBoard />
		</div>
		<!-- <div class="rounded-lg w-full max-w-[400px]">
			<LeaderBoard />
		</div> -->
		<div class="min-w-[400px] max-w-[600px] rounded-lg">
			<GitHistory />
		</div>
	</div>
</div>
