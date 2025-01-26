<script lang="ts">
	import { enhance } from '$app/forms';
	import { toast } from '@zerodevx/svelte-toast';

	let { data, form: formData } = $props();
	let { user, profileCompleted, profile } = $derived(data);

	let selectedFile = $state<File | null>(null);
	let filePreviewUrl = $state<string | null>(null);

	let form = $state({
		institute: ''
	});

	let formErrors = $state({
		instituteError: '',
		fileError: ''
	});

	let submitting = $state(false);

	const validate = () => {
		formErrors.instituteError = '';

		if (!form.institute) formErrors.instituteError = 'Field is required';
		if (!selectedFile) formErrors.fileError = 'File is required';

		return !Object.values(formErrors).some((error) => error !== '');
	};

	function handleFileSelect(event: Event) {
		formErrors.fileError = '';

		const target = event.target as HTMLInputElement;
		const file = target.files?.[0] || null;

		const validTypes = ['image/jpeg', 'image/jpg', 'image/png'];
		const maxSizeInBytes = 2 * 1024 * 1024; // 2 MB

		if (file) {
			if (!validTypes.includes(file.type)) {
				formErrors.fileError = 'File must be a JPEG, JPG or PNG.';
				return;
			} else if (file.size > maxSizeInBytes) {
				formErrors.fileError = 'File size must be less than 2 MB.';
				return;
			}

			selectedFile = file;
			if (file.type.startsWith('image/') || file.type === 'application/pdf') {
				const reader = new FileReader();
				reader.onload = () => {
					filePreviewUrl = reader.result as string;
				};
				reader.readAsDataURL(file);
			} else {
				filePreviewUrl = null;
			}
		} else {
			selectedFile = null;
			filePreviewUrl = null;
		}
	}

	function clearFile() {
		selectedFile = null;
		filePreviewUrl = null;
		formErrors.fileError = '';
	}

	$effect(() => {
		if (formData?.success) {
			toast.push('Profile updated successfully', {
				theme: {
					'--toastColor': '#fff',
					'--toastBackground': 'rgba(16, 185, 129, 0.9)',
					'--toastBarBackground': '#10B981'
				},
				duration: 1500
			});
		}
		if (formData?.error) {
			toast.push(formData?.error, {
				theme: {
					'--toastColor': '#fff',
					'--toastBackground': 'rgba(220, 38, 38, 0.9)',
					'--toastBarBackground': '#DC2626'
				},
				duration: 1500
			});
		}
	});
</script>

<svelte:head>
	<title>{profileCompleted ? 'Profile' : 'Update Profile'} - Neurathon</title>
</svelte:head>

