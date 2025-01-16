<script>
	import { Tabs, TabItem } from 'flowbite-svelte';
	import { toast } from '@zerodevx/svelte-toast'

	import Login from './Login.svelte';
	import Register from './Register.svelte';
	import { goto } from '$app/navigation';

	let { form } = $props();

	$effect(() => {
		if (form?.error) {
			toast.push((typeof form?.error === 'string' ? form?.error : "Error occurred"), {
				theme: {
					'--toastColor': '#fff',
					'--toastBackground': 'rgba(220, 38, 38, 0.9)',
					'--toastBarBackground': '#DC2626'
				},
				onpop: () => {
					goto('/auth')
				},
				duration: 3000
			});
		} else if (form?.login) {
			toast.push("Login Successful", {
				theme: {
					'--toastColor': 'mintcream',
					'--toastBackground': 'rgba(72,187,120,0.9)',
					'--toastBarBackground': '#2F855A'
				},
				onpop: () => {
					goto('/participate')
				},
				duration: 1000
			});
		} else if (form?.signup) {
			toast.push("Registeration Successful", {
				theme: {
					'--toastColor': 'mintcream',
					'--toastBackground': 'rgba(72,187,120,0.9)',
					'--toastBarBackground': '#2F855A'
				},
				onpop: () => {
					goto('/participate')
				},
				duration: 1000
			});
		} else if (form?.resetPassword) {
			toast.push("Check your inbox", {
				onpop: () => {
					goto('/auth')
				},
				theme: {
					'--toastColor': 'mintcream',
					'--toastBackground': 'rgba(251, 146, 60, 0.9)',
					'--toastBarBackground': '#EA580C'
				},
				duration: 5000
			});
		}
	})
</script>

<div class="mt-44 flex flex-col items-center">
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

<style>
	:root {
	  --toastBackground: rgba(245, 208, 254, 0.95);
	  --toastColor: #424242;
	  --toastBarBackground: rgb(255, 145, 0);
	}
</style>