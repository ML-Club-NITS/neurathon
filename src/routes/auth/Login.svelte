<script lang="ts">
	import { enhance } from '$app/forms';

	let form = $state({
		email: '',
		password: ''
	});

	let formErrors = $state({
		emailError: '',
		passwordError: ''
	});

	let submitting = $state(false);

	const validate = () => {
		formErrors = { emailError: '', passwordError: '' };

		if (!form.email) formErrors.emailError = 'Email is required';
		else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
			formErrors.emailError = 'Enter a valid email address';

		if (!form.password) formErrors.passwordError = 'Password is required';
		else if (!/^.{8,20}$/.test(form.password))
			formErrors.passwordError = 'Password length must be 8-20 characters';

		return !Object.values(formErrors).some((error) => error !== '');
	};

	const validateEmail = () => {
		formErrors = { emailError: '', passwordError: '' };

		if (!form.email) formErrors.emailError = 'Email is required';
		else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
			formErrors.emailError = 'Enter a valid email address';

		return !formErrors.emailError;
	};
</script>

<div class="w-full overflow-hidden p-4">
	<form
		method="POST"
		action="?/login"
		use:enhance={({ cancel, action }) => {
			submitting = true;
			if (action.toString().includes('/resetPassword')) {
				if (!validateEmail()) {
					submitting = false;
					return cancel();
				}
			} else {
				if (!validate()) {
					submitting = false;
					return cancel();
				}
			}

			return async ({ update }) => {
				await update();
				setTimeout(() => (submitting = false), 1500);
			};
		}}
		novalidate
	>
		<div class="text-md flex items-center gap-4">
			<label class="min-w-fit font-bold text-slate-300" for="email">Email</label>
			<input
				class="focus:shadow-outline w-full appearance-none rounded border border-slate-400 bg-slate-700 p-2 leading-tight text-slate-400 opacity-80 shadow focus:outline-none"
				class:!border-red-500={formErrors.emailError}
				name="email"
				type="email"
				id="email"
				placeholder="abc@mail.com"
				bind:value={form.email}
				aria-invalid={formErrors.emailError ? 'true' : 'false'}
			/>
		</div>
		{#if formErrors.emailError}
			<p class="pt-1 text-right text-xs text-red-500">{formErrors.emailError}</p>
		{/if}
		<div class="text-md mt-4 flex items-center gap-4">
			<label class="min-w-fit font-bold text-slate-300" for="password">Password</label>
			<input
				class="focus:shadow-outline w-full appearance-none rounded border border-slate-400 bg-slate-700 p-2 leading-tight text-slate-400 opacity-80 shadow focus:outline-none"
				class:!border-red-500={formErrors.passwordError}
				name="password"
				type="password"
				id="password"
				placeholder="********"
				bind:value={form.password}
				aria-invalid={formErrors.passwordError ? 'true' : 'false'}
			/>
		</div>
		{#if formErrors.passwordError}
			<p class="pt-1 text-right text-xs text-red-500">{formErrors.passwordError}</p>
		{/if}
		<div class="mt-8 flex items-center justify-between">
			<button
				class="focus:shadow-outline rounded bg-orange-500 px-8 py-2 font-bold text-white hover:bg-orange-600 focus:outline-none"
				class:!cursor-not-allowed={submitting}
				disabled={submitting}
			>
				Log In
			</button>
			<button
				class="inline-block w-fit align-baseline text-sm font-bold text-orange-500 hover:text-orange-600"
				formAction="?/resetPassword"
				class:!cursor-not-allowed={submitting}
				disabled={submitting}
			>
				Forgot Password?
			</button>
		</div>
	</form>
</div>
