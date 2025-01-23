<script lang="ts">
	import { Motion, useMotionValue, useMotionTemplate } from 'svelte-motion';
	// Mouse-following effect
	let mouseX = useMotionValue(0);
	let mouseY = useMotionValue(0);
	let background = useMotionTemplate`
		radial-gradient(200px circle at ${mouseX}px ${mouseY}px, rgba(255, 255, 255, 0.1), transparent 80%)
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
	let items = [
		{
			rank: 1,
			teamName: 'Team Alpha',
			points: 1500,
			gitRepoLink: 'https://github.com/team-alpha',
			deploymentLink: 'https://team-alpha.com'
		},
		{
			rank: 2,
			teamName: 'Team Beta',
			points: 1400,
			gitRepoLink: 'https://github.com/team-beta',
			deploymentLink: ''
		},
		{
			rank: 3,
			teamName: 'Team Gamma',
			points: 1300,
			gitRepoLink: 'https://github.com/team-gamma',
			deploymentLink: 'https://team-gamma.com'
		},
		{
			rank: 4,
			teamName: 'Team Delta',
			points: 1200,
			gitRepoLink: 'https://github.com/team-delta',
			deploymentLink: ''
		},
		{
			rank: 5,
			teamName: 'Team Epsilon',
			points: 1100,
			gitRepoLink: 'https://github.com/team-epsilon',
			deploymentLink: 'https://team-epsilon.com'
		},
		{
			rank: 6,
			teamName: 'Team Zeta',
			points: 1000,
			gitRepoLink: 'https://github.com/team-zeta',
			deploymentLink: ''
		},
		{
			rank: 7,
			teamName: 'Team Eta',
			points: 900,
			gitRepoLink: 'https://github.com/team-eta',
			deploymentLink: 'https://team-eta.com'
		},
		{
			rank: 8,
			teamName: 'Team Theta',
			points: 800,
			gitRepoLink: 'https://github.com/team-theta',
			deploymentLink: ''
		},
		{
			rank: 9,
			teamName: 'Team Iota',
			points: 700,
			gitRepoLink: 'https://github.com/team-iota',
			deploymentLink: 'https://team-iota.com'
		},
		{
			rank: 10,
			teamName: 'Team Kappa',
			points: 600,
			gitRepoLink: 'https://github.com/team-kappa',
			deploymentLink: ''
		},
		{
			rank: 11,
			teamName: 'Team Lambda',
			points: 500,
			gitRepoLink: 'https://github.com/team-lambda',
			deploymentLink: 'https://team-lambda.com'
		},
		{
			rank: 12,
			teamName: 'Team Mu',
			points: 400,
			gitRepoLink: 'https://github.com/team-mu',
			deploymentLink: ''
		},
		{
			rank: 13,
			teamName: 'Team Nu',
			points: 300,
			gitRepoLink: 'https://github.com/team-nu',
			deploymentLink: 'https://team-nu.com'
		},
		{
			rank: 14,
			teamName: 'Team Xi',
			points: 200,
			gitRepoLink: 'https://github.com/team-xi',
			deploymentLink: ''
		},
		{
			rank: 15,
			teamName: 'Team Omicron',
			points: 100,
			gitRepoLink: 'https://github.com/team-omicron',
			deploymentLink: 'https://team-omicron.com'
		},
		{
			rank: 16,
			teamName: 'Team Pi',
			points: 90,
			gitRepoLink: 'https://github.com/team-pi',
			deploymentLink: ''
		},
		{
			rank: 17,
			teamName: 'Team Rho',
			points: 80,
			gitRepoLink: 'https://github.com/team-rho',
			deploymentLink: 'https://team-rho.com'
		},
		{
			rank: 18,
			teamName: 'Team Sigma',
			points: 70,
			gitRepoLink: 'https://github.com/team-sigma',
			deploymentLink: ''
		},
		{
			rank: 19,
			teamName: 'Team Tau',
			points: 60,
			gitRepoLink: 'https://github.com/team-tau',
			deploymentLink: 'https://team-tau.com'
		},
		{
			rank: 20,
			teamName: 'Team Upsilon',
			points: 50,
			gitRepoLink: 'https://github.com/team-upsilon',
			deploymentLink: ''
		},
		{
			rank: 21,
			teamName: 'Team Phi',
			points: 40,
			gitRepoLink: 'https://github.com/team-phi',
			deploymentLink: 'https://team-phi.com'
		},
		{
			rank: 22,
			teamName: 'Team Chi',
			points: 30,
			gitRepoLink: 'https://github.com/team-chi',
			deploymentLink: ''
		},
		{
			rank: 23,
			teamName: 'Team Psi',
			points: 20,
			gitRepoLink: 'https://github.com/team-psi',
			deploymentLink: 'https://team-psi.com'
		},
		{
			rank: 24,
			teamName: 'Team Omega',
			points: 10,
			gitRepoLink: 'https://github.com/team-omega',
			deploymentLink: ''
		},
		{
			rank: 25,
			teamName: 'Team Alpha1',
			points: 1500,
			gitRepoLink: 'https://github.com/team-alpha1',
			deploymentLink: 'https://team-alpha1.com'
		},
		{
			rank: 26,
			teamName: 'Team Beta1',
			points: 1400,
			gitRepoLink: 'https://github.com/team-beta1',
			deploymentLink: ''
		},
		{
			rank: 27,
			teamName: 'Team Gamma1',
			points: 1300,
			gitRepoLink: 'https://github.com/team-gamma1',
			deploymentLink: 'https://team-gamma1.com'
		},
		{
			rank: 28,
			teamName: 'Team Delta1',
			points: 1200,
			gitRepoLink: 'https://github.com/team-delta1',
			deploymentLink: ''
		},
		{
			rank: 29,
			teamName: 'Team Epsilon1',
			points: 1100,
			gitRepoLink: 'https://github.com/team-epsilon1',
			deploymentLink: 'https://team-epsilon1.com'
		},
		{
			rank: 30,
			teamName: 'Team Zeta1',
			points: 1000,
			gitRepoLink: 'https://github.com/team-zeta1',
			deploymentLink: ''
		},
		{
			rank: 31,
			teamName: 'Team Eta1',
			points: 900,
			gitRepoLink: 'https://github.com/team-eta1',
			deploymentLink: 'https://team-eta1.com'
		},
		{
			rank: 32,
			teamName: 'Team Theta1',
			points: 800,
			gitRepoLink: 'https://github.com/team-theta1',
			deploymentLink: ''
		},
		{
			rank: 33,
			teamName: 'Team Iota1',
			points: 700,
			gitRepoLink: 'https://github.com/team-iota1',
			deploymentLink: 'https://team-iota1.com'
		},
		{
			rank: 34,
			teamName: 'Team Kappa1',
			points: 600,
			gitRepoLink: 'https://github.com/team-kappa1',
			deploymentLink: ''
		},
		{
			rank: 35,
			teamName: 'Team Lambda1',
			points: 500,
			gitRepoLink: 'https://github.com/team-lambda1',
			deploymentLink: 'https://team-lambda1.com'
		},
		{
			rank: 36,
			teamName: 'Team Mu1',
			points: 400,
			gitRepoLink: 'https://github.com/team-mu1',
			deploymentLink: ''
		},
		{
			rank: 37,
			teamName: 'Team Nu1',
			points: 300,
			gitRepoLink: 'https://github.com/team-nu1',
			deploymentLink: 'https://team-nu1.com'
		},
		{
			rank: 38,
			teamName: 'Team Xi1',
			points: 200,
			gitRepoLink: 'https://github.com/team-xi1',
			deploymentLink: ''
		},
		{
			rank: 39,
			teamName: 'Team Omicron1',
			points: 100,
			gitRepoLink: 'https://github.com/team-omicron1',
			deploymentLink: 'https://team-omicron1.com'
		},
		{
			rank: 40,
			teamName: 'Team Pi1',
			points: 90,
			gitRepoLink: 'https://github.com/team-pi1',
			deploymentLink: ''
		},
		{
			rank: 41,
			teamName: 'Team Rho1',
			points: 80,
			gitRepoLink: 'https://github.com/team-rho1',
			deploymentLink: 'https://team-rho1.com'
		},
		{
			rank: 42,
			teamName: 'Team Sigma1',
			points: 70,
			gitRepoLink: 'https://github.com/team-sigma1',
			deploymentLink: ''
		},
		{
			rank: 43,
			teamName: 'Team Tau1',
			points: 60,
			gitRepoLink: 'https://github.com/team-tau1',
			deploymentLink: 'https://team-tau1.com'
		},
		{
			rank: 44,
			teamName: 'Team Upsilon1',
			points: 50,
			gitRepoLink: 'https://github.com/team-upsilon1',
			deploymentLink: ''
		},
		{
			rank: 45,
			teamName: 'Team Phi1',
			points: 40,
			gitRepoLink: 'https://github.com/team-phi1',
			deploymentLink: 'https://team-phi1.com'
		},
		{
			rank: 46,
			teamName: 'Team Chi1',
			points: 30,
			gitRepoLink: 'https://github.com/team-chi1',
			deploymentLink: ''
		},
		{
			rank: 47,
			teamName: 'Team Psi1',
			points: 20,
			gitRepoLink: 'https://github.com/team-psi1',
			deploymentLink: 'https://team-psi1.com'
		},
		{
			rank: 48,
			teamName: 'Team Omega1',
			points: 10,
			gitRepoLink: 'https://github.com/team-omega1',
			deploymentLink: ''
		},
		{
			rank: 49,
			teamName: 'Team Alpha2',
			points: 1500,
			gitRepoLink: 'https://github.com/team-alpha2',
			deploymentLink: 'https://team-alpha2.com'
		},
		{
			rank: 50,
			teamName: 'Team Beta2',
			points: 1400,
			gitRepoLink: 'https://github.com/team-beta2',
			deploymentLink: ''
		}
	];

	let currentPage = 1;
	const itemsPerPage = 5;
	let searchQuery = ''; // Search query input by the user

	// Filter items based on the search query
	$: filteredItems = items.filter(
		(item) =>
			item.teamName.toLowerCase().includes(searchQuery.toLowerCase()) ||
			String(item.points).includes(searchQuery)
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
	class="group relative w-full overflow-hidden overflow-x-scroll rounded-md border border-gray-800 bg-gradient-to-r from-indigo-900/[0.3] to-black p-4 text-white opacity-95 shadow-sm backdrop-blur-sm transition-all duration-300 hover:opacity-100"
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

	<!-- Search Input -->
	<div class="mb-4 text-center text-xl font-bold">LeaderBoard</div>

	<!-- Table -->
	<div class="table-da">
		<Table hoverable={true} divClass="w-[initial] rounded-md overflow-hidden">
			<TableHead theadClass="rounded-md text-white bg-gray-800">
				<TableHeadCell
					class="rounded-tl-md border border-b-0 border-r-0 border-gray-950 bg-black px-4 py-3 shadow-lg backdrop-blur-sm "
					>Rank</TableHeadCell
				>
				<TableHeadCell
					class="border-t border-gray-950 bg-black px-4 py-3 shadow-lg backdrop-blur-sm"
					>Team Name</TableHeadCell
				>
				<TableHeadCell
					class="border-t border-gray-950 bg-black px-4 py-3 shadow-lg backdrop-blur-sm"
					>Points</TableHeadCell
				>
				<TableHeadCell
					class="rounded-tr-md border border-b-0 border-l-0 border-gray-950 bg-black px-4 py-3 shadow-lg backdrop-blur-sm"
					>Link</TableHeadCell
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
							<TableBodyCell class="border-b border-gray-700/50 bg-black px-4 py-3"
								>{item.points}</TableBodyCell
							>
							<TableBodyCell class="border border-black bg-black px-4 py-3">
								{#if item.deploymentLink}
									<a
										href={item.deploymentLink}
										target="_blank"
										rel="noopener noreferrer"
										class="text-blue-400 hover:text-blue-300">Deployment Link</a
									>
								{:else}
									<a
										href={item.gitRepoLink}
										target="_blank"
										rel="noopener noreferrer"
										class="text-blue-400 hover:text-blue-300">Git Repo Link</a
									>
								{/if}
							</TableBodyCell>
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
	<div class="mt-4 flex items-center justify-center space-x-2">
		<button
			class="rounded bg-black/25 px-4 py-2 text-white transition-all duration-300 hover:bg-black/100"
			onclick={previousPage}
			disabled={currentPage === 1}
		>
			{'<'}
		</button>

		<!-- {#each paginationButtons as button}
			{#if button === '...'}
				<span class="px-4 py-2">...</span>
			{:else}
				<button
					class={`rounded px-4 py-2 ${
						currentPage === button ? 'bg-black/95 text-white' : 'bg-black/25 transition-all duration-300 hover:bg-black/95'
					}`}
					onclick={() => (currentPage = typeof button === 'number' ? button : currentPage)}
				>
					{button}
				</button>
			{/if}
		{/each} -->

		<button
			class="rounded bg-black/25 px-4 py-2 text-white transition-all duration-300 hover:bg-black/95"
			onclick={nextPage}
			disabled={currentPage === totalPages}
		>
			{'>'}
		</button>
	</div>
</div>
