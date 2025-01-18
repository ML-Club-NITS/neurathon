<script>
	import { toast } from '@zerodevx/svelte-toast';

	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';

	let formData = $state({
		password: '',
		confirm_password: ''
	});

	let formErrors = $state({
		passwordError: '',
		confirmationError: ''
	});

	let { form } = $props();

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
				duration: 2500
			});
		} else if (form?.success) {
			toast.push('Password updated successfully', {
				theme: {
					'--toastColor': 'mintcream',
					'--toastBackground': 'rgba(72,187,120,0.9)',
					'--toastBarBackground': '#2F855A'
				},
				onpop: () => {
					goto('/participate');
				},
				duration: 1000
			});
		}
	});

	const validate = () => {
		formErrors = { passwordError: '', confirmationError: '' };

		if (!formData.password) {
			formErrors.passwordError = 'Password is required';
		} else if (
			!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,20}$/.test(
				formData.password
			)
		) {
			formErrors.passwordError =
				'Password must be 8-20 characters long and include uppercase, lowercase, a number, and a special character';
		}

		if (!formData.confirm_password) {
			formErrors.confirmationError = 'Please confirm your password';
		} else if (formData.confirm_password !== formData.password) {
			formErrors.confirmationError = 'Passwords do not match';
		}
		return !Object.values(formErrors).some((error) => error !== '');
	};
</script>

<div class="flex h-screen w-screen flex-col items-center justify-center">
	<form
		method="POST"
		action="?/updatePassword"
		use:enhance={({ cancel }) => {
			if (!validate()) {
				return cancel();
			}

			return async ({ update }) => update();
		}}
		novalidate
	>
		<div class="text-center text-3xl font-bold text-slate-300">Update Password</div>
		<div class="text-md mt-8 flex items-center gap-4">
			<label class="block font-bold text-slate-300" for="new_password"> New Password </label>
			<input
				class="focus:shadow-outline w-full appearance-none rounded border border-slate-400 bg-slate-700 p-2 leading-tight text-slate-400 opacity-80 shadow focus:outline-none"
				class:!border-red-500={formErrors.passwordError}
				name="new_password"
				type="password"
				id="new_password"
				placeholder="********"
				bind:value={formData.password}
				aria-invalid={formErrors.passwordError ? 'true' : 'false'}
			/>
		</div>
		{#if formErrors.passwordError}
			<p class="pt-1 text-right text-xs text-red-500">{formErrors.passwordError}</p>
		{/if}
		<div class="text-md mt-8 flex items-center gap-4">
			<label class="block font-bold text-slate-300" for="confirm_password">
				Confirm Password
			</label>
			<input
				class="focus:shadow-outline w-full appearance-none rounded border border-slate-400 bg-slate-700 p-2 leading-tight text-slate-400 opacity-80 shadow focus:outline-none"
				class:!border-red-500={formErrors.confirmationError}
				name="confirm_password"
				type="password"
				id="confirm_password"
				placeholder="********"
				bind:value={formData.confirm_password}
				aria-invalid={formErrors.confirmationError ? 'true' : 'false'}
			/>
		</div>
		{#if formErrors.confirmationError}
			<p class="pt-1 text-right text-xs text-red-500">{formErrors.confirmationError}</p>
		{/if}
		<div class="mt-8 flex items-center justify-center">
			<button
				class="focus:shadow-outline w-full rounded bg-orange-500 px-8 py-2 font-bold text-white hover:bg-orange-600 focus:outline-none"
			>
				Update password
			</button>
		</div>
	</form>
</div>
