<script lang="ts">
	import { goto } from '$app/navigation';
	import type { PageData } from './$types';
	let { data }: { data: PageData } = $props();

	// let { data } = $props();
	let { supabase, user, TeamID, team } = $derived(data);
</script>

<nav class="flex w-full mt-2" aria-label="Breadcrumb">
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
					>Team</span
				>
			</div>
		</li>
	</ol>
</nav>
<div
	class="my-1 w-full flex items-center rounded-lg border border-blue-300 bg-blue-50 p-4 text-sm text-blue-800 dark:border-blue-800 dark:bg-gray-800 dark:text-blue-400"
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
<div class="register-page w-full overflow-hidden rounded-lg bg-slate-600 p-4 text-red-400">
	{#if TeamID}
		<div class="container border-2 border-black bg-slate-600 p-2">
			<span class="bg-gray-400">Team ID: {TeamID}</span>
			<h1>Team: {team?.TeamName}</h1>
			<p>Team Name: {team?.TeamName}</p>
			<p>
				Leader: {team.Members.find((m: { sub: string; name: string }) => m.sub === team?.CreatedBy)
					?.name}
			</p>
			<p>Members:</p>
			{#each team?.Members as member}
				<p>{member.name} {member.phone}</p>
			{/each}
			<form method="POST">
				{#if team?.CreatedBy === user?.id}
					<button formaction="?/delete" class="rounded-lg bg-red-600 px-2 py-1">Delete</button>
				{:else}
					<button formaction="?/leave" class="rounded-lg bg-red-600 px-2 py-1">Leave</button>
				{/if}
			</form>
		</div>
	{:else}
		<div class="container flex gap-4">
			<form method="POST" class="flex w-full flex-col gap-4">
				<label for="teamname">Team Name</label>
				<input type="text" id="teamname" class="h-full" name="teamname" />
				<button formaction="?/register" class="bg-gray-800 p-2">Create Team</button>
			</form>
			<form method="POST" class="flex w-full flex-col gap-4">
				<label for="teamid">Team Id</label>
				<input type="text" id="teamid" name="teamid" />
				<button formaction="?/join" class="bg-gray-800 p-2">Join Team</button>
			</form>
		</div>
	{/if}
</div>
