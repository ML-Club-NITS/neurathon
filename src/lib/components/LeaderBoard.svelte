<script lang="ts">
	import { Motion, useMotionValue, useMotionTemplate } from 'svelte-motion';
	// Mouse-following effect
	let mouseX = useMotionValue(0);
	let mouseY = useMotionValue(0);
	let background = useMotionTemplate`
		radial-gradient(300px circle at ${mouseX}px ${mouseY}px, rgba(255, 255, 255, 0.15), transparent 80%)
	`;

	import {
		Table,
		TableBody,
		TableBodyCell,
		TableBodyRow,
		TableHead,
		TableHeadCell
	} from 'flowbite-svelte';

	// Sample data with Rank, Team Name, Points, and Links
	interface Item {
		rank: number;
		teamName: string;
		collegeName: string;
	}

	// export let items: Item[]; // Array of items to display in the leaderboard

	export let items: Item[];

	let currentPage = 1;
	const itemsPerPage = 5;
	let searchQuery = ''; // Search query input by the user

	// Filter items based on the search query
	$: filteredItems = items.filter(
		(item) =>
			item.teamName.toLowerCase().includes(searchQuery.toLowerCase()) ||
			item.collegeName.toLowerCase().includes(searchQuery.toLowerCase())
	);

	// Paginate the filtered items
	$: paginatedItems = filteredItems.slice(
		(currentPage - 1) * itemsPerPage,
		currentPage * itemsPerPage
	);

	// Calculate total pages dynamically
	$: totalPages = Math.ceil(filteredItems.length / itemsPerPage);

	const previousPage = () => {
		if (currentPage > 1) currentPage--;
	};

	const nextPage = () => {
		if (currentPage < totalPages) currentPage++;
	};

	// Generate pagination with dots
	let paginationButtons: (number | string)[] = [];
	$: paginationButtons = [];
	$: {
		if (totalPages > 1) {
			paginationButtons = [1];
			if (currentPage > 3) paginationButtons.push('...');
			if (currentPage > 2) paginationButtons.push(currentPage - 1);
			if (currentPage !== 1 && currentPage !== totalPages) paginationButtons.push(currentPage);
			if (currentPage < totalPages - 1) paginationButtons.push(currentPage + 1);
			if (currentPage < totalPages - 2) paginationButtons.push('...');
			if (totalPages > 1) paginationButtons.push(totalPages);
		}
	}
</script>

<div
	role="presentation"
	onmousemove={(e) => {
		const { left, top } = e.currentTarget.getBoundingClientRect();
		mouseX.set(e.clientX - left);
		mouseY.set(e.clientY - top);
	}}
	class="group relative w-full scroll-m-0 overflow-hidden rounded-md border border-gray-800 bg-gradient-to-r from-indigo-900/[0.3] to-black p-6 text-white opacity-95 shadow-lg backdrop-blur-sm transition-all duration-300 hover:opacity-100"
>
	<Motion
		style={{
			background
		}}
		let:motion
	>
		<div
			use:motion
			class="pointer-events-none absolute -inset-px rounded-md opacity-0 transition-opacity duration-300 group-hover:opacity-75"
		></div>
	</Motion>

	<!-- Title -->
	<h1 class="mb-6 text-center text-2xl font-bold text-white/90">Qualified Teams</h1>

	<!-- Search Input -->
	<div class="mb-6">
		<input
			type="text"
			bind:value={searchQuery}
			placeholder="Search teams..."
			class="w-full rounded-md border border-gray-700 bg-gray-900/50 px-4 py-2 text-white placeholder-gray-500 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
		/>
	</div>

	<!-- Table Container with Horizontal Scroll -->
	<div class="table-da overflow-x-auto">
		<Table hoverable={true} divClass="min-w-[600px] rounded-md overflow-hidden">
			<TableHead theadClass="rounded-md text-white bg-gray-800">
				<TableHeadCell
					class="border border-b-0 border-r-0 border-gray-950 bg-black px-4 py-3 shadow-lg backdrop-blur-sm"
					>ID</TableHeadCell
				>
				<TableHeadCell
					class="border-t border-gray-950 bg-black px-4 py-3 shadow-lg backdrop-blur-sm"
					>Team Name</TableHeadCell
				>
				<TableHeadCell
					class="border border-b-0 border-l-0 border-gray-950 bg-black px-4 py-3 shadow-lg backdrop-blur-sm"
					>College Name</TableHeadCell
				>
			</TableHead>
			<TableBody tableBodyClass="rounded-b-md text-white">
				{#if paginatedItems.length > 0}
					{#each paginatedItems as item}
						<TableBodyRow
							class="transform border border-transparent bg-transparent transition-all duration-300 ease-in-out hover:scale-[1.02] hover:bg-gray-700/50"
						>
							<TableBodyCell class="border border-black bg-black px-4 py-3"
								>{item.rank}</TableBodyCell
							>
							<TableBodyCell class="border-b border-gray-700/50 bg-black px-4 py-3"
								>{item.teamName}</TableBodyCell
							>
							<TableBodyCell class="border border-black bg-black px-4 py-3"
								>{item.collegeName}</TableBodyCell
							>
						</TableBodyRow>
					{/each}
				{:else}
					<TableBodyRow>
						<TableBodyCell colspan={4} class="py-6 text-center text-gray-400"
							>No items found.</TableBodyCell
						>
					</TableBodyRow>
				{/if}
			</TableBody>
		</Table>
	</div>

	<!-- Pagination -->
	<div class="mt-6 flex items-center justify-center space-x-2">
		<button
			class="rounded-md bg-gray-800/50 px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-gray-800/70 disabled:opacity-50 disabled:hover:bg-gray-800/50"
			onclick={previousPage}
			disabled={currentPage === 1}
		>
			{'<'}
		</button>

		<button
			class="rounded-md bg-gray-800/50 px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-gray-800/70 disabled:opacity-50 disabled:hover:bg-gray-800/50"
			onclick={nextPage}
			disabled={currentPage === totalPages}
		>
			{'>'}
		</button>
	</div>

	<span class="text-sm text-red-600">* Order does not indicate rank</span>
</div>
