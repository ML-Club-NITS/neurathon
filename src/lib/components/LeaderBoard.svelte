<script lang="ts">
	import {
		Table,
		TableBody,
		TableBodyCell,
		TableBodyRow,
		TableHead,
		TableHeadCell
	} from 'flowbite-svelte';

	let items = [
		{ Rank: 1, Team: 'Toyota', type: 'ABC', make: 2017 },
		{ Rank: 2, Team: 'Ford', type: 'CDE', make: 2018 },
		{ Rank: 3, Team: 'Volvo', type: 'FGH', make: 2019 },
		{ Rank: 4, Team: 'Saab', type: 'IJK', make: 2020 },
		{ Rank: 5, Team: 'Audi', type: 'LMN', make: 2021 },
		{ Rank: 6, Team: 'BMW', type: 'OPQ', make: 2022 },
		{ Rank: 7, Team: 'Mercedes', type: 'RST', make: 2023 },
		{ Rank: 8, Team: 'Volkswagen', type: 'UVW', make: 2024 },
		{ Rank: 9, Team: 'Honda', type: 'XYZ', make: 2025 },
		{ Rank: 10, Team: 'Nissan', type: '123', make: 2026 },
		{ Rank: 11, Team: 'Chevrolet', type: '456', make: 2027 },
		{ Rank: 12, Team: 'Hyundai', type: '789', make: 2028 },
		{ Rank: 13, Team: 'Kia', type: '101112', make: 2029 },
		{ Rank: 14, Team: 'Mazda', type: '131415', make: 2030 },
		{ Rank: 15, Team: 'Subaru', type: '161718', make: 2031 },
		{ Rank: 16, Team: 'Porsche', type: '192021', make: 2032 },
		{ Rank: 17, Team: 'Lexus', type: '222324', make: 2033 },
		{ Rank: 18, Team: 'Acura', type: '252627', make: 2034 },
		{ Rank: 19, Team: 'Infiniti', type: '282930', make: 2035 },
		{ Rank: 20, Team: 'Buick', type: '313233', make: 2036 },
		{ Rank: 21, Team: 'Cadillac', type: '343536', make: 2037 },
		{ Rank: 22, Team: 'GMC', type: '373839', make: 2038 },
		{ Rank: 23, Team: 'Jeep', type: '404142', make: 2039 },
		{ Rank: 24, Team: 'Land Rover', type: '434445', make: 2040 },
		{ Rank: 25, Team: 'Lincoln', type: '464748', make: 2041 },
		{ Rank: 26, Team: 'Mitsubishi', type: '495051', make: 2042 },
		{ Rank: 27, Team: 'Ram', type: '525354', make: 2043 },
		{ Rank: 28, Team: 'Tesla', type: '555657', make: 2044 },
		{ Rank: 29, Team: 'Chrysler', type: '585960', make: 2045 },
		{ Rank: 30, Team: 'Dodge', type: '616263', make: 2046 },
		{ Rank: 31, Team: 'Fiat', type: '646566', make: 2047 },
		{ Rank: 32, Team: 'Jaguar', type: '676869', make: 2048 },
		{ Rank: 33, Team: 'Mini', type: '707172', make: 2049 },
		{ Rank: 34, Team: 'Smart', type: '737475', make: 2050 },
		{ Rank: 35, Team: 'Volvo', type: '767778', make: 2051 },
		{ Rank: 36, Team: 'Audi', type: '798081', make: 2052 },
		{ Rank: 37, Team: 'BMW', type: '828384', make: 2053 },
		{ Rank: 38, Team: 'Mercedes', type: '858687', make: 2054 },
		{ Rank: 39, Team: 'Volkswagen', type: '888990', make: 2055 },
		{ Rank: 40, Team: 'Honda', type: '919293', make: 2056 },
		{ Rank: 41, Team: 'Nissan', type: '949596', make: 2057 },
		{ Rank: 42, Team: 'Chevrolet', type: '979899', make: 2058 },
		{ Rank: 43, Team: 'Hyundai', type: '100101102', make: 2059 },
		{ Rank: 44, Team: 'Kia', type: '103104105', make: 2060 },
		{ Rank: 45, Team: 'Mazda', type: '106107108', make: 2061 },
		{ Rank: 46, Team: 'Subaru', type: '109110111', make: 2062 },
		{ Rank: 47, Team: 'Porsche', type: '112113114', make: 2063 },
		{ Rank: 48, Team: 'Lexus', type: '115116117', make: 2064 },
		{ Rank: 49, Team: 'Acura', type: '118119120', make: 2065 },
		{ Rank: 50, Team: 'Infiniti', type: '121122123', make: 2066 }
	];

	let currentPage = 1;
	const itemsPerPage = 5;
	let searchQuery = ''; // Search query input by the user

	// Filter items based on the search query
	$: filteredItems = items.filter(
		(item) =>
			item.Team.toLowerCase().includes(searchQuery.toLowerCase()) ||
			item.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
			String(item.make).includes(searchQuery)
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

<div class="w-full overflow-x-scroll rounded-md bg-gray-800 p-4 text-white">
	<!-- Search Input -->
	<div class="mb-4 text-center text-xl font-bold">LeaderBoard</div>

	<!-- Table -->
	<Table hoverable={true} divClass="w-[initial] rounded-md">
		<TableHead theadClass="rounded-md">
			<TableHeadCell class="rounded-tl-md">Rank</TableHeadCell>
			<TableHeadCell>Team Name</TableHeadCell>
			<TableHeadCell>Type</TableHeadCell>
		</TableHead>
		<TableBody tableBodyClass="rounded-b-md">
			{#if paginatedItems.length > 0}
				{#each paginatedItems as item}
					<TableBodyRow>
						<TableBodyCell class="">{item.Rank}</TableBodyCell>
						<TableBodyCell class="">{item.Team}</TableBodyCell>
						<TableBodyCell class="">{item.type}</TableBodyCell>
					</TableBodyRow>
				{/each}
			{:else}
				<TableBodyRow>
					<TableBodyCell colspan={4} class="text-center">No items found.</TableBodyCell>
				</TableBodyRow>
			{/if}
		</TableBody>
	</Table>

	<!-- Pagination -->
	<div class="mt-4 flex items-center justify-center space-x-2">
		<button
			class="rounded bg-blue-500 px-4 py-2 text-white"
			onclick={previousPage}
			disabled={currentPage === 1}
		>
			Previous
		</button>

		{#each paginationButtons as button}
			{#if button === '...'}
				<span class="px-4 py-2">...</span>
			{:else}
				<button
					class={`rounded px-4 py-2 ${
						currentPage === button ? 'bg-blue-700 text-white' : 'bg-gray-200'
					}`}
					onclick={() => (currentPage = typeof button === 'number' ? button : currentPage)}
				>
					{button}
				</button>
			{/if}
		{/each}

		<button
			class="rounded bg-blue-500 px-4 py-2 text-white"
			onclick={nextPage}
			disabled={currentPage === totalPages}
		>
			Next
		</button>
	</div>
</div>
