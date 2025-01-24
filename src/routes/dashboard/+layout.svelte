<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { goto } from '$app/navigation';
	import neurathon_logo from '$lib/assets/nurathon_logo.svg';
	let { children } = $props();
	let r1Qualified = true;
	let registered = false;

	let sideRef: HTMLElement | null = null;
	let profRef: HTMLElement | null = null;

	function handleClickOutside(event: MouseEvent) {
		const sidebarButton = document.querySelector('[aria-controls="logo-sidebar"]');
		const profileButton = document.querySelector('[aria-expanded="false"]');

		if (
			(sidebarButton && sidebarButton.contains(event.target as Node)) ||
			(profileButton && profileButton.contains(event.target as Node))
		) {
			return;
		}

		if (sideRef && !sideRef.contains(event.target as Node)) {
			const sidebar = document.getElementById('logo-sidebar');
			if (sidebar) {
				sidebar.classList.add('-translate-x-full');
			}
		}

		if (profRef && !profRef.contains(event.target as Node)) {
			const profbar = document.getElementById('dropdown-user');
			if (profbar) {
				profbar.classList.add('hidden');
			}
		}
	}
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

	onMount(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
        document.removeEventListener('mousedown', handleClickOutside);
    };
});
	let active = $state(1);
	$effect(() => {
		active;
	});
</script>

<svelte:head>
	<meta name="reset" content="true" />
	<title>Dashboard</title>
</svelte:head>

<div>
	<!-- Navbar -->
	<nav
		class="fixed start-0 top-0 z-[10000] w-full border-b border-gray-200 bg-white bg-opacity-30 backdrop-blur-md backdrop-filter transition-all duration-300 ease-in-out hover:shadow-lg dark:border-gray-600 dark:bg-gray-900 dark:bg-opacity-30"
	>
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="flex h-16 items-center justify-between">
				<!-- Menu and Logo -->
				<div class="flex items-center">
					<button
						onclick={() => toggleSidebar()}
						aria-controls="logo-sidebar"
						type="button"
						class="inline-flex items-center rounded-lg p-2 text-sm text-gray-500 transition-all duration-200 ease-in-out hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 lg:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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
					<a href="/dashboard" class="ml-2 flex items-center">
						<img src={neurathon_logo} class="mr-3 h-8" alt="Logo" />
						<span
							class="self-center text-xl font-semibold text-gray-800 transition-colors duration-200 ease-in-out hover:text-gray-600 dark:text-white dark:hover:text-gray-300"
							>Neurathon</span
						>
					</a>
				</div>

				<!-- User Profile -->
				<div class="relative ml-3">
					<button
						onclick={() => toggleUserMenu()}
						class="flex rounded-full bg-gray-800 text-sm transition-all duration-200 ease-in-out hover:ring-4 hover:ring-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:hover:ring-gray-600 dark:focus:ring-gray-600"
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
						bind:this={profRef}
						class="absolute right-0 z-50 mt-2 hidden w-48 divide-y divide-gray-100 rounded-lg bg-white shadow-lg transition-all duration-200 ease-in-out dark:divide-gray-600 dark:bg-gray-700"
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
									class="block px-4 py-2 text-sm text-gray-700 transition-all duration-200 ease-in-out hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600"
									>Dashboard</a
								>
							</li>
							<li>
								<a
									href="/dashboard/profile"
									class="block px-4 py-2 text-sm text-gray-700 transition-all duration-200 ease-in-out hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600"
									>Profile</a
								>
							</li>
							<li>
								<a
									href="/"
									class="block px-4 py-2 text-sm text-gray-700 transition-all duration-200 ease-in-out hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600"
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
		bind:this={sideRef}
		class="fixed top-0 z-10 h-screen w-64 -translate-x-full border-r bg-white pt-20 transition-transform duration-300 ease-in-out lg:fixed lg:translate-x-0 dark:border-gray-700 dark:bg-[#21212196]"
	>
		<ul class="space-y-2 px-3 font-medium">
			<li>
				<button
					onclick={() => goto('/')}
					class="inline-flex w-full gap-4 rounded p-2 pl-4 text-left text-gray-900 transition-all duration-200 ease-in-out hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
					><i class="fi fi-rr-home"></i>Home</button
				>
			</li>
			<li>
				<button
					onclick={() => {
						goto('/dashboard');
						active = 1;
					}}
					class="{active == 1
						? 'bg-slate-500 hover:bg-slate-500'
						: 'dark:hover:bg-gray-700'} inline-flex w-full gap-4 rounded p-2 pl-4 text-left text-gray-900 transition-all duration-200 ease-in-out hover:bg-gray-100 dark:text-white"
					><i class="fi fi-rr-dashboard"></i>Dashboard</button
				>
			</li>
			{#if registered}
				<li>
					<button
						onclick={() => {
							goto('/dashboard/team');
							active = 2;
						}}
						class="{active == 2
							? 'bg-slate-500 hover:bg-slate-500'
							: 'dark:hover:bg-gray-700'} inline-flex w-full gap-4 rounded p-2 pl-4 text-left text-gray-900 transition-all duration-200 ease-in-out hover:bg-gray-100 dark:text-white"
					>
						<i class="fi fi-sr-team-check"></i>Team
					</button>
				</li>
			{:else if r1Qualified}
				<li>
					<button
						onclick={() => {
							goto('/dashboard/team');
							active = 2;
						}}
						class="{active == 2
							? 'bg-slate-500 hover:bg-slate-500'
							: 'dark:hover:bg-gray-700'} inline-flex w-full gap-4 rounded p-2 pl-4 text-left text-gray-900 transition-all duration-200 ease-in-out hover:bg-gray-100 dark:text-white"
					>
						<i class="fi fi-sr-users-medical"></i>Register Team
					</button>
				</li>
			{/if}
			<li>
				<button
					onclick={() => {
						goto('/dashboard/profile');
						active = 3;
					}}
					class="{active == 3
						? 'bg-slate-500 hover:bg-slate-500'
						: 'dark:hover:bg-gray-700'} inline-flex w-full gap-4 rounded p-2 pl-4 text-left text-gray-900 transition-all duration-200 ease-in-out hover:bg-gray-100 dark:text-white"
					><i class="fi fi-sr-user-pen"></i>Profile</button
				>
			</li>
		</ul>
	</aside>

	<!-- Main Content -->
	<main
		class="max-h-auto mt-14 flex flex-col flex-wrap items-center gap-4 overflow-scroll p-4 lg:ml-64 lg:flex-row lg:items-start lg:justify-center"
	>
		{@render children()}
	</main>
</div>