<section class="flex min-h-screen w-full flex-col items-center justify-center p-4">
	<nav class="my-2 w-full" aria-label="Breadcrumb">
		<ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
			<li class="inline-flex items-center">
				<a
					href="/"
					class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
					aria-label="Home"
				>
					<svg
						class="me-2.5 h-3 w-3"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="currentColor"
						viewBox="0 0 20 20"
					>
						<path
							d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"
						/>
					</svg>
				</a>
			</li>
			<li>
				<div class="flex items-center">
					<svg
						class="mx-1 h-3 w-3 text-gray-400 rtl:rotate-180"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 6 10"
					>
						<path
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="m1 9 4-4-4-4"
						/>
					</svg>
					<a
						href="/dashboard"
						class="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
						>Dashboard</a
					>
				</div>
			</li>
			<li aria-current="page">
				<div class="flex items-center">
					<svg
						class="mx-1 h-3 w-3 text-gray-400 rtl:rotate-180"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 6 10"
					>
						<path
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="m1 9 4-4-4-4"
						/>
					</svg>
					<span class="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400"
						>Profile</span
					>
				</div>
			</li>
		</ol>
	</nav>
	<!-- <NotificationCard/> -->
	<div class="w-full">
		<div
			class="group relative w-full overflow-hidden rounded-xl px-4 py-6 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200 sm:px-8"
		>
			<!-- Animated Gradient Background -->
			<span>
				<span
					class="spark mask-gradient animate-flip before:animate-kitrotate absolute inset-0 h-full w-full overflow-hidden rounded-xl [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]"
				></span>
			</span>

			<!-- Backdrop for Content -->
			<span
				class="backdrop absolute inset-0 w-full rounded-[11px] bg-neutral-950 transition-colors duration-200"
			></span>

			<!-- Form Content -->
			<div class="relative z-0 space-y-6">
				<h2 class="text-3xl font-bold text-neutral-200">
					{profileCompleted ? 'Profile' : 'Update Profile'}
				</h2>

				<form
					id="profileForm"
					method="POST"
					class="space-y-6"
					action="?/completeProfile"
					enctype="multipart/form-data"
					autocomplete="off"
					use:enhance={({ cancel }) => {
						submitting = true;
						if (!validate()) {
							submitting = false;
							return cancel();
						}

						return async ({ update }) => {
							await update();
							setTimeout(() => (submitting = false), 1500);
						};
					}}
					novalidate
				>
					<!-- Name Field -->
					<div>
						<span class="mb-2 block text-sm font-medium text-neutral-400">Name</span>
						<div
							class="w-full rounded-lg border border-neutral-700 bg-neutral-900 px-4 py-3 text-neutral-200 focus:border-indigo-500 focus:ring-indigo-500"
						>
							{user?.user_metadata?.name}
						</div>
					</div>

					<!-- Email Field -->
					<div>
						<span class="mb-2 block text-sm font-medium text-neutral-400">Email</span>
						<div
							class="w-full rounded-lg border border-neutral-700 bg-neutral-900 px-4 py-3 text-neutral-200 focus:border-indigo-500 focus:ring-indigo-500"
						>
							{user?.email}
						</div>
					</div>

					<!-- Phone Field -->
					<div>
						<span class="mb-2 block text-sm font-medium text-neutral-400">Phone</span>
						<div
							class="w-full rounded-lg border border-neutral-700 bg-neutral-900 px-4 py-3 text-neutral-200 focus:border-indigo-500 focus:ring-indigo-500"
						>
							{user?.user_metadata?.phone}
						</div>
					</div>

					{#if profileCompleted}
						<!-- Institute Field -->
						<div>
							<span class="mb-2 block text-sm font-medium text-neutral-400">Institute Name</span>
							<div
								class="w-full rounded-lg border border-neutral-700 bg-neutral-900 px-4 py-3 text-neutral-200 focus:border-indigo-500 focus:ring-indigo-500"
							>
								{profile.institute}
							</div>
						</div>

						<!-- Course Field -->
						<div>
							<span class="mb-2 block text-sm font-medium text-neutral-400">Course</span>
							<div
								class="w-full rounded-lg border border-neutral-700 bg-neutral-900 px-4 py-3 uppercase text-neutral-200 focus:border-indigo-500 focus:ring-indigo-500"
							>
								{profile.course}
							</div>
						</div>

						<!-- College ID Field -->
						<div>
							<span class="mb-2 block text-sm font-medium text-neutral-400">College ID</span>
							<div
								class="mt-2 flex h-64 w-full items-center justify-center overflow-hidden rounded-lg bg-neutral-800"
							>
								<img
									src={profile.college_id_url}
									alt="Selected file preview"
									class="h-full w-full object-cover"
								/>
							</div>
						</div>
					{:else}
						<!-- Institute Field -->
						<div>
							<label for="institute" class="mb-2 block text-sm font-medium text-neutral-400"
								>Institute</label
							>
							<input
								type="text"
								id="institute"
								name="institute"
								class="w-full rounded-lg border border-neutral-700 bg-neutral-900 px-4 py-3 text-neutral-200 focus:border-indigo-500 focus:ring-indigo-500"
								class:!border-red-500={formErrors.instituteError}
								bind:value={form.institute}
								placeholder="Add your organisation (i.e., college, university, etc...)"
								aria-invalid={formErrors.instituteError ? 'true' : 'false'}
							/>
							{#if formErrors.instituteError}
								<p class="pt-1 text-right text-xs text-red-500">{formErrors.instituteError}</p>
							{/if}
						</div>

						<!-- Course Field -->
						<div>
							<label for="course" class="mb-2 block text-sm font-medium text-neutral-400"
								>Course</label
							>
							<select
								id="course"
								name="course"
								class="w-full rounded-lg border border-neutral-700 bg-neutral-900 px-4 py-3 text-neutral-200 focus:border-indigo-500 focus:ring-indigo-500"
							>
								<option value="ug" selected>UG</option>
								<option value="pg">PG</option>
							</select>
						</div>

						<!-- College ID Submission Field -->
						<div class="flex h-max flex-col">
							<div class="mb-2 block text-sm font-medium text-neutral-400">
								institute ID Submission
							</div>
							<label
								for="collegeId"
								class="w-full rounded-lg border border-neutral-700 bg-neutral-900 px-4 py-3 text-neutral-200 focus:border-indigo-500 focus:ring-indigo-500"
								class:!border-red-500={formErrors.fileError}
								>Choose file (JPEG, JPG or PNG | Max 2 MB)</label
							>
							<input
								type="file"
								id="collegeId"
								name="collegeId"
								class="hidden w-full rounded-lg border border-neutral-700 bg-neutral-900 px-4 py-3 text-neutral-200 focus:border-indigo-500 focus:ring-indigo-500"
								accept=".pdf,.jpeg,.jpg,.png"
								onchange={handleFileSelect}
								aria-invalid={formErrors.fileError ? 'true' : 'false'}
							/>
							{#if formErrors.fileError}
								<p class="pt-1 text-right text-xs text-red-500">{formErrors.fileError}</p>
							{/if}
						</div>

						<!-- File Preview -->
						{#if selectedFile}
							<div class="mt-2 text-sm text-neutral-400">
								{#if selectedFile.type.startsWith('image/')}
									<!-- Image Preview -->
									<div
										class="mt-2 flex h-64 w-full items-center justify-center overflow-hidden rounded-lg bg-neutral-800"
									>
										<img
											src={filePreviewUrl}
											alt="Selected file preview"
											class="h-full w-full object-cover"
										/>
									</div>
									<!-- {:else if selectedFile.type === 'application/pdf'}
								<div
									class="mt-2 flex h-64 w-full items-center justify-center overflow-hidden rounded-lg bg-neutral-800"
								>
									<embed
										src={`${filePreviewUrl}#toolbar=0`}
										type="application/pdf"
										class="h-full w-full"
									/>
								</div> -->
								{/if}

								<!-- Clear Button -->
								<button
									onclick={clearFile}
									type="button"
									class="mt-2 text-sm text-red-500 hover:text-red-600"
								>
									Clear File
								</button>
							</div>
						{/if}

						<!-- Buttons -->
						<div class="flex justify-end space-x-4">
							<button
								type="reset"
								class="rounded-lg bg-neutral-700 px-6 py-2 text-neutral-200 transition-colors duration-200 hover:bg-neutral-600"
								class:!cursor-not-allowed={submitting}
								onclick={clearFile}
								disabled={submitting}
							>
								Cancel
							</button>
							<button
								type="submit"
								class="rounded-lg bg-indigo-600 px-6 py-2 text-white transition-colors duration-200 hover:bg-indigo-700"
								class:!cursor-not-allowed={submitting}
								disabled={submitting}
							>
								Save Changes
							</button>
						</div>
					{/if}
				</form>
			</div>
		</div>
	</div>
</section>
