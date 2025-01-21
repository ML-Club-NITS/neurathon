<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import logo from '$lib/assets/MLClub_vector_logo_large.svg';

	let isNavbarOpen = $state(false);
	let NavBar = $state<Node | null>(null);

	const NavLinks = [
		{ id: 'about', title: 'About' },
		{ id: 'timeline', title: 'Timeline' },
		{ id: 'prizes', title: 'Prizes' },
		{ id: 'sponsors', title: 'Sponsors' },
		{ id: 'faqs', title: 'FAQs' }
	];

	function scrollToSection(event: Event, id: string) {
		event.preventDefault();
		const target = document.getElementById(id);
		if (target) {
			const targetPosition = target.getBoundingClientRect().top + window.scrollY;
			// const navbarHeight = document.querySelector('nav')?.clientHeight || 0;
			// const adjustedPosition = targetPosition - navbarHeight;

			window.scrollTo({
				top: targetPosition,
				behavior: 'smooth'
			});
		}
	}

	function handleClickOutside(event: MouseEvent) {
		if (isNavbarOpen && NavBar && !NavBar.contains(event.target as Node)) {
			isNavbarOpen = false;
		}
	}

	function toggleNavbar(event: MouseEvent) {
		event.stopPropagation();
		isNavbarOpen = !isNavbarOpen;
	}

	function handleLinkClick() {
		isNavbarOpen = false;
	}

	onMount(() => {
		document.addEventListener('click', handleClickOutside);
		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	});
</script>

<nav
	class="fixed start-0 top-0 z-[10000] w-full rounded-sm border-b border-gray-200 bg-white bg-opacity-30 backdrop-blur-md backdrop-filter sm:rounded-none dark:border-gray-600 dark:bg-gray-900 dark:bg-opacity-30"
>
	<div class="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between gap-4 p-4">
		<a
			href="/"
			class="flex cursor-pointer items-center space-x-3 rtl:space-x-reverse"
			onclick={(event) => {
				event.preventDefault();
				handleLinkClick();
				scrollToSection(event, 'home');
			}}
		>
			<img src={logo} class="h-8" alt="ML CLUB NITS" />
		</a>

		<div class="flex space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
			<button
				class="relative rounded-xl bg-orange-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-orange-800 focus:outline-none focus:ring-4 focus:ring-orange-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
				type="button"
				onclick={() => {
					isNavbarOpen = false;
					goto('/participate');
				}}
			>
				Participate
			</button>
			<button
				class="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
				type="button"
				onclick={toggleNavbar}
				aria-controls="navbar-sticky"
				aria-expanded={isNavbarOpen}
			>
				<span class="sr-only">{isNavbarOpen ? 'Close main menu' : 'Open main menu'}</span>
				{#if isNavbarOpen}
					<svg
						class="icon icon-enter-active h-5 w-5"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="2"
						stroke="currentColor"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
					</svg>
				{:else}
					<svg
						class="icon icon-leave-active h-5 w-5"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 17 14"
					>
						<path
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M1 1h15M1 7h15M1 13h15"
						/>
					</svg>
				{/if}
			</button>
		</div>

		<div
			class={`${isNavbarOpen ? '' : 'hidden'} w-full items-center justify-between md:order-1 md:flex md:w-auto`}
			id="navbar-sticky"
			bind:this={NavBar}
		>
			<div
				class="flex flex-col gap-6 rounded-lg border border-gray-100 bg-gray-50 p-6 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-opacity-30 md:p-0 rtl:space-x-reverse dark:border-gray-700 dark:bg-transparent dark:bg-opacity-30 md:dark:bg-opacity-30"
			>
				{#each NavLinks as NavLink}
					<a
						href="/"
						class="block cursor-pointer rounded px-3 py-2 text-center text-gray-900 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
						onclick={(event) => {
							event.preventDefault();
							handleLinkClick();
							scrollToSection(event, NavLink.id);
						}}
					>
						{NavLink.title}
					</a>
				{/each}
			</div>
		</div>
	</div>
</nav>
