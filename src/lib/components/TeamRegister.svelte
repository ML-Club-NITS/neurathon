<script>
	import { goto } from '$app/navigation';
</script>

<section class="flex min-h-screen w-full items-center justify-center">
	<div
		class="font-std mb-10 w-full rounded-2xl bg-white p-10 font-normal leading-relaxed text-gray-900 shadow-xl"
	>
		<div class="flex flex-col">
			<div class="mb-5 flex flex-col items-start justify-between md:flex-row">
				<h2 class="mb-5 text-4xl font-bold text-blue-900">Update Profile</h2>
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
						onclick={() => goto('/dashboard/settings')}
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
