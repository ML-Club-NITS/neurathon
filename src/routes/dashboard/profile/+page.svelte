<script>
	import { goto } from '$app/navigation';
	let { data } = $props();
	let { user } = $derived(data);
</script>

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
	<div
		class="my-2 w-full rounded-lg border border-blue-300 bg-blue-50 p-4 text-sm text-blue-800 dark:border-blue-800 dark:bg-gray-800 dark:text-blue-400"
		role="alert"
	>
		<svg
			class="me-3 inline h-4 w-4 shrink-0"
			aria-hidden="true"
			xmlns="http://www.w3.org/2000/svg"
			fill="currentColor"
			viewBox="0 0 20 20"
		>
			<path
				d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"
			/>
		</svg>
		<span class="sr-only">Info</span>
		<div>
			<span class="font-medium">Info alert!</span> Change a few things up and try submitting again.
		</div>
	</div>
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
			<div class="relative z-10 space-y-6">
				<h2 class="text-3xl font-bold text-neutral-200">Update Profile</h2>

				<form class="space-y-6">
					<!-- Name Field -->
					<div>
						<label for="name" class="mb-2 block text-sm font-medium text-neutral-400">Name</label>
						<div
							id="name"
							class="w-full rounded-lg border border-neutral-700 bg-neutral-900 px-4 py-3 text-neutral-200 focus:border-indigo-500 focus:ring-indigo-500"
						>
							{user?.user_metadata?.name}
						</div>
					</div>

					<!-- Email Field -->
					<div>
						<label for="email" class="mb-2 block text-sm font-medium text-neutral-400">Email</label>
						<div
							id="email"
							class="w-full rounded-lg border border-neutral-700 bg-neutral-900 px-4 py-3 text-neutral-200 focus:border-indigo-500 focus:ring-indigo-500 break-words"
						>
							{user?.email}
						</div>
					</div>

					<!-- Phone Field -->
					<div>
						<label for="phone" class="mb-2 block text-sm font-medium text-neutral-400">Phone</label>
						<div
							id="phone"
							class="w-full rounded-lg border border-neutral-700 bg-neutral-900 px-4 py-3 text-neutral-200 focus:border-indigo-500 focus:ring-indigo-500"
						>
							{user?.user_metadata?.phone}
						</div>
					</div>

					<!-- Conditional Fields -->
					{#if 0}
						<!-- Organization Field -->
						<div>
							<label for="organization" class="mb-2 block text-sm font-medium text-neutral-400"
								>Organization</label
							>
							<input
								type="text"
								id="organization"
								class="w-full rounded-lg border border-neutral-700 bg-neutral-900 px-4 py-3 text-neutral-200 focus:border-indigo-500 focus:ring-indigo-500 break-words"
								value="Estep Bilişim"
							/>
						</div>

						<!-- Location Field -->
						<div>
							<label for="location" class="mb-2 block text-sm font-medium text-neutral-400"
								>Location</label
							>
							<input
								type="text"
								id="location"
								class="w-full rounded-lg border border-neutral-700 bg-neutral-900 px-4 py-3 text-neutral-200 focus:border-indigo-500 focus:ring-indigo-500"
								value="San Francisco, CA"
							/>
						</div>
					{:else}
						<!-- Organization Field -->
						<div>
							<label for="organization" class="mb-2 block text-sm font-medium text-neutral-400"
								>Organization</label
							>
							<input
								type="text"
								id="organization"
								class="w-full rounded-lg border border-neutral-700 bg-neutral-900 px-4 py-3 text-neutral-200 focus:border-indigo-500 focus:ring-indigo-500 break-words"
								value=""
								placeholder="Add your organization (i.e., college, university, etc...)"
							/>
						</div>

						<!-- Course Field -->
						<div>
							<label for="course" class="mb-2 block text-sm font-medium text-neutral-400"
								>Course</label
							>
							<select
								id="course"
								class="w-full rounded-lg border border-neutral-700 bg-neutral-900 px-4 py-3 text-neutral-200 focus:border-indigo-500 focus:ring-indigo-500"
							>
								<option value="ug" selected>UG</option>
								<option value="pg">PG</option>
							</select>
						</div>

						<!-- College ID Submission Field -->
						<div class="flex h-max flex-col">
							<div class="mb-2 block text-sm font-medium text-neutral-400">
								Organization ID Submission
							</div>
							<label
								for="collegeId"
								class="w-full rounded-lg border border-neutral-700 bg-neutral-900 px-4 py-3 text-neutral-200 focus:border-indigo-500 focus:ring-indigo-500"
								>Choose file (pdf, jpg, jpeg, png supported)</label
							>
							<input
								type="file"
								id="collegeId"
								class="hidden w-full rounded-lg border border-neutral-700 bg-neutral-900 px-4 py-3 text-neutral-200 focus:border-indigo-500 focus:ring-indigo-500"
								accept=".pdf,.jpeg,.jpg,.png"
							/>
						</div>
					{/if}

					<!-- Buttons -->
					<div class="flex flex-col space-y-4 sm:flex-row sm:justify-end sm:space-x-4 sm:space-y-0">
						<button
							onclick={() => goto('/dashboard/profile')}
							type="button"
							class="rounded-lg bg-neutral-700 px-6 py-2 text-neutral-200 transition-colors duration-200 hover:bg-neutral-600"
						>
							Cancel
						</button>
						<button
							type="submit"
							class="rounded-lg bg-indigo-600 px-6 py-2 text-white transition-colors duration-200 hover:bg-indigo-700"
						>
							Save Changes
						</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</section>