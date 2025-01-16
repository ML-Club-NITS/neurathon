<script>
	import { Tabs, TabItem } from 'flowbite-svelte';

	import Login from './Login.svelte';
	import Register from './Register.svelte';
</script>

<div class="mx-auto mt-36 w-fit">
	<Tabs
		tabStyle="pill"
		defaultClass="bg-slate-800 flex gap-2 p-1 items-center rounded-lg w-fit mx-auto"
		contentClass="p-2 m-2 rounded-lg"
	>
		<TabItem
			open
			inactiveClasses="text-lg hover:text-lg min-w-fit px-6 py-2 rounded-lg text-slate-500"
			activeClasses="text-lg hover:text-lg min-w-fit px-6 py-2 rounded-lg text-white bg-gray-700"
		>
			<div slot="title">Login</div>
			<Login />
		</TabItem>
		<TabItem
			inactiveClasses="text-lg hover:text-lg min-w-fit px-6 py-2 rounded-lg text-slate-500"
			activeClasses="text-lg hover:text-lg min-w-fit px-6 py-2 rounded-lg text-white bg-gray-700"
		>
			<div slot="title">Register</div>
			<Register />
		</TabItem>
	</Tabs>
</div>
