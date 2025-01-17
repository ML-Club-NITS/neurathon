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
		{ id: 1, maker: 'Toyota', type: 'ABC', make: 2017 },
		{ id: 2, maker: 'Ford', type: 'CDE', make: 2018 },
		{ id: 3, maker: 'Volvo', type: 'FGH', make: 2019 },
		{ id: 4, maker: 'Saab', type: 'IJK', make: 2020 },
		{ id: 5, maker: 'Audi', type: 'LMN', make: 2021 },
		{ id: 6, maker: 'BMW', type: 'OPQ', make: 2022 },
		{ id: 7, maker: 'Mercedes', type: 'RST', make: 2023 },
		{ id: 8, maker: 'Volkswagen', type: 'UVW', make: 2024 },
		{ id: 9, maker: 'Honda', type: 'XYZ', make: 2025 },
		{ id: 10, maker: 'Nissan', type: '123', make: 2026 },
		{ id: 11, maker: 'Chevrolet', type: '456', make: 2027 },
		{ id: 12, maker: 'Hyundai', type: '789', make: 2028 },
		{ id: 13, maker: 'Kia', type: '101112', make: 2029 },
		{ id: 14, maker: 'Mazda', type: '131415', make: 2030 },
		{ id: 15, maker: 'Subaru', type: '161718', make: 2031 },
		{ id: 16, maker: 'Porsche', type: '192021', make: 2032 },
		{ id: 17, maker: 'Lexus', type: '222324', make: 2033 },
		{ id: 18, maker: 'Acura', type: '252627', make: 2034 },
		{ id: 19, maker: 'Infiniti', type: '282930', make: 2035 },
		{ id: 20, maker: 'Buick', type: '313233', make: 2036 },
		{ id: 21, maker: 'Cadillac', type: '343536', make: 2037 },
		{ id: 22, maker: 'GMC', type: '373839', make: 2038 },
		{ id: 23, maker: 'Jeep', type: '404142', make: 2039 },
		{ id: 24, maker: 'Land Rover', type: '434445', make: 2040 },
		{ id: 25, maker: 'Lincoln', type: '464748', make: 2041 },
		{ id: 26, maker: 'Mitsubishi', type: '495051', make: 2042 },
		{ id: 27, maker: 'Ram', type: '525354', make: 2043 },
		{ id: 28, maker: 'Tesla', type: '555657', make: 2044 },
		{ id: 29, maker: 'Chrysler', type: '585960', make: 2045 },
		{ id: 30, maker: 'Dodge', type: '616263', make: 2046 },
		{ id: 31, maker: 'Fiat', type: '646566', make: 2047 },
		{ id: 32, maker: 'Jaguar', type: '676869', make: 2048 },
		{ id: 33, maker: 'Mini', type: '707172', make: 2049 },
		{ id: 34, maker: 'Smart', type: '737475', make: 2050 },
		{ id: 35, maker: 'Volvo', type: '767778', make: 2051 },
		{ id: 36, maker: 'Audi', type: '798081', make: 2052 },
		{ id: 37, maker: 'BMW', type: '828384', make: 2053 },
		{ id: 38, maker: 'Mercedes', type: '858687', make: 2054 },
		{ id: 39, maker: 'Volkswagen', type: '888990', make: 2055 },
		{ id: 40, maker: 'Honda', type: '919293', make: 2056 },
		{ id: 41, maker: 'Nissan', type: '949596', make: 2057 },
		{ id: 42, maker: 'Chevrolet', type: '979899', make: 2058 },
		{ id: 43, maker: 'Hyundai', type: '100101102', make: 2059 },
		{ id: 44, maker: 'Kia', type: '103104105', make: 2060 },
		{ id: 45, maker: 'Mazda', type: '106107108', make: 2061 },
		{ id: 46, maker: 'Subaru', type: '109110111', make: 2062 },
		{ id: 47, maker: 'Porsche', type: '112113114', make: 2063 },
		{ id: 48, maker: 'Lexus', type: '115116117', make: 2064 },
		{ id: 49, maker: 'Acura', type: '118119120', make: 2065 },
		{ id: 50, maker: 'Infiniti', type: '121122123', make: 2066 }
	];

	let currentPage = 1;
	const itemsPerPage = 5;
	let searchQuery = ''; // Search query input by the user

	// Filter items based on the search query
	$: filteredItems = items.filter(
		(item) =>
			item.maker.toLowerCase().includes(searchQuery.toLowerCase()) ||
			item.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
			String(item.make).includes(searchQuery)
	);

	// Paginate the filtered items
	$: paginatedItems = filteredItems.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

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

<div>
	<!-- Search Input -->
	<div class="mb-4">
		<input
			type="text"
			placeholder="Search by Maker, Type, or Make..."
			bind:value={searchQuery}
			class="w-full rounded border px-4 py-2"
		/>
	</div>

	<!-- Table -->
	<Table hoverable={true}>
		<TableHead>
			<TableHeadCell>ID</TableHeadCell>
			<TableHeadCell>Maker</TableHeadCell>
			<TableHeadCell>Type</TableHeadCell>
			<TableHeadCell>Make</TableHeadCell>
		</TableHead>
		<TableBody>
			{#if paginatedItems.length > 0}
				{#each paginatedItems as item}
					<TableBodyRow>
						<TableBodyCell>{item.id}</TableBodyCell>
						<TableBodyCell>{item.maker}</TableBodyCell>
						<TableBodyCell>{item.type}</TableBodyCell>
						<TableBodyCell>{item.make}</TableBodyCell>
					</TableBodyRow>
				{/each}
			{:else}
				<TableBodyRow>
					<TableBodyCell colspan={4} class="text-center">
						No items found.
					</TableBodyCell>
				</TableBodyRow>
			{/if}
		</TableBody>
	</Table>

	<!-- Pagination -->
	<div class="mt-4 flex justify-center items-center space-x-2">
		<button
			class="rounded bg-blue-500 px-4 py-2 text-white"
			on:click={previousPage}
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
					on:click={() => (currentPage = typeof button === 'number' ? button : currentPage)}
				>
					{button}
				</button>
			{/if}
		{/each}

		<button
			class="rounded bg-blue-500 px-4 py-2 text-white"
			on:click={nextPage}
			disabled={currentPage === totalPages}
		>
			Next
		</button>
	</div>
</div>
