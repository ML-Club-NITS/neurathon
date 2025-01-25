<script lang="ts">
	import { Motion, useMotionValue, useMotionTemplate } from 'svelte-motion';
	// Mouse-following effect
	let mouseX = useMotionValue(0);
	let mouseY = useMotionValue(0);
	let background = useMotionTemplate`
		radial-gradient(300px circle at ${mouseX}px ${mouseY}px, rgba(255, 255, 255, 0.15), transparent 80%)
	`;

	export let commits;

	let currentPage = 1;
	const itemsPerPage = 5;
	let searchQuery = ''; 

	$: filteredCommits = commits.filter(
		(commit: { committerName: string; commitMessage: string }) =>
			commit.committerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
			commit.commitMessage.toLowerCase().includes(searchQuery.toLowerCase())
	);

	// Paginate the filtered commits
	$: paginatedCommits = filteredCommits.slice(
		(currentPage - 1) * itemsPerPage,
		currentPage * itemsPerPage
	);

	$: totalPages = Math.ceil(filteredCommits.length / itemsPerPage);

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
	class="group relative w-full overflow-hidden rounded-md border border-gray-800 bg-gradient-to-r from-indigo-900/[0.3] to-black p-6 text-white opacity-95 shadow-lg backdrop-blur-sm transition-all duration-300 hover:opacity-100"
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
	<h1 class="mb-6 text-center text-2xl font-bold text-white/90">Latest Changes</h1>

	<!-- Search Input -->
	<div class="mb-6">
		<input
			type="text"
			bind:value={searchQuery}
			placeholder="Search commits..."
			class="w-full rounded-md border border-gray-700 bg-gray-900/50 px-4 py-2 text-white placeholder-gray-500 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
		/>
	</div>

	<!-- Commits List -->
	<div class="space-y-4">
		{#if paginatedCommits.length > 0}
			{#each paginatedCommits as commit}
				<div
					class="transform rounded-md border border-gray-800 bg-gray-900/50 p-4 transition-all duration-300 hover:scale-[1.02] hover:bg-gray-800/50 hover:shadow-lg"
				>
					<div class="flex flex-col pb-2 gap-4 lg:flex-row xl:flex-row items-center justify-between">
						<div class="flex items-center space-x-4">
							<img
								src={commit.committerAvatar}
								alt={commit.committerName}
								class="h-10 w-10 rounded-full border-2 border-gray-700"
							/>
							<div>
								<p class="text-sm font-medium text-gray-300">{commit.committerName}</p>
								<p class="text-xs text-gray-500">{commit.date}</p>
							</div>
						</div>
						<a
							href={commit.commitUrl}
							target="_blank"
							rel="noopener noreferrer"
							class="flex items-center space-x-2 rounded-md bg-indigo-600/50 px-3 py-1.5 text-sm font-medium text-white transition-all duration-300 hover:bg-indigo-600/70"
						>
							<span>View Commit</span>
							<i class="fas fa-external-link-alt text-xs"></i>
						</a>
					</div>
					<p class="mt-3 text-sm text-gray-400">{commit.commitMessage}</p>
				</div>
			{/each}
		{:else}
			<div class="py-6 text-center text-gray-400">No commits found.</div>
		{/if}
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

		{#each paginationButtons as button}
			{#if button === '...'}
				<span class="px-4 py-2 text-gray-400">...</span>
			{:else}
				<button
					class={`rounded-md px-4 py-2 text-sm font-medium transition-all duration-300 ${
						currentPage === button
							? 'bg-indigo-600/70 text-white'
							: 'bg-gray-800/50 text-white hover:bg-gray-800/70'
					}`}
					onclick={() => (currentPage = typeof button === 'number' ? button : currentPage)}
				>
					{button}
				</button>
			{/if}
		{/each}

		<button
			class="rounded-md bg-gray-800/50 px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-gray-800/70 disabled:opacity-50 disabled:hover:bg-gray-800/50"
			onclick={nextPage}
			disabled={currentPage === totalPages}
		>
			{'>'}
		</button>
	</div>
</div>
