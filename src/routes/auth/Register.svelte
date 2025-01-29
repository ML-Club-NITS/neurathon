<script lang="ts">
	import { enhance } from '$app/forms';

	let form = $state({
		name: '',
		email: '',
		phone: '',
		password: ''
	});
	let formErrors = $state({
		nameError: '',
		emailError: '',
		phoneError: '',
		passwordError: ''
	});

	let submitting = $state(false);

	const validate = () => {
		formErrors = { nameError: '', emailError: '', phoneError: '', passwordError: '' };

		if (!form.name) formErrors.nameError = 'Field is required';
		else if (!/^[A-Za-z\s]+$/.test(form.name))
			formErrors.nameError = 'Name can only contain letters and spaces';
		else if (form.name.split(' ').length < 2) formErrors.nameError = 'Enter your full name';

		if (!form.email) formErrors.emailError = 'Field is required';
		else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
			formErrors.emailError = 'Enter a valid email address';

		if (!form.phone) formErrors.phoneError = 'Field is required';
		else if (!/^\d{10}$/.test(form.phone)) formErrors.phoneError = 'Enter a valid phone number';

		if (!form.password) formErrors.passwordError = 'Field is required';
		else if (!/^.{8,20}$/.test(form.password))
			formErrors.passwordError = 'Password length must be 8-20 characters';

		return !Object.values(formErrors).some((error) => error !== '');
	};
</script>

<div class="w-full overflow-hidden p-4">
	<form
		method="POST"
		action="?/register"
		use:enhance={({ cancel }) => {
			if (submitting) {
				return cancel();
			} else {
				submitting = true;
			}

			if (!validate()) {
				submitting = false;
				return cancel();
			}

			return async ({ update }) => {
				await update();
				form = {
					name: '',
					email: '',
					phone: '',
					password: ''
				};
				setTimeout(() => (submitting = false), 1500);
			};
		}}
		novalidate
	>
		<div class="text-md flex items-center gap-4">
			<label class="min-w-fit font-bold text-slate-300" for="username"> Full Name </label>
			<input
				class="focus:shadow-outline w-full appearance-none rounded border border-slate-400 bg-slate-700 p-2 leading-tight text-slate-400 opacity-80 shadow focus:outline-none"
				class:!border-red-500={formErrors.nameError}
				name="name"
				type="text"
				id="username"
				placeholder="full name"
				bind:value={form.name}
				aria-invalid={formErrors.nameError ? 'true' : 'false'}
			/>
		</div>
		{#if formErrors.nameError}
			<p class="pt-1 text-right text-xs text-red-500">{formErrors.nameError}</p>
		{/if}
		<div class="text-md mt-4 flex items-center gap-4">
			<label class="min-w-fit font-bold text-slate-300" for="email"> Email </label>
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
			<label class="min-w-fit font-bold text-slate-300" for="phone"> Phone No. </label>
			<input
				class="focus:shadow-outline w-full appearance-none rounded border border-slate-400 bg-slate-700 p-2 leading-tight text-slate-400 opacity-80 shadow focus:outline-none"
				class:!border-red-500={formErrors.phoneError}
				name="phone"
				type="tel"
				id="phone"
				placeholder="99******00"
				bind:value={form.phone}
				aria-invalid={formErrors.phoneError ? 'true' : 'false'}
			/>
		</div>
		{#if formErrors.phoneError}
			<p class="pt-1 text-right text-xs text-red-500">{formErrors.phoneError}</p>
		{/if}
		<div class="text-md mt-4 flex items-center gap-4">
			<label class="min-w-fit font-bold text-slate-300" for="password"> Password </label>
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
		<div class="mt-8 flex items-center justify-center">
			<button
				class="focus:shadow-outline w-full rounded bg-orange-500 px-4 py-2 font-bold text-white hover:bg-orange-600 focus:outline-none"
				class:!cursor-not-allowed={submitting}
				disabled={submitting}
			>
				Sign Up
			</button>
		</div>
	</form>
</div>
