<script>
	import { Tabs, TabItem } from 'flowbite-svelte';
	import { toast } from '@zerodevx/svelte-toast';

	import Login from './Login.svelte';
	import Register from './Register.svelte';
	import { goto } from '$app/navigation';
	import { page } from '$app/state';

	let { form } = $props();

	const type = $derived(page.url.searchParams.get('type'));

	$effect(() => {
		if (form?.error) {
			toast.push(typeof form?.error === 'string' ? form?.error : 'Error occurred', {
				theme: {
					'--toastColor': '#fff',
					'--toastBackground': 'rgba(220, 38, 38, 0.9)',
					'--toastBarBackground': '#DC2626'
				},
				onpop: () => {
					goto('/auth');
				},
				duration: 3000
			});
		} else if (form?.login) {
			toast.push('Login Successful', {
				theme: {
					'--toastColor': 'mintcream',
					'--toastBackground': 'rgba(72,187,120,0.9)',
					'--toastBarBackground': '#2F855A'
				},
				onpop: () => {
					goto('/dashboard');
				},
				duration: 1200
			});
		} else if (form?.signup) {
			toast.push('Registeration Successful', {
				theme: {
					'--toastColor': 'mintcream',
					'--toastBackground': 'rgba(72,187,120,0.9)',
					'--toastBarBackground': '#2F855A'
				},
				onpop: () => {
					toast.push('Check your inbox', {
						duration: 10000
					});
					goto('/participate');
				},
				duration: 1200
			});
		} else if (form?.resetPassword) {
			toast.push('Check your inbox', {
				onpop: () => {
					goto('/auth');
				},
				theme: {
					'--toastColor': 'mintcream',
					'--toastBackground': 'rgba(251, 146, 60, 0.9)',
					'--toastBarBackground': '#EA580C'
				},
				duration: 5000
			});
		}
	});

	const seo = {
		title: 'Auth - Neurathon',
		description: 'Log in or sign up to Neurathon, the premier AI and Machine Learning hackathon.'
	};
</script>

<svelte:head>
	<title>{seo.title}</title>
	<meta name="description" content={seo.description} />
	<meta name="robots" content="noindex" />
</svelte:head>

<div class="mt-36 flex flex-col items-center md:mt-44">
	<Tabs
		tabStyle="pill"
		defaultClass="bg-slate-800 flex gap-2 p-1 items-center rounded-lg w-fit mx-auto"
		contentClass="w-80 md:w-96 p-2 m-2 rounded-lg"
	>
		<TabItem
			open={type === 'login'}
			inactiveClasses="text-lg hover:text-lg min-w-fit px-6 py-2 rounded-lg text-slate-500"
			activeClasses="text-lg hover:text-lg min-w-fit px-6 py-2 rounded-lg text-white bg-gray-700"
		>
			<div slot="title">Login</div>
			<Login />
		</TabItem>
		<TabItem
			open={type !== 'login'}
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
		--toastBackground: rgb(234, 88, 11);
		--toastColor: #ffffff;
		--toastBarBackground: rgb(255, 145, 0);
	}
</style>
