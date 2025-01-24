<script lang="ts">
	import { goto } from '$app/navigation';
	import type { PageData } from './$types';
	let { data }: { data: PageData } = $props();

	let { supabase, user, TeamID, team } = $derived(data);

	async function signOut() {
		const { error } = await supabase.auth.signOut();
		console.error(error);
		goto('/');
	}
</script>

<div class="min-h-screen bg-neutral-900 p-4 text-neutral-100 sm:p-6">
	<!-- Header -->
	<div class="mb-6 flex flex-col items-center justify-between gap-4 sm:flex-row">
		<h1 class="text-2xl font-bold sm:text-3xl">Welcome, {user?.user_metadata?.name}</h1>
		<button
			onclick={signOut}
			class="w-full rounded-lg bg-red-600 px-4 py-2 text-neutral-100 transition-colors duration-200 hover:bg-red-700 sm:w-auto"
		>
			Log Out
		</button>
	</div>

	<!-- User Profile Section -->
	<div class="mb-6">
		<div class="rounded-xl bg-neutral-800 p-4 shadow-lg sm:p-6">
			<h2 class="mb-4 text-xl font-bold sm:text-2xl">Profile Information</h2>
			<div class="space-y-3">
				<div>
					<label for="email" class="block text-sm font-medium text-neutral-400">Email</label>
					<p id="email" class="text-neutral-100">{user?.email}</p>
				</div>
				<div>
					<label for="phone" class="block text-sm font-medium text-neutral-400">Phone</label>
					<p id="phone" class="text-neutral-100">{user?.user_metadata?.phone}</p>
				</div>
			</div>
		</div>
	</div>

	<!-- Team Information Section -->
	{#if TeamID}
		<div class="rounded-xl bg-neutral-800 p-4 shadow-lg sm:p-6">
			<h2 class="mb-4 text-xl font-bold sm:text-2xl">Team Information</h2>
			<div class="space-y-4">
				<div>
					<label for="team-id" class="block text-sm font-medium text-neutral-400">Team ID</label>
					<p id="team-id" class="text-neutral-100">{TeamID}</p>
				</div>
				<div>
					<label for="team-name" class="block text-sm font-medium text-neutral-400">Team Name</label>
					<p id="team-name" class="text-neutral-100">{team?.TeamName}</p>
				</div>
				<div>
					<label for="team-leader" class="block text-sm font-medium text-neutral-400"
						>Team Leader</label
					>
					<p id="team-leader" class="text-neutral-100">
						{team.Members.find((m: { sub: string; name: string }) => m.sub === team?.CreatedBy)
							?.name}
					</p>
				</div>
				<div>
					<label for="team-members" class="block text-sm font-medium text-neutral-400"
						>Team Members</label
					>
					<div id="team-members" class="space-y-2">
						{#each team?.Members as member}
							<p class="text-neutral-100">
								{member.name} - {member.phone}
							</p>
						{/each}
					</div>
				</div>
				<form method="POST" class="flex flex-col gap-4 sm:flex-row">
					{#if team?.CreatedBy === user?.id}
						<button
							formaction="?/delete"
							class="w-full rounded-lg bg-red-600 px-4 py-2 text-neutral-100 transition-colors duration-200 hover:bg-red-700 sm:w-auto"
						>
							Delete Team
						</button>
					{:else}
						<button
							formaction="?/leave"
							class="w-full rounded-lg bg-red-600 px-4 py-2 text-neutral-100 transition-colors duration-200 hover:bg-red-700 sm:w-auto"
						>
							Leave Team
						</button>
					{/if}
				</form>
			</div>
		</div>
	{:else}
		<div class="rounded-xl bg-neutral-800 p-4 shadow-lg sm:p-6">
			<h2 class="mb-4 text-xl font-bold sm:text-2xl">Join or Create a Team</h2>
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
						<label for="teamid" class="block text-sm font-medium text-neutral-400">Team ID</label>
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
	{/if}
</div>