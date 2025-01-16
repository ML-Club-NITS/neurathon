<script>
	import { toast } from '@zerodevx/svelte-toast'

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
				duration: 2500
			});
		} else if (form?.success) {
			toast.push("Password updated successfully", {
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
		}
	})
</script>

<div class="w-screen h-screen flex flex-col justify-center items-center">
	<form method="POST" action="?/updatePassword">
		<div class="text-center text-3xl mb-8 font-bold text-slate-300">Update Password</div>
		<div class="text-md mb-8 flex items-center gap-4">
			<label class="block font-bold text-slate-300" for="new_password"> New Password </label>
			<input
				class="focus:shadow-outline w-full appearance-none rounded border border-slate-400 p-2 leading-tight bg-slate-700 opacity-80 text-slate-400 shadow focus:outline-none"
				name="new_password"
				type="password"
				id="new_password"
				placeholder="********"
			/>
		</div>
		<div class="text-md mb-8 flex items-center gap-4">
			<label class="block font-bold text-slate-300" for="confirm_password"> Confirm Password </label>
			<input
				class="focus:shadow-outline w-full appearance-none rounded border border-slate-400 p-2 leading-tight bg-slate-700 opacity-80 text-slate-400 shadow focus:outline-none"
				name="confirm_password"
				type="password"
				id="confirm_password"
				placeholder="********"
			/>
		</div>
		<div class="flex items-center justify-center">
			<button
				class="w-full focus:shadow-outline rounded bg-orange-500 px-8 py-2 font-bold text-white hover:bg-orange-600 focus:outline-none"
			>
				Update password
			</button>
		</div>
	</form>
</div>
