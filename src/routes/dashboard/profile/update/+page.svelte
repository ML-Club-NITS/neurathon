<script>
	import { goto } from '$app/navigation';
</script>

<section class="flex min-h-screen w-full flex-col items-center justify-center">
	<nav class="flex w-full" aria-label="Breadcrumb">
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
		class="font-std mb-10 mt-3 w-full rounded-lg bg-[#ffac13] p-10 pt-5 font-normal leading-relaxed text-gray-900 shadow-xl"
	>
		<div class="flex flex-col">
			<div class="mb-5 flex flex-col items-start justify-between md:flex-row">
				<h2 class="text-3xl font-bold text-red-900">Update Profile</h2>
			</div>

			<form class="space-y-4">
				<div>
					<label for="name" class="block text-sm font-medium text-gray-700">Name</label>
					<input
						type="text"
						id="name"
						class="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:ring-indigo-500"
						value="John Doe"
					/>
				</div>
				<div>
					<label for="title" class="block text-sm font-medium text-gray-700">Title</label>
					<input
						type="text"
						id="title"
						class="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:ring-indigo-500"
						value="Software Developer"
					/>
				</div>

				<div>
					<label for="organization" class="block text-sm font-medium text-gray-700"
						>Organization</label
					>
					<input
						type="text"
						id="organization"
						class="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:ring-indigo-500"
						value="Estep Bilişim"
					/>
				</div>
				
				<div>
					<label for="email" class="block text-sm font-medium text-gray-700">Email</label>
					<input
						type="email"
						id="email"
						class="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:ring-indigo-500"
						value="john.doe@example.com"
					/>
				</div>
				<div>
					<label for="phone" class="block text-sm font-medium text-gray-700">Phone</label>
					<input
						type="tel"
						id="phone"
						class="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:ring-indigo-500"
						value="+1 (555) 123-4567"
					/>
				</div>
				<div>
					<label for="location" class="block text-sm font-medium text-gray-700">Location</label>
					<input
						type="text"
						id="location"
						class="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:ring-indigo-500"
						value="San Francisco, CA"
					/>
				</div>

				<div class="flex justify-end space-x-4">
					<button
						onclick={() => goto('/dashboard/profile')}
						type="button"
						class="rounded-lg bg-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-400">Cancel</button
					>
					<button
						type="submit"
						class="rounded-lg bg-indigo-800 px-4 py-2 text-white hover:bg-indigo-700"
						>Save Changes</button
					>
				</div>
			</form>
		</div>
	</div>
</section>
