<script lang="ts">
	import { onMount } from 'svelte';
	import { Motion, useMotionValue, useMotionTemplate } from 'svelte-motion';
	// Mouse-following effect
	let mouseX = useMotionValue(0);
	let mouseY = useMotionValue(0);
	let background = useMotionTemplate`
		radial-gradient(300px circle at ${mouseX}px ${mouseY}px, rgba(255, 255, 255, 0.15), transparent 80%)
	`;

	export let url: string;

	interface Commit {
		committerName: string;
		commitMessage: string;
		commitDate: string;
		committerAvatar: string;
		commitUrl: string;
		committerUrl: string;
	}

	let commits: Commit[] = [];

	let currentPage = 1;
	const itemsPerPage = 5;
	let searchQuery = '';

	async function fetchCommitData(repoUrl: string): Promise<{ commits: Commit[] }> {
		try {
			// Fetch commit data from the GitHub API
			const response = await fetch(repoUrl);
			if (!response.ok) {
				throw new Error(`Failed to fetch data: ${response.status} ${response.statusText}`);
			}

			const userData = await response.json(); // Parse the JSON response

			// Map the GitHub API response to the Commit interface
			const commitData: Commit[] = userData.map((commit: any) => ({
				committerName: commit.commit.committer.name,
				commitMessage: commit.commit.message,
				commitDate: commit.commit.committer.date,
				committerAvatar: commit.author?.avatar_url || '', // Handle cases where author is null
				commitUrl: commit.html_url,
				committerUrl: commit.author?.html_url || '' // Handle cases where author is null
			}));

			return { commits: commitData }; // Return the formatted commit data
		} catch (error) {
			console.error('Error fetching commit data:', error);
			throw error; // Re-throw the error for handling elsewhere
		}
	}

	onMount(async () => {
		try {
			const response = await fetchCommitData(url);
			commits = response.commits;
		} catch (error) {
			console.error('Failed to fetch commit data:', error);
		}
	});

	$: filteredCommits = commits.filter(
		(commit) =>
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
			class="pointer-events-none absolute -inset-px rounded-md opacity-0 transition-opacity duration-300 group-hover:opacity-35"
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
					<div class="flex flex-col items-center justify-between gap-4 pb-2 md:flex-row">
						<div class="flex items-center space-x-4">
							<img
								src={commit.committerAvatar}
								alt={commit.committerName}
								class="h-10 w-10 rounded-full border-2 border-gray-700"
							/>
							<div>
								<p class="text-sm font-medium text-gray-300">{commit.committerName}</p>
								<p class="text-xs text-gray-500">{commit.commitDate}</p>
							</div>
						</div>
						<a
							href={commit.commitUrl}
							target="_blank"
							rel="noopener noreferrer"
							class="flex items-center space-x-2 rounded-md bg-indigo-600/25 px-3 py-1.5 text-sm font-medium text-white transition-all duration-300 hover:bg-indigo-600/55"
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

		<button
			class="rounded-md bg-gray-800/50 px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-gray-800/70 disabled:opacity-50 disabled:hover:bg-gray-800/50"
			onclick={nextPage}
			disabled={currentPage === totalPages}
		>
			{'>'}
		</button>
	</div>
</div>
