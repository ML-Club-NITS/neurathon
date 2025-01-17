<script>
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
		{ id: 4, maker: 'Saab', type: 'IJK', make: 2020 }
	];
</script>

<Table
	{items}
	placeholder="Search by maker name"
	hoverable={true}
	filter={(item, searchTerm) => item.maker.toLowerCase().includes(searchTerm.toLowerCase())}
>
	<TableHead>
		<TableHeadCell>ID</TableHeadCell>
		<TableHeadCell>Maker</TableHeadCell>
		<TableHeadCell>Type</TableHeadCell>
		<TableHeadCell>Make</TableHeadCell>
	</TableHead>
	<TableBody tableBodyClass="divide-y">
		<TableBodyRow slot="row" let:item>
			<TableBodyCell>{item.id}</TableBodyCell>
			<TableBodyCell>{item.maker}</TableBodyCell>
			<TableBodyCell>{item.type}</TableBodyCell>
			<TableBodyCell>{item.make}</TableBodyCell>
		</TableBodyRow>
	</TableBody>
</Table>
