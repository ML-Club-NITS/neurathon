<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import logo from '$lib/assets/NNlogo.svg';
	import { gsap } from 'gsap';

	$effect(() => {
		gsap.set('*', { visibility: 'invisible' });

		let tl = gsap.timeline();
		tl.from('#logo-ani,#navbar-sticky', {
			opacity: 0,
			y: -15,
			duration: 1
		});
	});

	let { isRegistered } = $props();

	let navButton = $state({
		title: isRegistered ? 'Dashboard' : 'Login',
		link: isRegistered ? '/dashboard' : '/auth/?type=login'
	});

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
		if (window.location.pathname === '/') {
			const target = document.getElementById(id);
			if (target) {
				const targetPosition = target.getBoundingClientRect().top + window.scrollY;
				window.scrollTo({
					top: targetPosition,
					behavior: 'smooth'
				});
			}
		} else {
			goto('/').then(() => {
				const target = document.getElementById(id);
				if (target) {
					const targetPosition = target.getBoundingClientRect().top + window.scrollY;

					window.scrollTo({
						top: targetPosition,
						behavior: 'smooth'
					});
				}
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
	class="fixed start-0 top-0 z-[10000] w-full rounded-sm border-b pl-2 backdrop-blur-md backdrop-filter sm:rounded-none sm:pl-6 sm:pr-4 border-gray-600 bg-gray-900 bg-opacity-30"
>
	<div class="mx-auto flex flex-wrap items-center justify-between gap-4 p-4" id="logo-ani">
		<a
			href="/"
			class="flex cursor-pointer items-center space-x-3 rtl:space-x-reverse"
			onclick={(event) => {
				event.preventDefault();
				handleLinkClick();
				scrollToSection(event, 'home');
			}}
			aria-label="Home"
		>
			<img src={logo} class="mx-2 h-8 scale-150" alt="ML CLUB NITS" />
		</a>

		<div class="flex space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
			<button
				type="button"
				class="group relative inline-flex min-w-28 items-center justify-center overflow-hidden rounded-xl bg-[#fa7e12] px-6 py-2.5 tracking-tighter text-white"
				onclick={() => {
					isNavbarOpen = false;
					goto(navButton.link);
				}}
			>
				<span
					class="absolute h-0 w-0 rounded-full bg-slate-600 transition-all duration-500 ease-out group-hover:h-56 group-hover:w-56"
				></span>
				<span class="absolute bottom-0 left-0 -ml-2 h-full">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="object-stretch h-full w-auto opacity-100"
						viewBox="0 0 487 487"
					>
						<path
							fill-opacity=".1"
							fill-rule="nonzero"
							fill="#FFF"
							d="M0 .3c67 2.1 134.1 4.3 186.3 37 52.2 32.7 89.6 95.8 112.8 150.6 23.2 54.8 32.3 101.4 61.2 149.9 28.9 48.4 77.7 98.8 126.4 149.2H0V.3z"
						></path>
					</svg>
				</span>
				<span class="absolute right-0 top-0 -mr-3 h-full w-12">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-full w-full object-cover"
						viewBox="0 0 487 487"
					>
						<path
							fill-opacity=".1"
							fill-rule="nonzero"
							fill="#FFF"
							d="M487 486.7c-66.1-3.6-132.3-7.3-186.3-37s-95.9-85.3-126.2-137.2c-30.4-51.8-49.3-99.9-76.5-151.4C70.9 109.6 35.6 54.8.3 0H487v486.7z"
						></path>
					</svg>
				</span>
				<span
					class="absolute inset-0 -mt-1 h-full w-full rounded-lg bg-gradient-to-b from-transparent via-transparent to-gray-200 opacity-30"
				></span>
				<span class="text-md relative font-semibold">{navButton.title}</span>
			</button>
			<button
				class="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm focus:outline-none focus:ring-2 md:hidden text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
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
				class="flex flex-col gap-6 rounded-lg border bg-gray-50 p-6 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:p-0 rtl:space-x-reverse border-gray-700 bg-transparent bg-opacity-30 md:bg-opacity-30"
			>
				{#each NavLinks as NavLink}
					<a
						href="/"
						class="block cursor-pointer rounded px-3 py-2 text-center md:p-0 border-gray-700 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent md:hover:text-orange-400"
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
