<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->

<script lang="ts">
	import imgsrc from '$lib/assets/MLClub_vector_logo_large.svg';
	import { goto } from '$app/navigation';
	let isMenuOpen = false;

	// Function to close the menu when clicking outside
	const closeMenu = (event: any) => {
		if (event.target.closest('#navbar-sticky') === null) {
			isMenuOpen = false;
		}
	};
</script>

<nav
	class="fixed start-0 top-0 z-[10000] w-full rounded-sm border-b border-gray-200 bg-white bg-opacity-30 backdrop-blur-md backdrop-filter sm:rounded-none dark:border-gray-600 dark:bg-gray-900 dark:bg-opacity-30"
>
	<div class="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
		<!-- Logo -->
		<a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
			<img src={imgsrc} class="h-8" alt="MLClub NITS Logo" />
		</a>

		<!-- Buttons -->
		<div class="flex space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
			<button
				type="button"
				onclick={() => {
					if (isMenuOpen) {
						isMenuOpen = false; // Close the menu if it's open
					}
					goto('/participate'); // Navigate to the participate route
				}}
				class="relative rounded-xl bg-orange-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-orange-800 focus:outline-none focus:ring-4 focus:ring-orange-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
			>
				Participate
			</button>
			<button
				type="button"
				onclick={() => (isMenuOpen = !isMenuOpen)}
				class="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
				aria-controls="navbar-sticky"
				aria-expanded={isMenuOpen}
			>
				<span class="sr-only">{isMenuOpen ? 'Close main menu' : 'Open main menu'}</span>
				{#if isMenuOpen}
					<!-- Close (cross) icon -->
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
					<!-- Hamburger icon -->
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

		<!-- Menu -->
		<div
			class={`${
				isMenuOpen ? '' : 'hidden'
			} w-full items-center justify-between md:order-1 md:flex md:w-auto`}
			id="navbar-sticky"
			onclick={() => (isMenuOpen = false)}
		>
			<ul
				class="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-6 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-opacity-30 md:p-0 rtl:space-x-reverse dark:border-gray-700 dark:bg-transparent dark:bg-opacity-30 md:dark:bg-opacity-30"
			>
				<li>
					<a
						href="/"
						onclick={() => (isMenuOpen = false)}
						class="block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
					>
						About
					</a>
				</li>
				<li>
					<a
						href="/"
						onclick={() => (isMenuOpen = false)}
						class="block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
					>
						Timeline
					</a>
				</li>
				<li>
					<a
						href="/"
						onclick={() => (isMenuOpen = false)}
						class="block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
					>
						Prizes
					</a>
				</li>
				<li>
					<a
						href="/"
						onclick={() => (isMenuOpen = false)}
						class="block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
					>
						Sponsors
					</a>
				</li>
				<li>
					<a
						href="/"
						onclick={() => (isMenuOpen = false)}
						class="block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
					>
						FAQs
					</a>
				</li>
			</ul>
		</div>
	</div>
</nav>

<div
	role="button"
	aria-label="Close menu"
	tabindex="0"
	class={`${isMenuOpen ? 'block' : 'hidden'} fixed inset-0 bg-black bg-opacity-30`}
	onclick={closeMenu}
	onkeydown={(e) => {
		if (e.key === 'Enter' || e.key === ' ') closeMenu(e);
	}}
></div>


<style>
	.icon {
		transition: transform 0.01s ease;
	}
	.icon-enter {
		transform: rotate(0deg);
	}
	.icon-enter-active {
		transform: rotate(90deg);
	}
	.icon-leave {
		transform: rotate(90deg);
	}
	.icon-leave-active {
		transform: rotate(0deg);
	}
</style>