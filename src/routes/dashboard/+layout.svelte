<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/state';
	import { goto } from '$app/navigation';
	import { toast } from '@zerodevx/svelte-toast';

	import GradientAnimation from '$lib/components/ui/GradientAnimation.svelte';

	let { children, data } = $props();
	let { supabase, user, TeamID, profileCompleted } = $derived(data);

	let isMenubarOpen = $state(false);
	let MenuBar = $state<Node | null>(null);
	let isSidebarOpen = $state(false);
	let SideBar = $state<Node | null>(null);
	let active = $state('');

	function handleClickOutside(event: MouseEvent) {
		if (isSidebarOpen && SideBar && !SideBar.contains(event.target as Node)) {
			isSidebarOpen = false;
		}
		if (isMenubarOpen && MenuBar && !MenuBar.contains(event.target as Node)) {
			isMenubarOpen = false;
		}
	}

	function toggleMenuBar(event: MouseEvent) {
		event.stopPropagation();
		isMenubarOpen = !isMenubarOpen;
	}

	function toggleSideBar(event: MouseEvent) {
		event.stopPropagation();
		isSidebarOpen = !isSidebarOpen;
	}

	function handleLinkClick() {
		isSidebarOpen = false;
		isMenubarOpen = false;
	}

	async function signOut() {
		const { error } = await supabase.auth.signOut();

		if (error) {
			toast.push('Error signing out');
		} else {
			goto('/participate');
		}
	}

	$effect(() => {
		active = page.url.pathname;
	});

	onMount(() => {
		document.addEventListener('click', handleClickOutside);
		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	});
</script>

<svelte:head>
	<title>Dashboard - Neurathon</title>
	<meta name="reset" content="true" />
</svelte:head>

