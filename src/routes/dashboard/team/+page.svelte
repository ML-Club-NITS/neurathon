<script lang="ts">
	import { Motion, useMotionValue, useMotionTemplate } from 'svelte-motion';

	let { data } = $props();
	let { user, TeamID, team } = $derived(data);
	let profileCompleted = true;

	// Mouse hover effects
	let mouseX = useMotionValue(0);
	let mouseY = useMotionValue(0);
	let background = useMotionTemplate`
		radial-gradient(200px circle at ${mouseX}px ${mouseY}px, rgba(38, 38, 38, 0.4), transparent 80%)
	`;
</script>

<nav class="mt-2 flex w-full" aria-label="Breadcrumb">
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
				<span class="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">Team</span>
			</div>
		</li>
	</ol>
</nav>

{#if profileCompleted}
	<div
		class="my-4 flex w-full items-center rounded-lg border border-blue-300 bg-blue-50 p-4 text-sm text-blue-800 dark:border-blue-800 dark:bg-gray-800 dark:text-blue-400"
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
			<span class="font-medium">Alert!</span> Create your own team or join a team.
		</div>
	</div>

	<div class="register-page w-full overflow-hidden rounded-lg text-red-400">
		{#if TeamID}
			<div
				onmousemove={(e) => {
					const { left, top } = e.currentTarget.getBoundingClientRect();
					mouseX.set(e.clientX - left);
					mouseY.set(e.clientY - top);
				}}
				class="group relative w-full overflow-hidden rounded-xl bg-neutral-950"
				role="presentation"
			>
				<div
					class="absolute right-5 top-0 h-px w-80 bg-gradient-to-l from-transparent via-white/30 via-10% to-transparent"
				></div>
				<Motion
					style={{
						background
					}}
					let:motion
				>
					<div
						use:motion
						class="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
					></div>
				</Motion>
				<div class="relative flex flex-col gap-3 rounded-xl border border-white/10 px-4 py-5">
					<h2 class="mb-4 font-LeagueSpartanFont text-2xl font-bold text-neutral-200 md:text-4xl">
						Team Information
					</h2>
					<div class="space-y-4">
						<div>
							<span class="text-sm font-medium text-neutral-400">Team ID</span>
							<p class="text-xl text-neutral-100">{TeamID}</p>
						</div>
						<div>
							<span class="text-sm font-medium text-neutral-400">Team Name</span>
							<p class="text-xl text-neutral-100">{team?.TeamName}</p>
						</div>
						<div>
							<span class="text-sm font-medium text-neutral-400">Team Leader</span>
							<p class="text-xl text-neutral-100">
								{team.Members.find((m: { sub: string; name: string }) => m.sub === team?.CreatedBy)
									?.name}
							</p>
						</div>
						<div>
							<span class="text-sm font-medium text-neutral-400">Team Members</span>
							<div class="space-y-2">
								{#each team?.Members as member}
									<p class="text-xl text-neutral-100">
										{member.name} - {member.phone}
									</p>
								{/each}
							</div>
						</div>
						<form method="POST" class="flex gap-4">
							{#if team?.CreatedBy === user?.id}
								<button
									formaction="?/delete"
									class="rounded-lg bg-red-600 px-4 py-2 text-neutral-100 transition-colors duration-200 hover:bg-red-700"
								>
									Delete Team
								</button>
							{:else}
								<button
									formaction="?/leave"
									class="rounded-lg bg-red-600 px-4 py-2 text-neutral-100 transition-colors duration-200 hover:bg-red-700"
								>
									Leave Team
								</button>
							{/if}
						</form>
					</div>
				</div>
			</div>
		{:else}
			<div
				onmousemove={(e) => {
					const { left, top } = e.currentTarget.getBoundingClientRect();
					mouseX.set(e.clientX - left);
					mouseY.set(e.clientY - top);
				}}
				class="group relative w-full overflow-hidden rounded-xl bg-neutral-950"
				role="presentation"
			>
				<div
					class="absolute right-5 top-0 h-px w-80 bg-gradient-to-l from-transparent via-white/30 via-10% to-transparent"
				></div>
				<Motion
					style={{
						background
					}}
					let:motion
				>
					<div
						use:motion
						class="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
					></div>
				</Motion>
				<div class="relative flex flex-col gap-3 rounded-xl border border-white/10 px-4 py-5">
					<h2 class="mb-4 text-2xl font-bold text-neutral-200">Join or Create a Team</h2>
					<div class="space-y-6">
						<form method="POST" class="space-y-4">
							<div>
								<label for="teamname" class="block text-sm font-medium text-neutral-400"
									>Team Name</label
								>
								<input
									type="text"
									id="teamname"
									name="teamname"
									class="w-full rounded-lg border border-neutral-600 bg-neutral-700 px-4 py-2 text-neutral-100 focus:border-indigo-500 focus:ring-indigo-500"
								/>
							</div>
							<button
								formaction="?/register"
								class="w-full rounded-lg bg-indigo-600 px-4 py-2 text-neutral-100 transition-colors duration-200 hover:bg-indigo-700"
							>
								Create Team
							</button>
						</form>
						<form method="POST" class="space-y-4">
							<div>
								<label for="teamid" class="block text-sm font-medium text-neutral-400"
									>Team ID</label
								>
								<input
									type="text"
									id="teamid"
									name="teamid"
									class="w-full rounded-lg border border-neutral-600 bg-neutral-700 px-4 py-2 text-neutral-100 focus:border-indigo-500 focus:ring-indigo-500"
								/>
							</div>
							<button
								formaction="?/join"
								class="w-full rounded-lg bg-indigo-600 px-4 py-2 text-neutral-100 transition-colors duration-200 hover:bg-indigo-700"
							>
								Join Team
							</button>
						</form>
					</div>
				</div>
			</div>
		{/if}
	</div>
{:else}
	<div
		class="my-4 flex w-full items-center rounded-lg border border-blue-300 bg-blue-50 p-4 text-sm text-blue-800 dark:border-blue-800 dark:bg-gray-800 dark:text-blue-400"
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
			<span class="font-medium">Alert!</span> Complete your profile to register your team.
		</div>
	</div>
{/if}