<div>
	<!-- Navbar -->
	<nav
		class="fixed start-0 top-0 z-[10000] w-full border-b border-gray-200 bg-white bg-opacity-30 py-1 pl-2 backdrop-blur-md backdrop-filter transition-all duration-300 ease-in-out hover:shadow-lg sm:pl-6 sm:pr-4 dark:border-gray-600 dark:bg-gray-900 dark:bg-opacity-30"
	>
		<div class="mx-auto w-full">
			<div class="flex h-16 w-full items-center justify-between">
				<!-- Menu and Logo -->
				<div class="flex items-center">
					<button
						onclick={toggleSideBar}
						aria-controls="logo-sidebar"
						type="button"
						class="m-1 inline-flex items-center rounded-lg p-1 text-sm text-gray-500 transition-all duration-200 ease-in-out hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 lg:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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
						<img src="/favicon.png" class="m-3 h-11" alt="Logo" />
						<span
							class="self-center text-xl font-semibold text-gray-800 transition-colors duration-200 ease-in-out hover:text-gray-600 dark:text-white dark:hover:text-gray-300"
							>Neurathon</span
						>
					</a>
				</div>

				<!-- User Profile -->
				<div class="relative ml-3 mr-3">
					<button
						onclick={toggleMenuBar}
						class="flex rounded-full bg-gray-800 text-sm transition-all duration-200 ease-in-out hover:ring-4 hover:ring-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:hover:ring-gray-600 dark:focus:ring-gray-600"
						aria-expanded="false"
					>
						<span class="sr-only">Open user menu</span>
						<div
							class="flex h-8 w-8 items-center justify-center rounded-full text-lg font-bold text-white"
						>
							{user?.user_metadata?.name[0]}
						</div>
					</button>
					<div
						bind:this={MenuBar}
						id="dropdown-user"
						class={`absolute ${isMenubarOpen ? '' : 'hidden'} right-0 z-50 mt-2 w-48 divide-y divide-gray-100 rounded-lg bg-white shadow-lg transition-all duration-200 ease-in-out dark:divide-gray-600 dark:bg-gray-700`}
					>
						<div class="px-4 py-3">
							<p class="text-sm text-gray-900 dark:text-white">{user?.user_metadata.name}</p>
							<p class="truncate text-sm font-medium text-gray-500 dark:text-gray-300">
								{user?.user_metadata.email}
							</p>
						</div>
						<ul class="py-1">
							<li>
								<a
									href="/dashboard"
									onclick={handleLinkClick}
									class="block px-4 py-2 text-sm text-gray-700 transition-all duration-200 ease-in-out hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600"
									>Dashboard</a
								>
							</li>
							<li>
								<a
									href="/dashboard/profile"
									onclick={handleLinkClick}
									class="block px-4 py-2 text-sm text-gray-700 transition-all duration-200 ease-in-out hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600"
									>Profile</a
								>
							</li>
							<li>
								<button
									onclick={signOut}
									class="block w-full px-4 py-2 text-left text-sm text-gray-700 transition-all duration-200 ease-in-out hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600"
									>Sign out</button
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
		bind:this={SideBar}
		id="logo-sidebar"
		class={`${isSidebarOpen ? '-translate-x-0' : '-translate-x-full'} fixed top-0 z-10 h-screen w-64 border-r bg-white pt-20 transition-transform duration-300 ease-in-out lg:fixed lg:translate-x-0 dark:border-gray-700 dark:bg-[#141414e9]`}
	>
		<ul class="space-y-2 px-3 font-medium">
			<li>
				<button
					onclick={() => {
						handleLinkClick();
						goto('/');
					}}
					class="inline-flex w-full gap-4 rounded p-2 pl-4 text-left text-gray-900 transition-all duration-200 ease-in-out hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
					><i class="fi fi-rr-home"></i>Home</button
				>
			</li>
			<li>
				<button
					onclick={() => {
						handleLinkClick();
						goto('/dashboard');
					}}
					class="{active == '/dashboard'
						? 'bg-slate-800 hover:bg-slate-700'
						: 'dark:hover:bg-gray-700'} inline-flex w-full gap-4 rounded p-2 pl-4 text-left text-gray-900 hover:bg-gray-100 dark:text-white"
					><i class="fi fi-rr-dashboard"></i>Dashboard</button
				>
			</li>
			{#if !!TeamID}
				<li>
					<button
						onclick={() => {
							handleLinkClick();
							goto('/dashboard/team');
						}}
						class="{active == '/dashboard/team'
							? 'bg-slate-800 hover:bg-slate-700'
							: 'dark:hover:bg-gray-700'} inline-flex w-full gap-4 rounded p-2 pl-4 text-left text-gray-900 hover:bg-gray-100 dark:text-white"
					>
						<i class="fi fi-sr-team-check"></i>Team
					</button>
				</li>
			{:else if profileCompleted}
				<li>
					<button
						onclick={() => {
							handleLinkClick();
							goto('/dashboard/team');
						}}
						class="{active == '/dashboard/team'
							? 'bg-slate-800 hover:bg-slate-700'
							: 'dark:hover:bg-gray-700'} inline-flex w-full gap-4 rounded p-2 pl-4 text-left text-gray-900 hover:bg-gray-100 dark:text-white"
					>
						<i class="fi fi-sr-users-medical"></i>Register Team
					</button>
				</li>
			{/if}
			<li>
				<button
					onclick={() => {
						handleLinkClick();
						goto('/dashboard/profile');
					}}
					class="{active == '/dashboard/profile'
						? 'bg-slate-800 hover:bg-slate-700'
						: 'dark:hover:bg-gray-700'} inline-flex w-full gap-4 rounded p-2 pl-4 text-left text-gray-900 hover:bg-gray-100 dark:text-white"
					><i class="fi fi-sr-user-pen"></i>Profile</button
				>
			</li>
		</ul>
	</aside>

	<!-- Main Content -->
	<GradientAnimation
		gradientBackgroundStart="rgb(0, 0, 0)"
		gradientBackgroundEnd="rgb(0, 0, 0)"
		firstColor="18, 113, 255"
		secondColor="221, 74, 255"
		thirdColor="0, 0, 0"
		fourthColor="200, 50, 50"
		fifthColor="0, 0, 0"
		pointerColor="76, 103, 235"
		size="80%"
		blendingValue="soft-light"
		interactive={true}
		containerClassName="min-h-screen"
	>
		<main
			class="max-h-auto mt-14 flex flex-col flex-wrap items-center gap-4 overflow-hidden p-4 lg:ml-64 lg:flex-row lg:items-start lg:justify-center"
		>
			{@render children()}
		</main>
	</GradientAnimation>
</div>
